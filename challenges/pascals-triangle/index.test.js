const op = require("./index");

describe("Pascal’s Triangle", () => {
  it("Test input 1", () => {
    expect(op(1)).toEqual(expect.arrayContaining([[1]]));
  });

  it("Test input 2", () => {
    expect(op(2)).toEqual(expect.arrayContaining([[1], [1, 1]]));
  });

  it("Test input 3", () => {
    expect(op(3)).toEqual(expect.arrayContaining([[1], [1, 1], [1, 2, 1]]));
  });

  it("Test input 4", () => {
    expect(op(4)).toEqual(
      expect.arrayContaining([[1], [1, 1], [1, 2, 1], [1, 3, 3, 1]])
    );
  });

  it("Test input 5", () => {
    expect(op(5)).toEqual(
      expect.arrayContaining([
        [1],
        [1, 1],
        [1, 2, 1],
        [1, 3, 3, 1],
        [1, 4, 6, 4, 1],
      ])
    );
  });

  it("Test input 6", () => {
    expect(op(6)).toEqual(
      expect.arrayContaining([
        [1],
        [1, 1],
        [1, 2, 1],
        [1, 3, 3, 1],
        [1, 4, 6, 4, 1],
        [1, 5, 10, 10, 5, 1],
      ])
    );
  });
});
