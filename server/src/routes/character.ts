import { FastifyInstance } from "fastify";
import z from 'zod';

import { prisma } from "../utils/utils";

// Rota para recuperar todos os personagens do DB
export default function route(fastify: FastifyInstance){
    fastify.addHook('preHandler', async (req)=>{
        await req.jwtVerify();
    })

    fastify.get("/personagem", async (req, res)=>{
        const schema = z.object({
            sub: z.string()
        })

        const jwt = schema.parse(req.user)

        const user = await prisma.user.findUniqueOrThrow({
            where: {
                discordId: jwt.sub
            },
            include: {
                Character: true
            }
        })

        if (!user) res.send("Usuário não encontrado");

        const data = await prisma.character.findMany({
            where: {
                userId: user.id
            },
            select: {
                id: true,
                name: true,
                baseRace: true,
                subRace: true,
                role: true
            }
        });

        if(!data) res.send({message: "Error: Nenhum personagem encontrado"})

        res.send(data);
    });

    fastify.get("/personagem/:id", async (req, res)=>{
        const schema = z.object({
            id: z.string()
        });

        const { id } = schema.parse(req.params);

        const data = await prisma.character.findUnique({
            where: {
                id: id
            },
            include: {
                characterAttributes: {
                    omit: {
                        createdAt: true,
                        updatedAt: true
                    }
                },
                characterExpertise: {
                    omit: {
                        updatedAt: true,
                        createdAt: true
                    }
                },
                characterItens: {
                    omit: {
                        createdAt: true
                    }
                },
                characterSkills: {
                    omit: {
                        createdAt: true
                    }
                },
                characterSpells: {
                    omit: {
                        createdAt: true
                    }
                },
            },
        })

        res.send(data);
    })

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