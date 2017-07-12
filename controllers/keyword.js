var express = require('express');
var router = express.Router();
var passport = require('passport');
var keywordData = require('../models/keyword');
router.get('/keyWordForm',function(req,res){
    res.render(keywordForm);
})
router.post('/keyword',keywordData.addKeyWord);
router.get('/keyword/:id',keywordData.getKeyWordById);
router.put('/keyword/:id',keywordData.updateKeyWord);
router.get('/keyword/',keywordData.getAllKeyWord);
router.delete('/keyword/:id',keywordData.deleteKeyword);
module.exports = router;