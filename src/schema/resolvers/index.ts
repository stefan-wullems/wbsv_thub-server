import { userQueries, userMutations, userRelations } from "./user";
import { pinQueries, pinRelations } from "./pin";

export default {
  Query: {
    ...userQueries,
    ...pinQueries
  },
  Mutation: {
    ...userMutations
  },
  ...userRelations,
  ...pinRelations
};
