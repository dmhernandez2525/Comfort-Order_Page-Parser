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

const router = express.Router();
const multer = require("multer");
var AWS = require("aws-sdk");

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
app.post("/fileUplode", upload.single("image"), (req, res) => {
  const file = req.file;
  console.log(req.file)
  // console.log(222222222222222222222222222)
  // console.log(111111111111111111111111)
  // may need when sending back rfq
  // const s3FileURL = imageKeys.AWS_Uploaded_File_URL_LINK;

  let s3bucket = new AWS.S3({
    accessKeyId: imageKeys.AWS_ACCESS_KEY_ID,
    secretAccessKey: imageKeys.AWS_SECRET_ACCESS_KEY,
    region: imageKeys.AWS_REGION
  });

  console.log(imageKeys.AWS_ACCESS_KEY_ID);
  console.log(imageKeys.AWS_SECRET_ACCESS_KEY);

  //Where you want to store your file

  // var params = {
  //   Bucket: imageKeys.AWS_BUCKET_NAME,
  //   Key: file.originalname,
  //   Body: file.buffer,
  //   ContentType: file.mimetype,
  //   ACL: "public-read"
  // };

  // s3bucket.upload(params, function(err, data) {
  //   if (err) {
  //     res.status(500).json({ error: true, Message: err });
  //   } else {
      res.send({ data:5 });
    // }
  // });
});


module.exports = app;

