// Business have an _id, userId, features, templett, bussinessData

const mongoose = require("mongoose");
const graphql = require("graphql");
const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLBoolean,GraphQLList } = graphql;
const User = mongoose.model("user");


const BusinessType = new GraphQLObjectType({
  name: "BusinessType",
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
    businessData: { type: GraphQLList }
  })
});

module.exports = BusinessType;