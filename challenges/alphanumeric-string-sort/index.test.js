const op = require("./index");

describe("Alphanumeric String Sort", () => {
  it("Test input 1", () => {
    expect(op("2.a,-n967AB8.")).toBe("naAB79862.,-.");
  });

  it("Test input 2", () => {
    expect(op(" ssAx009¨¨.´QQ")).toBe("xssAQQ900 ¨¨.´");
  });

  it("Test input 2", () => {
    expect(op("80 abckskskNNJ´¿?39ks3JSJHHE")).toBe("skkskskcbaNNJJSJHHE39308 ´¿?");
  });
});
