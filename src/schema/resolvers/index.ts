import { userQueries, userMutations } from "./user";

export default {
  Query: {
    ...userQueries
  },
  Mutation: {
    ...userMutations
  }
};
