import User from "../../entity/User";
import Pin from "../../entity/Pin";

export const pinQueries = {
  pin: function(_, { id }) {
    return Pin.findOne(id);
  }
};

export const pinRelations = {
  Pin: {
    location: async function({ id }) {
      const pin = await Pin.findOne({ where: { id }, relations: ["location"] });
      return pin.location;
    }
  }
};
