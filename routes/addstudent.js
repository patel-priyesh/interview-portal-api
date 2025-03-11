var express = require('express');
var router = express.Router();
let controller = require('../controllers/addstudent');
let multer = require('multer');
let path = require('path');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/files')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname))
  }
})

const upload = multer({ storage: storage })

/* GET users listing. */
router.post('/create',upload.single("resume"),controller.studentcreate);
router.get('/read',controller.studentread);
router.patch('/update/:id',controller.studentupdate);
router.delete('/delete/:id',controller.studentdelete);

module.exports = router;
