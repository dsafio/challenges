const helloWorld = require("./solution");

describe("hello-world", () => {
  it("exports a function", () => {
    expect(helloWorld).toBeInstanceOf(Function);
  });
  it("greets the world when receiving no parameter", () => {
    expect(helloWorld()).toBe("Hello, World!");
  });
  it("greets someone when receiving his/her name", () => {
    ["john", "jane", "josh"].forEach(name =>
      expect(helloWorld(name)).toBe(`Hello, ${name}!`)
    );
  });
});
