import { FastifyInstance } from "fastify";
import z from 'zod';

import { prisma } from "../utils/prisma";

// Rota para recuperar todos os personagens do DB
export default function route(fastify: FastifyInstance){
    fastify.get("/personagem/:id", async (req, res)=>{
        const schema = z.object({
            id: z.string()
        })

        const { id } = schema.parse(req.params)
        const data = await prisma.character.findUniqueOrThrow({
            where: {
                id: id
            },
            include: {
                characterAttributes: true,
                characterExpertise: true,
                characterItens: true,
                characterSkills: true,
                characterSpells: true
            }
        });

        res.send(data);
    });

    fastify.get("/personagem/:id/itens", async (req, res)=>{
        const schema = z.object({
            id: z.string()
        })

        const { id } = schema.parse(req.params)

        const data = await prisma.characterItens.findMany({
            where: {
                characterId: id
            },
            select: {
                id: true,
                itemsId: true,
                bonusDamage: true,
                typeBonusDamage: true,
                additionalDescription: true
            }
        })

        res.send(data);
    });
}