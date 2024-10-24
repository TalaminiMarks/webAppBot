import { FastifyInstance } from "fastify";
import z from "zod";

import { prisma } from "../utils/prisma";

export default async function route (fastify: FastifyInstance){
    const schema = z.object({
        id: z.number(),
        name: z.string()
    });

    fastify.post("/personagem/criar", async (req, res)=>{
        const data = schema.parse(req.body);
        
        await prisma.character.create({
            data: {
                id: data.id,
                name: data.name
            }
        })

        res.send("Deu certo")
    });
}