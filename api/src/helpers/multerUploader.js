const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploads = path.join(__dirname, '../../public/uploads');
    cb(null, uploads);
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  },
});

const fileFilter = (req, file, cb) => {
  if (file.mimetype.includes('image')) {
    cb(null, true);
  } else {
    req.fileInvalidError = true;
    cb(null, false);
  }
};

const fileUpload = multer({
  storage: storage,
  fileFilter: fileFilter,
});

module.exports = fileUpload;
