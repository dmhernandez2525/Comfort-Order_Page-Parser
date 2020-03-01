// Business have an _id, userId, features, template, businessData

const mongoose = require("mongoose");
const graphql = require("graphql");
const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLBoolean,GraphQLList } = graphql;
const User = mongoose.model("user");
const Feature = mongoose.model("feature");
const Business = mongoose.model("business");


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
    // features: { type:  new GraphQLList(GraphQLString) }, rfq

    features: {
        type: new GraphQLList(require("./feature_type")),
        resolve(parentValue) {
          return Business.findById(parentValue._id)
            .populate("features")
            .then(business => {
              // console.log(business.features)
              return business.features
            });
        }
    },

    template: { type: GraphQLString },
    name: { type: GraphQLString },
    url: { type: GraphQLString },
    phoneNumber: { type: GraphQLString },
    address: { type: GraphQLString },
    slogan: { type: GraphQLString },
  })
});

module.exports = BusinessType;