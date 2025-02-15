import { FastifyInstance } from "fastify"
import z from "zod"
import { prisma } from "../utils/prisma"

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
            for(let i = 0; i < attributes.length; i++){
                const obj = {attributesId: attributes[i].id, value: 8};
                attributesData.push(obj);
            }

            const expertise = await prisma.expertise.findMany();
            const expertiseData = [];
            for(let i = 0; i < expertise.length; i++){
                const obj = {expertiseId: expertise[i].id, value: 0};
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