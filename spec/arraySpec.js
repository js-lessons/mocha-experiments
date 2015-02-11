var should = require('chai').should();

describe('Array', function(){
  describe('#indexOf()', function(){
    it('should return -1 when the value is not present', function() {
      [1, 2, 3].indexOf(5).should.equal(-1);
      [1, 2, 3].indexOf(0).should.equal(-1);
    });

    it('returns the position of the value if present', function() {
      [1, 2, 3].indexOf(2).should.equal(1);
      [1, 2, 3].indexOf(3).should.equal(2);
    });
  });
});
