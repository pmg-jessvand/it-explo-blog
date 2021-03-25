import * as expressive from "https://raw.githubusercontent.com/NMathar/deno-express/master/mod.ts";

const port = 3000;
const app = new expressive.App();

app.use(expressive.static_("./public"));

app.listen(port);
console.log(`App has started on localhost:${port}`);