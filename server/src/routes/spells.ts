import { FastifyInstance } from "fastify";
import { z } from "zod";
import { prisma } from "../utils/utils";

export default function route(fastify: FastifyInstance){
    fastify.get("/magias", async(req, res)=>{
        const data = await prisma.spells.findMany({
            select: {
                id: true,
                name: true,
                description: true,
                damage: true,
                typeDamage: true
            }
        })

        res.send(data);
    })

    fastify.get("/magias/:id", async (req, res)=>{
        const schema = z.object({
            id: z.string().transform(val => Number(val))
        })

        const { id } = schema.parse(req.params);

        const data = await prisma.spells.findUniqueOrThrow({
            where: {
                id: id
            },
            select: {
                id: true,
                name: true,
                description: true,
                damage: true,
                typeDamage: true
            }
        })

        res.send(data);
    })
}