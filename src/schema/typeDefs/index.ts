import { gql } from "apollo-server";

import user from "./user";
import pin from "./pin";
import location from "./location";

const query = gql`
  type Query {
    user(id: Int!): User
    users: [User]
    pin(id: Int!): Pin!
  }
`;

const mutation = gql`
  type Mutation {
    signup(input: UserInput!): User!
  }
`;

export default [user, pin, location, query, mutation];
