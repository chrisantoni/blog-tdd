var express = require('express');
var router = express.Router();

const blogController = require('../Controller/blogController');
const userController = require('../Controller/userController');

/* Blog */
router.get('/article', blogController.getAllPost);
router.post('/article', blogController.createNewPost);
router.delete('/article', blogController.deletePost);
router.put('/article', blogController.updatePost);


module.exports = router;
