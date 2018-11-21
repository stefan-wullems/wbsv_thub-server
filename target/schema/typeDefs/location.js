"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var apollo_server_1 = require("apollo-server");
exports["default"] = apollo_server_1.gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  type Location {\n    id: Int\n    address: String\n    postalCode: String\n    city: String\n    country: String\n    latitude: Float\n    longitude: Float\n  }\n\n  input LocationInput {\n    address: String\n    postalCode: String\n    city: String\n    country: String\n    latitude: Float\n    longitude: Float\n  }\n"], ["\n  type Location {\n    id: Int\n    address: String\n    postalCode: String\n    city: String\n    country: String\n    latitude: Float\n    longitude: Float\n  }\n\n  input LocationInput {\n    address: String\n    postalCode: String\n    city: String\n    country: String\n    latitude: Float\n    longitude: Float\n  }\n"])));
var templateObject_1;
//# sourceMappingURL=location.js.map