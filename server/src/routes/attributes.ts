import { FastifyInstance } from "fastify";
import { prisma } from "../utils/prisma";

export default async function attributes(fastify: FastifyInstance){
    fastify.get("/atributos", async (req, res)=>{
        const attributes = await prisma.attributes.findMany({
            select: {
                id: true,
                name: true,
                CharacterAttributes: {
                    select: {
                        value: true,
                        attributesId: true,
                        characterId: true,
                    }
                }
            },
            orderBy: {
                id: 'asc'
            }
        })

        res.send(attributes)
    })
}   