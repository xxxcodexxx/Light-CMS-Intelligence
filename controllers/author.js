var express = require('express');
var router = express.Router();
var passport = require('passport');
var AuthorData = require('../models/author');
router.get('/authorForm',function(req,res){
    res.render('authorForm');
});
router.post("/author",AuthorData.addAuthor );
router.get("/author",AuthorData.getAllAuthor);
router.get("/author/:id",AuthorData.getAuthorById);
router.delete("/author/:id",AuthorData.deleteAuthor);
router.put("/author/:id",AuthorData.updateAuthor);
module.exports = router;