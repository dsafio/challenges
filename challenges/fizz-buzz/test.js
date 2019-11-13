const assert = require("assert");
const fizzBuzz = require("./solution");

/* eslint-env mocha */
describe("fizz-buzz", () => {
  it("exports a function", () => assert.equal(typeof fizzBuzz, "function"));

  it('returns "Fizz" for numbers divisible by 3', () => {
    [3, 6, 9].forEach(x => assert.equal(fizzBuzz(x), "Fizz"));
    [1, 2, 4].forEach(x => assert.equal(fizzBuzz(x), x));
  });

  it('returns "Buzz" for numbers divisible by 5', () => {
    [5, 10, 20].forEach(x => assert.equal(fizzBuzz(x), "Buzz"));
    [7, 11, 16].forEach(x => assert.equal(fizzBuzz(x), x));
  });

  it('returns "Fizz Buzz" for numbers divisible by 3 and 5', () => {
    [15, 30, 45].forEach(x => assert.equal(fizzBuzz(x), "Fizz Buzz"));
    [7, 11, 23].forEach(x => assert.equal(fizzBuzz(x), x));
  });
});
