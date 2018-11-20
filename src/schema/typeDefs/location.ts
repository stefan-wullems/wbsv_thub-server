import { gql } from "apollo-server";

export default gql`
  type Location {
    id: Int
    latitude: Float
    longitude: Float
    address: String
    postalCode: String
  }

  input LocationInput {
    latitude: Float
    longitude: Float
    address: String
    postalCode: String
  }
`;
