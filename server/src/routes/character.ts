import { FastifyInstance } from "fastify";
import z from 'zod';

import { prisma } from "../utils/prisma";

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
                characterAttributes: true,
                characterExpertise: true,
                characterItens: true,
                characterSkills: true,
                characterSpells: true,
                // characterDeath: true
            }
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