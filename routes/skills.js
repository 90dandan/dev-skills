var express = require('express');
var router = express.Router();
var skillDb = require('../models/skill')
var skillsCtrl = require('../controllers/skill')

/* GET users listing. */
router.get('/', skillsCtrl.index);
router.get('/:id', skillsCtrl.show);
module.exports = router;
