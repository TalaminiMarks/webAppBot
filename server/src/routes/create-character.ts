import { FastifyInstance } from "fastify";
import z from "zod";

import { prisma } from "../utils/prisma";

// Rota para registrar um personagem
export default async function route (fastify: FastifyInstance){
    // Cria um zod schema para validação dos dados que serão recebidos
    const schema = z.object({
        id: z.string(),
        name: z.string(),
        role: z.string(),
        initial: z.string()
    });
    // Declaração da rota
    fastify.post("/personagem/criar", async (req, res)=>{
        // Recupera as info que foram passados na requisição e valida com o schema
        const data = schema.parse(req.body);

        // Cria um registro no DB
        await prisma.character.create({
            data: {
                id: data.id,
                name: data.name,
                role: data.role,
                initial: data.initial
            }
        })

        // Retorna uma mensagem na requisição
        res.send(JSON.stringify({ message: 'Deu certo' }))
    });
}