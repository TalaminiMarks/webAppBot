import fastify from "fastify";

import character from "./routes/character";
import create_character from "./routes/create-character";

const app = fastify();

app.register(character);
app.register(create_character);

app.listen({
    port: 3333
}).then(()=>{
    console.log("Server on http://localhost:3333");
});