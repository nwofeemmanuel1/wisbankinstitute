const multer = require('multer');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads/')
  },
  filename: function (req, file, cb) {
    cb(null,`${Math.random(2983773794)}${file.originalname}`)
    //new Date().toISOString() + '-' + file.originalname
  }
})

const cb=(param)=>{
    console.log(param)
}
const fileFilter = (req, file, cb) => {
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png' || file.mimetype ==="video/mp4" ) {
    cb(null, true)
  } else {
    cb("Unsopported file")
  }
}

const upload = multer({
  storage: storage,
  // limits: {
  //   fileSize: 1024 * 1024
  // },
 fileFilter: fileFilter
})

module.exports = upload;