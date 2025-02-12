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
    
            if(user){
                await prisma.character.create({
                    data: {
                        id: character.id,
                        name: character.name,
                        age: character.age,
                        role: character.role,
                        baseRace: character.baseRace,
                        subRace: character.subRace,
                        userId: user.id
                    }
                })
                res.send({ message: "Personagem criado com sucesso" })
            }
            else {
                res.send({ message: "Erro: Usuario não cadastrado" })
            }
    
        })
}