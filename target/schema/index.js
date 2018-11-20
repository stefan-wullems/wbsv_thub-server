"use strict";
exports.__esModule = true;
var graphql_tools_1 = require("graphql-tools");
var resolvers_1 = require("./resolvers");
var typeDefs_1 = require("./typeDefs");
exports["default"] = graphql_tools_1.makeExecutableSchema({
    typeDefs: typeDefs_1["default"],
    resolvers: resolvers_1["default"]
});
//# sourceMappingURL=index.js.map