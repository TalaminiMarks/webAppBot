import { FastifyInstance } from "fastify";
import { prisma } from "../utils/prisma";

export default async function equipament(fastify: FastifyInstance){
    fastify.get("/equipamentos", async (req, res)=>{
        const data = await prisma.items.findMany();

        res.send(data);
    })
}