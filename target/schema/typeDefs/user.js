"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var apollo_server_1 = require("apollo-server");
exports["default"] = apollo_server_1.gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  type User {\n    id: Int!\n    name: String!\n    createPin(input: PinInput): Pin!\n    pins: [Pin]\n  }\n\n  input UserInput {\n    name: String!\n  }\n"], ["\n  type User {\n    id: Int!\n    name: String!\n    createPin(input: PinInput): Pin!\n    pins: [Pin]\n  }\n\n  input UserInput {\n    name: String!\n  }\n"])));
var templateObject_1;
//# sourceMappingURL=user.js.map