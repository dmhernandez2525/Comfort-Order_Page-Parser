// Bussness have an _id, userId, features, templett, bussinessData

const mongoose = require("mongoose");
const graphql = require("graphql");
const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLBoolean,GraphQLList } = graphql;
const User = mongoose.model("user");


const BussnessType = new GraphQLObjectType({
  name: "BussnessType",
  fields: () => ({
    _id: { type: GraphQLID },
    user: {
        type: require("./user_type"),
        resolve(parentValue) {

            return User.findById(parentValue.userId).then(user => {
                return user;
            });
        }
    },
    features: { type: GraphQLList },
    templett: { type: GraphQLString },
    name: { type: GraphQLString },
    bussnessData: { type: GraphQLList }
  })
});

module.exports = BussnessType;