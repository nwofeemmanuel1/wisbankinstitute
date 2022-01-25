const cloudinary = require('cloudinary');
const dotenv = require('dotenv');

dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
})

exports.uploads = (file, folder) => {
  return new Promise(resolve => {
    cloudinary.uploader.upload(file, (result) => {
    // console.log(`this is the cause of failure ${result}`)
      if(result.error)return  resolve({error:true,errMessage:result.error.message})
      resolve({
        error:false,
        url: result.secure_url,
        id: result.public_id,
        format:result.format
      })
    }, {
      resource_type: "auto",
      folder: folder
    })
  })
}