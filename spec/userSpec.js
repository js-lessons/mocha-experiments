var sinon = require('sinon'),
  chai = require('chai'),
  expect = chai.expect,
  should = chai.should(),
  assert = chai.assert;

chai.use(require("sinon-chai"));

function User(name) {
  this.name = name;
  this.defaults = {
    username: 'test',
    age: 42
  }

  this.initialize();
}

User.prototype.initialize = function(settings) {};

User.prototype.save = function(cb) {
  this.saved = true;
  this.sendAjax(cb);
};

User.prototype.sendAjax = function(cb) {
  setTimeout(cb, 500);
}

describe('User', function(){
  describe('new', function() {
    after(function() {
      User.prototype.initialize.restore();
    });

    it('calls initialize', function() {
      sinon.spy(User.prototype, 'initialize');

      var user = new User();

      expect(user.initialize).to.be.calledOnce;
    });
  });

  describe('#save()', function(){
    var user = new User('Luna');

    it('should save without error', function(done){
      user.save(function(err) {
        if (err) throw err;
        done();
      });
    });

    it('should saave without error', function(done) {
      user.save(done);
    });

    it('should send ajax request', function() {
      sinon.stub(User.prototype, 'sendAjax');

      user.save();

      expect(user.sendAjax).to.be.calledOnce

      User.prototype.sendAjax.restore();
    });
  });

  describe('#defaults', function() {
    var user = new User('Luna');

    it('should have default values', function() {
      expect(User).to.be.a('function');
      expect(user.defaults).to.be.a('object');
      expect(user.defaults.username).to.be.equal('test');
      expect(user.defaults).to.have.property('age');
    });

    it('should have default values 2', function() {
      User.should.be.a('function');
      user.defaults.should.be.a('object');
      user.defaults.username.should.be.equal('test');
      user.defaults.should.have.property('age');
    });

    it('should have default values 3', function() {
      assert.typeOf(User, 'function');
      assert.typeOf(user.defaults, 'object');
      assert.equal(user.defaults.username, 'test');
      assert.property(user.defaults, 'age');
    });
  });
});
