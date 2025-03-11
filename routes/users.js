var express = require('express');
var router = express.Router();
let controllers = require('../controllers/user');

/* GET home page. */
router.post('/create',controllers.usercreate);
router.get('/read',controllers.userread);
router.patch('/update/:id',controllers.userupdate);
router.delete('/delete/:id',controllers.userdelete);

module.exports = router;
