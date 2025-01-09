import { FastifyInstance } from "fastify";
import { prisma } from "../utils/prisma";
import z from "zod"

export default function deleteItems(fastify: FastifyInstance){
    fastify.delete("/deletar-item/:id", async (req, res)=>{
        const schema = z.object({
            id: z.string()
        })

        const params = schema.parse(req.params);

        await prisma.characterItens.delete({
            where: {
                id: params.id
            }
        })

        res.send({message: "Item deletado com sucesso"})
    })
}