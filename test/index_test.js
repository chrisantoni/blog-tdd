// var mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/blogDB');
//
// const chai = require('chai')
// const should = chai.should()
// const expect = chai.expect()
// const chaiHttp = require('chai-http')
// const assertArrays = require('chai-arrays')
// const Blog = require('../model/blog')
//
// chai.use(assertArrays)
// chai.use(chaiHttp)
//
// describe('remove database',function(){
//   it('remove all data',function(done){
//     Blog.remove({},function(err){
//       done()
//     })
//   })
// })
//
// describe('testing index resources',function(){
//   it('should return data blog json when post /article',function(done){
//     chai.request('http://localhost:3000').post('/article')
//     .send({
//       postID    : 1,
//       author    : "Tony Chen",
//       title     : "Merancang TDD buat Blog"
//     })
//     .end(function(err,res){
//       res.should.have.status(200)
//       res.body.data.postID.should.to.exist
//       done()
//     })
//   })
//
//   it('should return data blog json when get /article',function(done){
//     chai.request('http://localhost:3000').get('/article').end(function(err,res){
//       res.body.should.have.deep.property('[0].postID',1)
//       done()
//     })
//   })
//
//   it('should return data blog json when put /article',function(done){
//     chai.request('http://localhost:3000').put('/article')
//     .send({
//       postID :1,
//       author: "Toni Chen",
//       title: "Merancang TDD untuk blog",
//       body: "Perancangan tdd",
//       date: new Date()
//     })
//     .end(function(err,res){
//       res.should.have.status(200)
//       res.body.author.should.equal("Toni Chen")
//       done()
//     })
//   })
//
//   it('should return data blog json when delete /article',function(done){
//     chai.request('http://localhost:3000').delete('/article')
//     .send({
//       postID :1
//     })
//     .end(function(err,res){
//       res.should.have.status(200)
//       done()
//     })
//   })
// })
