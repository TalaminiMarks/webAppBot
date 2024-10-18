import fastify from "fastify";

import home from "./routes/home";

const app = fastify();

app.register(home);

app.listen({
    port: 3333
}).then(()=>{
    console.log("Server on http://localhost:3333");
});