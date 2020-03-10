const models = require("../server/models");
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const db = require("../config/keys.js").MONGO_URI;
const imageKeys = require("../config/keys.js");
const expressGraphQL = require("express-graphql");
// const User = require("../server/models/User");
const schema = require("./schema/schema");
const cors = require("cors");
const app = express();

const multer = require("multer");
import {upload} from "./services/aws"



var AWS = require("aws-sdk");
AWS.config.update({region: imageKeys.AWS_REGION});

// Multer ships with storage engines DiskStorage and MemoryStorage
// And Multer adds a body object and a file or files object to the request object. The body object contains the values of the text fields of the form, the file or files object contains the files uploaded via the form.
var storage = multer.memoryStorage();
// var upload = multer({
//   storage: storage
// });
var upload = multer();




if (!db) {
  throw new Error("You must provide a string to connect to MongoDB Atlas");
}

// const connection = "mongodb://mongo:27017/mongo-test";

// const connectDb = () => {
//   return mongoose.connect(connection);
// };

mongoose
  .connect(db, {
    // introspection: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(err));
  
app.use(cors({
  origin:"http://localhost:3000"
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));



app.use(
  "/graphql", expressGraphQL(req => {
    return {
      schema,
      context: {
        token: req.headers.authorization
      },
      graphiql: true
    };
  })
);



// route to upload a pdf document file
// In upload.single("file") - the name inside the single-quote is the name of the field that is going to be uploaded.
// router.post("/upload",(req, res) => {
app.post("/fileUplode", (req, res) => {
      multer({ dest: 'temp/', limits: { fieldSize: 8 * 1024 * 1024 } }).single(
      'avatar'
    ),
    signup
})


app.post("/fileUplode", upload.single("image"), (req, res) => {
  const file = req.file;



// Create S3 service object
s3 = new AWS.S3({
  apiVersion: '2006-03-01'
});

// call S3 to retrieve upload file to specified bucket
var uploadParams = {
  Bucket: imageKeys.AWS_BUCKET_NAME,
  Key: file.originalname,
  Body: file.buffer,
  accessKeyId: imageKeys.AWS_ACCESS_KEY_ID,
  secretAccessKey: imageKeys.AWS_SECRET_ACCESS_KEY,
  ACL: "public-read"
};
// var file = process.argv[3];



// Configure the file stream and obtain the upload parameters
// var fs = require('fs');
// var fileStream = fs.createReadStream(file);


// fileStream.on('error', function (err) {
//   console.log('File Error', err);
// });
// uploadParams.Body = fileStream;
// var path = require('path');
// uploadParams.Key = path.basename(file);



  // const s3FileURL = imageKeys.AWS_Uploaded_File_URL_LINK;

  // let s3bucket = new AWS.S3({
  //   accessKeyId: imageKeys.AWS_ACCESS_KEY_ID,
  //   secretAccessKey: imageKeys.AWS_SECRET_ACCESS_KEY
  // });

  //Where you want to store your file

  var params = {
    // Bucket: imageKeys.AWS_BUCKET_NAME,
    // Key: file.originalname,
    // Body: file.buffer,
    ContentType: file.mimetype,
    ACL: "public-read"
  };








  s3bucket.upload(uploadParams, function(err, data) {
    if (err) {
      console.log('error',err)
      res.status(500).json({ error: true, Message: err });
    } else {
      console.log('sucsess',data)
      res.send({ data:5 });
    }
  });
});


module.exports = app;

