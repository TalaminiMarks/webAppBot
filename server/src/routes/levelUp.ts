import { FastifyInstance } from "fastify";
import { prisma } from "../utils/utils";
import z from "zod";

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
            for(let i = 0; i < data.attributes.length; i++){
                await prisma.characterAttributes.update({
                    where:{
                        id: data.attributes[i].id
                    },
                    data:{
                        value: data.attributes[i].value,
                        modValue: data.attributes[i].modValue
                    }
                })
            }
            for(let i = 0; i < data.expertises.length; i++){
                await prisma.characterExpertise.update({
                    where: {
                        id: data.expertises[i].id
                    },
                    data: {
                        value: data.expertises[i].value
                    }
                })
            }
            res.send({message: "Atualizado com sucesso!"})
        }
        else{
            res.send({message: "Erro na requisição"})
        }
    })
}