"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var apollo_server_1 = require("apollo-server");
exports["default"] = apollo_server_1.gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  type Pin {\n    id: Int!\n    location: Location!\n    user: User!\n  }\n\n  input PinInput {\n    locationInput: LocationInput!\n  }\n"], ["\n  type Pin {\n    id: Int!\n    location: Location!\n    user: User!\n  }\n\n  input PinInput {\n    locationInput: LocationInput!\n  }\n"])));
var templateObject_1;
//# sourceMappingURL=pin.js.map