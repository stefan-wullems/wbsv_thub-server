"use strict";
exports.__esModule = true;
var koa = require("koa");
var cors = require("@koa/cors");
var koaRouter = require("koa-router");
var koaBody = require("koa-bodyparser");
var apollo_server_koa_1 = require("apollo-server-koa");
var schema_1 = require("./schema");
var typeorm_1 = require("typeorm");
var app = new koa();
var router = new koaRouter();
var PORT = process.env.PORT || 4001;
// Setup the graphql server routes with the Schema
router.post("/graphql", koaBody(), apollo_server_koa_1.graphqlKoa({ schema: schema_1["default"] }));
router.get("/graphql", apollo_server_koa_1.graphqlKoa({ schema: schema_1["default"] }));
// Setup the /graphiql route to show the GraphiQL UI
router.get("/graphiql", apollo_server_koa_1.graphiqlKoa({
    endpointURL: "/graphql"
    // passHeader: `'Authorization': 'Bearer <test token>'`,
}));
app.use(cors());
app.use(router.routes());
app.use(router.allowedMethods());
typeorm_1.createConnection().then(function () {
    app.listen(PORT, function () {
        var url = "http://localhost:" + PORT;
        console.log("   GraphQL server started on:\n   " + url + "\n\n");
    });
});
//# sourceMappingURL=index.js.map