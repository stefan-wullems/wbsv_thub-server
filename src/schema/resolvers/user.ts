import User from "../../entity/User";

export const userQueries = {
  user: function(_, { id }) {
    return User.findOne(id);
  },

  users: function() {
    return User.find();
  }
};

export const userMutations = {
  signup: async function(_, { input }) {
    console.log(input);
    const user = await User.create(input).save();
    if (!user) throw new Error("something went wrong with signing up");
    return user;
  }
};
