import fastify from "fastify";
import cors from "@fastify/cors"

import character from "./src/routes/character";
import create_character from "./src/routes/create-character";
import attributes from "./src/routes/attributes";
import expertise from "./src/routes/expertise";
import equipament from "./src/routes/equipament";
import skills from "./src/routes/skills";
import spells from "./src/routes/spells";
import deleteItems from "./src/routes/deleteItems";

// Raiz do servidor com o parâmetro de logger usando o pino-pretty
const app = fastify({
    logger: {
        level: "info",
        transport: {
            target: "pino-pretty"
        }
    }
});

// Registra as rotas na aplicação ou plugins. 
app.register(cors, {
    origin: true,
    methods: ["GET", "POST", "DELETE", "PUT"]
})
app.register(character);
app.register(create_character);
app.register(attributes);
app.register(expertise);
app.register(equipament);
app.register(skills);
app.register(spells);
app.register(deleteItems);

// Ouve uma porta para rodar o servidor
app.listen({
    port: 3333
}, (err)=>{
    if (err){
        app.log.error(err);
        process.exit(1);
    }
});