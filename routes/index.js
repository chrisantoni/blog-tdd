var express = require('express');
var router = express.Router();

const blogController = require('../Controller/blogController');
const userController = require('../Controller/userAuthentication');

/*User Authentication*/
router.post('/sign_up',userController.sign_up)
router.post('/sign_in',userController.sign_in)

/* Blog */
router.get('/article', blogController.getAllPost);
router.post('/article', blogController.createNewPost);
router.delete('/article', blogController.deletePost);
router.put('/article', blogController.updatePost);


module.exports = router;
