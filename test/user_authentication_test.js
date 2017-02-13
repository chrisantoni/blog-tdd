var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/blogDB');
const User = require('../model/user')

const chai = require('chai')
const should = chai.should()
const expect = chai.expect()
const chaiHttp = require('chai-http')
const assertArrays = require('chai-arrays')

chai.use(assertArrays)
chai.use(chaiHttp)

describe('remove database',function(){
  it('remove all data',function(done){
    User.remove({},function(err){
      done()
    })
  })
})

describe('testing user authentication',function(){
  it('should return json data signUp',function(done){
    chai.request('http://localhost:3000').post('/sign_up')
    .send({
      username  : "tonichen",
      password  : "tonichen"
    })
    .end(function(err,res){
      res.should.have.status(200)
      done()
    })
  })
})

describe('testing user authentication',function(){
  it('should return token when login',function(done){
    chai.request('http://localhost:3000').post('/sign_in')
    .send({
      username  : "tonichen",
      password  : "tonichen"
    })
    .end(function(err,res){
      console.log(res.body.token);
      var token = res.body.token
      res.should.have.status(200)
      token.should.equal(token)
      done()
    })
  })
})
