import { FastifyInstance } from "fastify"
import z from "zod"
import { getModAttr, prisma } from "../utils/utils"

export default function route(fastify: FastifyInstance){
    fastify.post("/personagem/criar", async (req, res)=> {
            const schema = z.object({
                id: z.string(),
                name: z.string(),
                age: z.string(),
                baseRace: z.string(),
                subRace: z.string(),
                role: z.string(),
                userId: z.string()
            })
    
            const character = schema.parse(req.body)
    
            const user = await prisma.user.findUnique({
                where: {
                    discordId: character.userId
                }
            })

            const attributes = await prisma.attributes.findMany();
            const attributesData = [];
            const baseValue = 8;
            for(let i = 0; i < attributes.length; i++){
                const obj = {attributesId: attributes[i].id, value: baseValue, modValue: getModAttr(baseValue)};
                attributesData.push(obj);
            }

            const expertise = await prisma.expertise.findMany();
            const expertiseData = [];
            for(let i = 0; i < expertise.length; i++){
                const obj = {expertiseId: expertise[i].id, value: getModAttr(baseValue)};
                expertiseData.push(obj);
            };

    
            if(user){
                await prisma.character.create({
                    data: {
                        id: character.id,
                        name: character.name,
                        age: character.age,
                        role: character.role,
                        baseRace: character.baseRace,
                        subRace: character.subRace,
                        userId: user.id,
                        equipLoad: 30,
                        characterAttributes: {
                            createMany: {
                                data: attributesData
                            }
                        },
                        characterExpertise: {
                            createMany: {
                                data: expertiseData
                            }
                        }
                    }
                })
                res.send({ message: "Personagem criado com sucesso" })
            }
            else {
                res.send({ message: "Erro: Usuario não cadastrado" })
            }
    
        })
}