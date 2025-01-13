import fastify from "fastify";
import cors from "@fastify/cors"

import character from "./src/routes/character";
import createCharacter from "./src/routes/createCharacter";
import attributes from "./src/routes/attributes";
import expertise from "./src/routes/expertise";
import equipament from "./src/routes/equipament";
import skills from "./src/routes/skills";
import spells from "./src/routes/spells";
import deleteItems from "./src/routes/deleteItems";

const app = fastify({
    logger: {
        level: "info",
        transport: {
            target: "pino-pretty"
        }
    }
});

// TODO: Need to fix origin to the correct URL
app.register(cors, {
    origin: true,
    methods: ["GET", "POST", "DELETE", "PUT"]
})
app.register(character);
app.register(createCharacter);
app.register(attributes);
app.register(expertise);
app.register(equipament);
app.register(skills);
app.register(spells);
app.register(deleteItems);


app.listen({
    port: 3333
}, (err)=>{
    if (err){
        app.log.error(err);
        process.exit(1);
    }
});