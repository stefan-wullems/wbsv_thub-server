"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var gql_1 = require("gql");
exports["default"] = gql_1.gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  type Query {\n    user(id: Int!): User\n  }\n\n  type User {\n    id: Int!\n    name: String!\n  }\n"], ["\n  type Query {\n    user(id: Int!): User\n  }\n\n  type User {\n    id: Int!\n    name: String!\n  }\n"])));
var templateObject_1;
//# sourceMappingURL=user.js.map