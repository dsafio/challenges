const fizzBuzz = require("./solution");

describe("fizz-buzz", () => {
  it("exports a function", () => {
    expect(fizzBuzz).toBeInstanceOf(Function);
  });
  it('returns "Fizz" for numbers divisible by 3', () => {
    [3, 6, 9].forEach(x => expect(fizzBuzz(x)).toBe("Fizz"));
    [1, 2, 4].forEach(x => expect(fizzBuzz(x)).toBe(x));
  });
  it('returns "Buzz" for numbers divisible by 5', () => {
    [5, 10, 20].forEach(x => expect(fizzBuzz(x)).toBe("Buzz"));
    [7, 11, 16].forEach(x => expect(fizzBuzz(x)).toBe(x));
  });
  it('return "Fizz Buzz" for numbers divisible by 3 and 5', () => {
    [15, 30, 45].forEach(x => expect(fizzBuzz(x)).toBe("Fizz Buzz"));
    [7, 11, 23].forEach(x => expect(fizzBuzz(x)).toBe(x));
  });
});
