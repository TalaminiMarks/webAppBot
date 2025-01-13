import { FastifyInstance } from "fastify";
import { prisma } from "../utils/prisma";
import z from "zod";

export default function route(fastify: FastifyInstance){
    fastify.get("/equipamentos", async (req, res)=>{
        const data = await prisma.items.findMany({
            select: {
                id: true,
                name: true,
                description: true
            }
        });

        res.send(data);
    });

    fastify.get("/equipamentos/:id", async (req, res)=>{
        const schema = z.object({
            id: z.string().transform(val => Number(val))
        })

        const { id } = schema.parse(req.params);

        const data = await prisma.items.findUniqueOrThrow({
            where: {
                id: id
            },
            select: {
                id: true,
                name: true,
                description: true
            }
        });

        res.send(data);
    });
}