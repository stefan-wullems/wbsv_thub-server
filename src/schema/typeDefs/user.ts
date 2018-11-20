import { gql } from "apollo-server";

export default gql`
  type User {
    id: Int!
    name: String!
    createPin(input: PinInput): Pin!
    pins: [Pin]
  }

  input UserInput {
    name: String!
  }
`;
