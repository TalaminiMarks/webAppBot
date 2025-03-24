import { FastifyInstance } from "fastify";
import { prisma } from "../utils/utils";
import z from "zod";

interface baseStatus {
    id: string;
    characterId: string;
    value: number;
}

interface attributeData extends baseStatus {
    attributesId: number;
    modValue: number;
}

interface expertiseData extends baseStatus {    
    expertiseId: number;
}

interface targetData {
    attributes: attributeData[];
    expertises: expertiseData[];
}

async function updateCharacterAttributes(target: targetData){

    for(let i = 0; i < target.attributes.length; i++){
        await prisma.characterAttributes.updateMany({
            where:{
                id: target.attributes[i].id
            },
            data:{
                value: target.attributes[i].value,
                modValue: target.attributes[i].modValue
            }
        })
    }
}

async function updateCharacterExpertise(target: targetData){
    for(let i = 0; i < target.expertises.length; i++){
        await prisma.characterExpertise.updateMany({
            where: {
                id: target.expertises[i].id
            },
            data: {
                value: target.expertises[i].value
            }
        })
    }
}

export default async function route(fastify: FastifyInstance){
    fastify.post("/upar-nivel", async (req, res)=>{
        const schema = z.object({
            attributes: z.array(z.object({
                id: z.string(),
                characterId: z.string(),
                attributesId: z.number(),
                value: z.number(),
                modValue: z.number()
            })),
            expertises: z.array(z.object({
                id: z.string(),
                characterId: z.string(),
                expertiseId: z.number(),
                value: z.number()
            }))
        })

        const data = schema.parse(req.body);

        if(data){
            await Promise.all([updateCharacterAttributes(data), updateCharacterExpertise(data)])
            res.send({message: "Atualizado com sucesso!"})
        }
        else{
            res.send({message: "Erro na requisição"})
        }
    })
}