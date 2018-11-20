import { gql } from "apollo-server";

export default gql`
  type Query {
    user(id: Int!): User
    users: [User]
  }

  type Mutation {
    signup(input: UserInput!): User!
  }

  type User {
    id: Int!
    name: String!
  }

  input UserInput {
    name: String!
  }
`;
