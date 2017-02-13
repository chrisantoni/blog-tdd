var mongoose = require('mongoose')
var Schema = mongoose.Schema

var BlogPostSchema = new Schema({
    postID    : Number,
    author    : String,
    title     : String,
    body      : String,
    date      : Date
});

var Blog = mongoose.model('Blog', BlogPostSchema);

// make this available to our users in our Node applications
module.exports = Blog;
