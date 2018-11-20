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
  signup: async function(_, { input }) {
    const user = await User.create(input).save();
    if (!user) throw new Error("something went wrong with signing up");
    return user;
  }
};

export const userRelations = {
  User: {
    createPin: async function({ id }, { input }) {
      console.log(id, input);
      const { locationInput } = input;
      const user = await User.findOne(id);
      const location = await Location.create(locationInput).save();
      console.log(location);
      const pin = await Pin.create({ user, location }).save();
      console.log(pin);
      return pin;
    },
    async pins({ id }) {
      const user = await User.findOne(id);
      return Pin.find({ where: { user } });
    }
  }
};
