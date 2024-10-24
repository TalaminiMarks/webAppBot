import fastify from "fastify";

import character from "./routes/character";
import create_character from "./routes/create-character";

const app = fastify({
    logger: {
        level: "info",
        transport: {
            target: "pino-pretty"
        }
    }
});

app.register(character);
app.register(create_character);

app.listen({
    port: 3333
}, (err)=>{
    if (err){
        app.log.error(err);
        process.exit(1);
    }
});