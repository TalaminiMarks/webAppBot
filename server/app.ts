import fastify from "fastify";

import character from "./src/routes/character";
import create_character from "./src/routes/create-character";
import attributes from "./src/routes/attributes";

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
app.register(character);
app.register(create_character);
app.register(attributes)

// Ouve uma porta para rodar o servidor
app.listen({
    port: 3333
}, (err)=>{
    if (err){
        app.log.error(err);
        process.exit(1);
    }
});