const graphql = require("graphql");
const mongoose = require('mongoose');
const Business = mongoose.model('business');
const { GraphQLObjectType, GraphQLString, GraphQLID,GraphQLList} = graphql;
const UserType = require("../schema/types/user_type");
const BusinessType = require("../schema/types/business_type");


const AuthService = require("../services/auth")

const mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    newBusiness: {
      type: BusinessType,
      args: {
          name: {type: GraphQLString},
          userId: { type: GraphQLID },
          features: { type: GraphQLList },
          templett: { type: GraphQLString },
          businessData: { type: GraphQLList }
      },
      resolve(parentValue, {
            name,
            userId,
            features,
            templett,
            businessData
      }) {
        let newBussnes =  new Business({
            name,
            userId,
            features,
            templett,
            businessData
        })
        console.log(newBussnes)
        newBussnes.save();
        return newBussnes
      }
    },
    register: {
      type: UserType,
      args: {
        name: { type: GraphQLString },
        email: { type: GraphQLString },
        password: { type: GraphQLString }
      },
      resolve(_, args) {
        return AuthService.register(args);
      }
    },
    login: {
      type: UserType,
      args: {
        email: { type: GraphQLString },
        password: { type: GraphQLString }
      },
      resolve(_, args) {
        return AuthService.login(args);
      }
    },
    logout: {
      type: UserType,
      args: {
        // all we need to log the user our is an id
        _id: { type: GraphQLID }
      },
      resolve(_, args) {
        return AuthService.logout(args);
      }
    },
    verifyUser: {
      type: UserType,
      args: {
        token: { type: GraphQLString }
      },
      resolve(_, args) {
        return AuthService.verifyUser(args);
      }
    }
  }
});

module.exports = mutation;