import * as koa from "koa";
import * as cors from "@koa/cors";
import * as koaRouter from "koa-router";
import * as koaBody from "koa-bodyparser";
import { graphqlKoa, graphiqlKoa } from "apollo-server-koa";
import schema from "./schema";
import { createConnection } from "typeorm";

const app = new koa();
const router = new koaRouter();
const PORT = process.env.PORT || 4004;

// Setup the graphql server routes with the Schema
router.post("/graphql", koaBody(), graphqlKoa({ schema }));
router.get("/graphql", graphqlKoa({ schema }));

// Setup the /graphiql route to show the GraphiQL UI
router.get(
  "/graphiql",
  graphiqlKoa({
    endpointURL: "/graphql"
    // passHeader: `'Authorization': 'Bearer <test token>'`,
  })
);

app.use(cors());
app.use(router.routes());
app.use(router.allowedMethods());
createConnection().then(() => {
  app.listen(PORT, () => {
    const url = `http://localhost:${PORT}`;
    console.log(`   GraphQL server started on:\n   ${url}\n\n`);
  });
});
