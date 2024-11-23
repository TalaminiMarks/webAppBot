import { FastifyInstance } from "fastify";
import { prisma } from "../utils/prisma";

export default async function expertise(fastify: FastifyInstance) {
    fastify.get('/pericias', async (req, res)=>{
        const expertise = await prisma.expertise.findMany({
            select: {
                id: true,
                name: true
            },
            orderBy: {
                id: 'asc'
            }
        })
        res.send(expertise)
    })
}