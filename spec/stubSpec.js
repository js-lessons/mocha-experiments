// bind polyfill for PhantomJS
if (!Function.prototype.bind) {
  Function.prototype.bind = function(oThis) {
    if (typeof this !== 'function') {
      throw new TypeError('Function.prototype.bind - what is trying to be bound is not callable');
    }

    var aArgs = Array.prototype.slice.call(arguments, 1),
        fToBind = this,
        fNOP    = function() {},
        fBound  = function() {
          return fToBind.apply(this instanceof fNOP && oThis
                 ? this
                 : oThis,
                 aArgs.concat(Array.prototype.slice.call(arguments)));
        };

    fNOP.prototype = this.prototype;
    fBound.prototype = new fNOP();

    return fBound;
  };
}


var expect = require('chai').expect,
  sinon = require('sinon');

describe('stub()', function() {
  it('stubs method differently based on arguments', function() {
    var callback = sinon.stub();
    callback.withArgs(42).returns(1);
    callback.withArgs(1).throws(new Error);

    // No return value, no exception
    expect(callback()).to.be.undefined;

    expect(callback(42)).to.equal(1); // Returns 1
    expect(callback.bind(null, 1)).to.Throw(); // Throws TypeError
  });
});
