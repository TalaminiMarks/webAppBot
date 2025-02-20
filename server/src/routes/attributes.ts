import { FastifyInstance } from "fastify";
import { prisma } from "../utils/utils";

export default function route(fastify: FastifyInstance){
    fastify.get("/atributos", async (req, res)=>{
        const attributes = await prisma.attributes.findMany({
            select: {
                id: true,
                name: true,
            },
            orderBy: {
                id: 'asc'
            }
        })

        res.send(attributes)
    })

    fastify.get('/pericias', async (req, res)=>{
        const expertise = await prisma.expertise.findMany({
            select: {
                id: true,
                name: true,
            },
            orderBy: {
                id: 'asc'
            }
        })
        
        res.send(expertise)
    })
}   