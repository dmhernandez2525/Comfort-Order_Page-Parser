const graphql = require("graphql");
const { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLID } = graphql;
const UserType = require("../schema/types/user_type");
const BussnessType = require("../schema/types/bussness_type");

const Bussness = mongoose.model('bussness');

const AuthService = require("../services/auth")

const mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    newBussness: {
      type: BussnessType,
      args: {
          name: {type: GraphQLString},
          userId: { type: GraphQLID },
          features: { type: GraphQLList },
          templett: { type: GraphQLString },
          bussnessData: { type: GraphQLList }
      },
      resolve(parentValue, {
            name,
            userId,
            features,
            templett,
            bussnessData
      }) {
        return new Bussness({
            name,
            userId,
            features,
            templett,
            bussnessData
        }).save();
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