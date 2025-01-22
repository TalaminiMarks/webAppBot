import { FastifyInstance } from "fastify";
import { prisma } from "../utils/prisma";
import z from "zod";

export default function route(fastify: FastifyInstance){
    fastify.get("/equipamentos", async (req, res)=>{
        const data = await prisma.items.findMany({
            select: {
                id: true,
                name: true,
                description: true
            }
        });

        res.send(data);
    });

    fastify.get("/equipamentos/:id", async (req, res)=>{
        const schema = z.object({
            id: z.string().transform(val => Number(val))
        })

        const { id } = schema.parse(req.params);

        const data = await prisma.items.findUniqueOrThrow({
            where: {
                id: id
            },
            select: {
                id: true,
                name: true,
                description: true
            }
        });

        res.send(data);
    });

    fastify.post("/adicionar-item", async (req, res)=>{
        const schema = z.object({
            characterId: z.string(),
            itemId: z.string().transform(val => Number(val)),
            damage: z.string(),
            typeDamage: z.string()
        })

        const { characterId, itemId, damage, typeDamage } = schema.parse(req.body);

        const data = await prisma.characterItens.create({
            data: {
                characterId: characterId,
                itemsId: itemId,
                value: damage,
                typeDamage: typeDamage
            }
        })

        if(data){
            res.send({
                message: "Item adicionado com sucesso!",
                item: data
            });
        }
        else{
            res.send({message: "Erro ao adicionar item!"});
        }
    });
}