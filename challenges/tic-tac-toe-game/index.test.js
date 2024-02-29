const op = require("./index");

describe("Find Winner on a Tic Tac Toe Game", () => {
  it("Test input 1", () => {
    expect(
      op([
        [0, 0],
        [2, 0],
        [1, 1],
        [2, 1],
        [2, 2],
      ])
    ).toBe("A");
  });

  it("Test input 2", () => {
    expect(
      op([
        [0, 0],
        [1, 1],
        [0, 1],
        [0, 2],
        [1, 0],
        [2, 0],
      ])
    ).toBe("B");
  });

  it("Test input 3", () => {
    expect(
      op([
        [0, 0],
        [1, 1],
        [2, 0],
        [1, 0],
        [1, 2],
        [2, 1],
        [0, 1],
        [0, 2],
        [2, 2],
      ])
    ).toBe("Draw");
  });
});
