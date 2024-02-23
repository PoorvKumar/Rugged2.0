const multer = require("multer");
const path = require("node:path");
 
const storageConfig = multer.diskStorage({
      // destinations is uploads folder 
      // under the project directory
    destination: path.join(__dirname, "../public/images/uploads"),
    filename: (req, file, res) => {
          // file name is prepended with current time
          // in milliseconds to handle duplicate file names
        res(null, Date.now() + "-" + file.originalname);
    },
});
 
// file filter for filtering only images
const fileFilterConfig = function(req, file, cb) {
    if (file.mimetype.startsWith("image/")) {
          // calling callback with true
          // as mimetype of file is image
        cb(null, true);
    } else {
          // false to indicate not to store the file
        cb(null, false);
    }
};
 
// creating multer object for storing
// with configuration
const upload = multer({
      // applying storage and file filter
    storage: storageConfig,
    limits: {
          // limits file size to 10 MB
        fileSize: 1024 * 1024 * 10
    },
    fileFilter: fileFilterConfig,
});
 
module.exports = upload;