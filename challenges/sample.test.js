const sum = require("./sample");

xtest("Should adds numbers", () => {
  expect(sum(1, 2)).toBe(3);
});
