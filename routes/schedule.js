var express = require('express');
var router = express.Router();
let controllers = require('../controllers/interviewschedule');

/* GET home page. */
router.post('/create',controllers.schedulecreate);
router.get('/read',controllers.scheduleread);
router.patch('/update/:id',controllers.scheduleupdate);
router.delete('/delete/:id',controllers.scheduledelete);

module.exports = router;
