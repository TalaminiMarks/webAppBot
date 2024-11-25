import { FastifyInstance } from "fastify";
import z from 'zod';

import { prisma } from "../utils/prisma";

// Rota para recuperar todos os personagens do DB
export default async function route(fastify: FastifyInstance){
    fastify.get("/personagens/:id", async (req, res)=>{
        const schema = z.object({
            id: z.string()
        })

        const params = schema.parse(req.params)
        const data = await prisma.character.findUniqueOrThrow({
            select: {
                name: true,
                health: true,
                age: true,
                race: true,
                role: true,
                languages: true,
                affiliation: true,
                previous: true,
                defect: true,
                ideas: true,
                personality: true,
                history: true,
                xp: true,
                gold: true
            },
            where: {
                id: params.id
            }
        });

        res.send(data);
    });
}