import { FastifyInstance } from "fastify";

// Rota para recuperar todos os personagens do DB
export default async function route(fastify: FastifyInstance){
    fastify.get("/personagem", (req, res)=>{
        res.send({ rota: "personagens" });
    });
}