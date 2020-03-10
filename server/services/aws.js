// import { userModel as Users } from '../models';
import aws from 'aws-sdk';
import fs from 'fs';
import keys from '../../config/keys'

export default {
  signup(req, res) {
    aws.config.setPromisesDependency();
    aws.config.update({
      accessKeyId: keys.AWS_ACCESS_KEY_ID,
      secretAccessKey: keys.AWS_SECRET_ACCESS_KEY,
      region: keys.AWS_REGION
    });
    const s3 = new aws.S3();
    var params = {
      ACL: 'public-read',
      Bucket: keys.AWS_BUCKET_NAME,
      Body: fs.createReadStream(req.file.path),
      Key: `userAvatar/${req.file.originalname}`
    };

    s3.upload(params, (err, data) => {
      if (err) {
        console.log('Error occured while trying to upload to S3 bucket', err);
      }

      if (data) {
        fs.unlinkSync(req.file.path); // Empty temp folder
        const locationUrl = data.Location;
        console.log(data)
        // let newUser = new Users({ ...req.body, avatar: locationUrl });
        // newUser
        //   .save()
        //   .then(user => {
        //     res.json({ message: 'User created successfully', user });
        //   })
        //   .catch(err => {
        //     console.log('Error occured while trying to save to DB');
        //   });
      }
    });
  }
};