import fastify from "fastify";

const app = fastify();

/**
 * @type {import('fastify').FastifyInstance} 
 * Instance of fastify
 */

app.get("/", ()=>{
    return "hello";
});

app.listen({
    port: 3333
}).then(()=>{
    console.log("Server on http://localhost:3333");
});