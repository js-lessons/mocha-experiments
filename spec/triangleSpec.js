var sinon = require('sinon'),
  chai = require('chai'),
  expect = chai.expect;

chai.use(require('sinon-chai'));

function drawTriangle() {
  for (var line = "#"; line.length < 3; line += "#")
    console.log(line);
}

describe("drawTriangle", function() {
  afterEach(function() {
    console.log.restore && console.log.restore();
  });

  it("actually draws triangle", function() {
    sinon.spy(console, 'log');

    var triangle = [
      ['#'],
      ['##']
    ];

    drawTriangle();

    expect(console.log.args).to.deep.equal(triangle);
    expect(console.log.callCount).to.equal(2);

    expect(console.log).to.have.been.calledTwice;
  });

  it("actually draws triangle 2", function() {
    sinon.spy(console, 'log');

    var triangle = [
      ['#'],
      ['##']
    ];

    drawTriangle();

    expect(console.log.args).to.deep.equal(triangle);
  });
});
