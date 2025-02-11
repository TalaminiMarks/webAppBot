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

    fastify.post("/personagem/criar", async (req, res)=> {
        const schema = z.object({
            id: z.string(),
            name: z.string(),
            age: z.string(),
            baseRace: z.string(),
            subRace: z.string(),
            role: z.string(),
            userId: z.string()
        })

        const character = schema.parse(req.body)

        const user = await prisma.user.findUnique({
            where: {
                discordId: character.userId
            }
        })

        if(user){
            await prisma.character.create({
                data: {
                    id: character.id,
                    name: character.name,
                    age: character.age,
                    role: character.role,
                    baseRace: character.baseRace,
                    subRace: character.subRace,
                    userId: user.id
                }
            })
            res.send({ message: "Personagem criado com sucesso" })
        }
        else {
            res.send({ message: "Erro: Usuario não cadastrado" })
        }

    })
}