import { gql } from "apollo-server";

export default gql`
  type Location {
    id: Int
    address: String
    postalCode: String
    city: String
    country: String
    latitude: Float
    longitude: Float
  }

  input LocationInput {
    address: String
    postalCode: String
    city: String
    country: String
    latitude: String
    longitude: String
  }
`;
