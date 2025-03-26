import { FastifyInstance } from "fastify";
import { prisma } from "../utils/utils";
import z from "zod";

export default function route(fastify: FastifyInstance){
    fastify.get("/equipamentos", async (req, res)=>{
        const data = await prisma.items.findMany({
            select: {
                id: true,
                name: true,
                description: true,
                damage: true,
                typeDamage: true,
                equippable: true,
                weight: true,
                type: true
            },
            orderBy: {
                name: "asc"
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
                description: true,
                damage: true,
                typeDamage: true
            }
        });

        res.send(data);
    });

    fastify.post("/equipamentos/adicionar", async (req, res)=>{
        const schema = z.object({
            characterId: z.string(),
            itemId: z.string().transform(val => Number(val)),
            bonusDamage: z.string().optional(),
            bonusTypeDamage: z.string().optional(),
            additionalDescription: z.string().optional()
        })

        const { 
            characterId, 
            itemId, 
            additionalDescription, 
            bonusDamage, 
            bonusTypeDamage 
        } = schema.parse(req.body);

        const data = await prisma.characterItens.create({
            data: {
                characterId: characterId,
                itemsId: itemId,
                bonusDamage: bonusDamage,
                typeBonusDamage: bonusTypeDamage,
                additionalDescription: additionalDescription
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

    fastify.delete("/equipamentos/deletar/:id", async (req, res)=>{
        const schema = z.object({
            id: z.string()
        })

        const { id } = schema.parse(req.params);

        await prisma.characterItens.delete({
            where: {
                id: id
            }
        })

        res.send({ message: "Item deletado com sucesso" })
    });

    fastify.put("/equipamentos/atualizar:id:equipped", async (req, res)=>{
        const schema = z.object({
            id: z.string(),
            equipped: z.string().transform(v => Boolean(v))
        })

        const data = schema.parse(req.query)

        await prisma.characterItens.update({
            where: {
                id: data.id
            },
            data: {
                equipped: data.equipped
            }
        })

        res.send({message: "atualizado"})
    })
}