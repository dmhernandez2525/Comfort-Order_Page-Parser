const mongoose = require("mongoose");
const graphql = require("graphql");
const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLBoolean,GraphQLList } = graphql;
const User = mongoose.model("picSlide");


const PicSlideType = new GraphQLObjectType({
  name: "PicSlideType",
  fields: () => ({
    _id: { type: GraphQLID },
    text: { type: new GraphQLList(GraphQLString) },
    pic: { type: new GraphQLList(GraphQLString) }
  })
});

module.exports = PicSlideType;