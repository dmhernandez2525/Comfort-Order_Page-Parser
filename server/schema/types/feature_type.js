// Feature have an _id, cssName, name, data, order

const mongoose = require("mongoose");
const graphql = require("graphql");
const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLBoolean,GraphQLList } = graphql;


const FeatureType = new GraphQLObjectType({
  name: "FeatureType",
  fields: () => ({
    _id: { type: GraphQLID },
    data: { type:  new GraphQLList(GraphQLString) },
    cssName: { type: GraphQLString },
    name: { type: GraphQLString },
    order: { type: GraphQLString }
  })
});

module.exports = FeatureType;