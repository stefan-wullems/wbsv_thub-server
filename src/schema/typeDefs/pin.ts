import { gql } from "apollo-server";

export default gql`
  type Pin {
    id: Int!
    location: Location!
    user: User!
  }

  input PinInput {
    locationInput: LocationInput!
  }
`;
