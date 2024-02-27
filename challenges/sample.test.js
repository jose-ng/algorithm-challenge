const sum = require("./sample");

test("Should adds numbers", () => {
  expect(sum(1, 2)).toBe(3);
});
