const graphql = require("graphql");
const mongoose = require('mongoose');

const Business = mongoose.model('business');
const PicSlide = mongoose.model('picSlide');

const { GraphQLObjectType, GraphQLString, GraphQLID,GraphQLList} = graphql;

const UserType = require("../schema/types/user_type");
const BusinessType = require("../schema/types/business_type");
const PicSlideType = require("../schema/types/pic_slide_type");


const AuthService = require("../services/auth")

const mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    makeBusiness: {
      type: BusinessType,
      args: {
          name: {type: GraphQLString},
          map: {type: GraphQLString},
          url: {type: GraphQLString},
          phoneNumber: {type: GraphQLString},
          address: {type: GraphQLString},
          slogan: {type: GraphQLString},
          userId: { type: GraphQLID },
          features: { type: new GraphQLList(GraphQLString) },
          template: { type: GraphQLString },
          businessData: { type: new GraphQLList(GraphQLString) }
      },
      resolve(parentValue, {
            name,
            map,
            url,
            phoneNumber,
            address,
            slogan,
            userId,
            features,
            template,
            businessData
      }) {
        let newBusiness =  new Business({
            name,
            map,
            url,
            phoneNumber,
            address,
            slogan,
            userId,
            features,
            template,
            businessData
        })
        newBusiness.save();
        return newBusiness
      }
    },
    makePicSlide: {
      type: PicSlideType,
      args: {
          pic: { type: new GraphQLList(GraphQLString) },
          text: { type: new GraphQLList(GraphQLString) }
      },
      resolve(parentValue, {}) {
        let newPicSlide = new PicSlide({
            text,
            pic
        })
        return newPicSlide
      }
    },
    register: {
      type: UserType,
      args: {
        name: { type: GraphQLString },
        role: { type: GraphQLString },
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