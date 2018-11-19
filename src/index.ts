import { MongoClient, ObjectId } from "mongodb";
import * as express from "express";
import * as bodyParser from "body-parser";
import { graphqlExpress, graphiqlExpress } from "graphql-server-express";
import { makeExecutableSchema } from "graphql-tools";
import * as cors from "cors";
import { prepare } from "./utils/index";
import { gql } from "apollo-server";

const app = express();

app.use(cors());

const homePath = "/graphiql";
const URL = "http://localhost";
const PORT = 3001;
const MONGO_URL = "mongodb://localhost:27017";

export const start = async () => {
  try {
    const db = (await MongoClient.connect(MONGO_URL)).db("thub");

    const Users = db.collection("users");
    const Comments = db.collection("comments");

    const typeDefs = [
      gql`
        type Query {
          user(_id: String): User
          users: [User]
        }

        type User {
          _id: String
          name: String
        }

        type Mutation {
          createUser(name: String): User
        }

        schema {
          query: Query
          mutation: Mutation
        }
      `
    ];

    const resolvers = {
      Query: {
        user: async (_, { _id }) => {
          return prepare(await Users.findOne(_id));
        },
        users: async () => {
          return (await Users.find({}).toArray()).map(prepare);
        }
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
        createUser: async (_, args) => {
          const res = await Users.insertOne(args);
          return prepare(res.ops[0]);
        }
      }
    };

    const schema = makeExecutableSchema({
      typeDefs,
      resolvers
    });

    app.use("/graphql", bodyParser.json(), graphqlExpress({ schema }));

    app.use(
      homePath,
      graphiqlExpress({
        endpointURL: "/graphql"
      })
    );

    app.listen(PORT, () => {
      console.log(`Visit ${URL}:${PORT}${homePath}`);
    });
  } catch (e) {
    console.error(e);
  }
};

start();
