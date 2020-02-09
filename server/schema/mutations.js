const graphql = require("graphql");
const mongoose = require('mongoose');

const Business = mongoose.model('business');
const PicSlide = mongoose.model('picSlide');
const Feature = mongoose.model("feature");

const { GraphQLObjectType, GraphQLString, GraphQLID,GraphQLList} = graphql;

const UserType = require("../schema/types/user_type");
const BusinessType = require("../schema/types/business_type");
const PicSlideType = require("../schema/types/pic_slide_type");
const FeatureType = require("../schema/types/feature_type");



const AuthService = require("../services/auth")

const mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    makeBusiness: {
      type: BusinessType,
      args: {
          name: {type: GraphQLString},
          url: {type: GraphQLString},
          phoneNumber: {type: GraphQLString},
          address: {type: GraphQLString},
          slogan: {type: GraphQLString},
          userId: { type: GraphQLID },
          features: { type: new GraphQLList(GraphQLID) },
          template: { type: GraphQLString },
      },
      resolve(parentValue, {
            name,
            url,
            phoneNumber,
            address,
            slogan,
            userId,
            features,
            template,
      }) {
        let newBusiness =  new Business({
            name,
            url,
            phoneNumber,
            address,
            slogan,
            userId,
            features,
            template,
        })
        console.log(features)
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

    makeFeature: {
      type: FeatureType,
      args: {
          cssName: { type: GraphQLString },
          name: { type: GraphQLString },
          data: { type: GraphQLString },
          order: { type: GraphQLString }
      },
      resolve(parentValue, {
        cssName,
        name,
        data,
        order
      }) {
        let newFeature = new Feature({
            cssName,
            name,
            data,
            order
        })         
        newFeature.save();
        return newFeature
      }
    },
    updateFeature: {
      type: FeatureType,
      args: {
        _id: {type: GraphQLID},
        cssName: { type: GraphQLString },
        name: { type: GraphQLString },
        data: { type: GraphQLString },
        order: { type: GraphQLString }
      },
      resolve(_, {
        _id,
        cssName,
        name,
        data,
        order
      }){
        return Feature.findById(_id).then(feature => {
          feature.cssName = cssName 
          feature.name = name 
          feature.data = data 
          feature.order = order 
          feature.save()
          return feature 
          // return feature rfq may need to send down just id 
        })
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