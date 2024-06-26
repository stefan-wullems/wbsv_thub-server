"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var user_1 = require("./user");
var pin_1 = require("./pin");
exports["default"] = __assign({ Query: __assign({}, user_1.userQueries, pin_1.pinQueries), Mutation: __assign({}, user_1.userMutations) }, user_1.userRelations, pin_1.pinRelations);
//# sourceMappingURL=index.js.map