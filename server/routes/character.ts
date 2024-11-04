import { FastifyInstance } from "fastify";

import { prisma } from "../utils/prisma";

// Rota para recuperar todos os personagens do DB
export default async function route(fastify: FastifyInstance){
    fastify.get("/personagens", async (req, res)=>{
        const data = await prisma.character.findMany();

        res.send(data);
    });
}