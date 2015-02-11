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
