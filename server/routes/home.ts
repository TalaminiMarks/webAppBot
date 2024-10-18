import { FastifyInstance } from "fastify";

export default async function route(fastify: FastifyInstance){
    fastify.get("/", (req, res)=>{
        res.send({ hello: "world" });
    });
}