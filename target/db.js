"use strict";
exports.__esModule = true;
var mongodb_1 = require("mongodb");
var MONGO_URL = "mongodb://localhost:27017";
var db = (yield mongodb_1.MongoClient.connect(MONGO_URL)).db("blog");
var Posts = db.collection("posts");
var Comments = db.collection("comments");
//# sourceMappingURL=db.js.map