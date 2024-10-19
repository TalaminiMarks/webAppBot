import { FastifyInstance } from "fastify";

export default async function route(fastify: FastifyInstance){
    fastify.get("/personagem", (req, res)=>{
        res.send({ rota: "personagens" });
    });
}