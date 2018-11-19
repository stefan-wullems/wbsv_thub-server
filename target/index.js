"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
exports.__esModule = true;
var mongodb_1 = require("mongodb");
var express = require("express");
var bodyParser = require("body-parser");
var graphql_server_express_1 = require("graphql-server-express");
var graphql_tools_1 = require("graphql-tools");
var cors = require("cors");
var index_1 = require("./utils/index");
var apollo_server_1 = require("apollo-server");
var app = express();
app.use(cors());
var homePath = "/graphiql";
var URL = "http://localhost";
var PORT = 3001;
var MONGO_URL = "mongodb://localhost:27017";
exports.start = function () { return __awaiter(_this, void 0, void 0, function () {
    var db, Users_1, Comments, typeDefs, resolvers, schema, e_1;
    var _this = this;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, mongodb_1.MongoClient.connect(MONGO_URL)];
            case 1:
                db = (_a.sent()).db("thub");
                Users_1 = db.collection("users");
                Comments = db.collection("comments");
                typeDefs = [
                    apollo_server_1.gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n        type Query {\n          user(_id: String): User\n          users: [User]\n        }\n\n        type User {\n          _id: String\n          name: String\n        }\n\n        type Mutation {\n          createUser(name: String): User\n        }\n\n        schema {\n          query: Query\n          mutation: Mutation\n        }\n      "], ["\n        type Query {\n          user(_id: String): User\n          users: [User]\n        }\n\n        type User {\n          _id: String\n          name: String\n        }\n\n        type Mutation {\n          createUser(name: String): User\n        }\n\n        schema {\n          query: Query\n          mutation: Mutation\n        }\n      "])))
                ];
                resolvers = {
                    Query: {
                        user: function (_, _a) {
                            var _id = _a._id;
                            return __awaiter(_this, void 0, void 0, function () {
                                var _b;
                                return __generator(this, function (_c) {
                                    switch (_c.label) {
                                        case 0:
                                            _b = index_1.prepare;
                                            return [4 /*yield*/, Users_1.findOne(_id)];
                                        case 1: return [2 /*return*/, _b.apply(void 0, [_c.sent()])];
                                    }
                                });
                            });
                        },
                        users: function () { return __awaiter(_this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, Users_1.find({}).toArray()];
                                    case 1: return [2 /*return*/, (_a.sent()).map(index_1.prepare)];
                                }
                            });
                        }); }
                    },
                    //   User: {
                    //     comments: async ({ _id }) => {
                    //       return prepare(await Comments.find({ postId: _id }));
                    //     }
                    //   },
                    //   Comment: {
                    //     post: async ({ postId }) => {
                    //       return prepare(await Posts.findOne(postId));
                    //     }
                    //   },
                    Mutation: {
                        createUser: function (_, args) { return __awaiter(_this, void 0, void 0, function () {
                            var res;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, Users_1.insertOne(args)];
                                    case 1:
                                        res = _a.sent();
                                        return [2 /*return*/, index_1.prepare(res.ops[0])];
                                }
                            });
                        }); }
                    }
                };
                schema = graphql_tools_1.makeExecutableSchema({
                    typeDefs: typeDefs,
                    resolvers: resolvers
                });
                app.use("/graphql", bodyParser.json(), graphql_server_express_1.graphqlExpress({ schema: schema }));
                app.use(homePath, graphql_server_express_1.graphiqlExpress({
                    endpointURL: "/graphql"
                }));
                app.listen(PORT, function () {
                    console.log("Visit " + URL + ":" + PORT + homePath);
                });
                return [3 /*break*/, 3];
            case 2:
                e_1 = _a.sent();
                console.error(e_1);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.start();
var templateObject_1;
//# sourceMappingURL=index.js.map