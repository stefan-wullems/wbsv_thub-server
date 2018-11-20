"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var apollo_server_1 = require("apollo-server");
var user_1 = require("./user");
var pin_1 = require("./pin");
var location_1 = require("./location");
var query = apollo_server_1.gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  type Query {\n    user(id: Int!): User\n    users: [User]\n    pin(id: Int!): Pin!\n  }\n"], ["\n  type Query {\n    user(id: Int!): User\n    users: [User]\n    pin(id: Int!): Pin!\n  }\n"])));
var mutation = apollo_server_1.gql(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  type Mutation {\n    signup(input: UserInput!): User!\n  }\n"], ["\n  type Mutation {\n    signup(input: UserInput!): User!\n  }\n"])));
exports["default"] = [user_1["default"], pin_1["default"], location_1["default"], query, mutation];
var templateObject_1, templateObject_2;
//# sourceMappingURL=index.js.map