import User from "../../entity/User";
import Location from "../../entity/Location";
import Pin from "../../entity/Pin";

export const userQueries = {
  user: function(_, { id }) {
    return User.findOne(id);
  },

  users: function() {
    return User.find();
  }
};

export const userMutations = {
  signup: function(_, { input }) {
    return User.create(input).save();
  }
};

export const userRelations = {
  User: {
    createPin: async function({ id }, { input }) {
      const { locationInput } = input;
      const user = await User.findOne(id);
      const location = await Location.create(locationInput).save();
      return Pin.create({ user, location }).save();
    },
    async pins({ id }) {
      const user = await User.findOne(id);
      const pin = await Pin.find({ where: { user } });
      return pin;
    }
  }
};
