const op = require("./alphanumeric-string-sort");

fdescribe("Alphanumeric String Sort", () => {
  it("Test input 1", () => {
    expect(op("2.a,-n967AB8.")).toBe("naBA79862.,-.");
  });

  it("Test input 2", () => {
    expect(op(" ssAx009¨¨.´QQ")).toBe("xssQQA900 ¨¨.´");
  });

  it("Test input 2", () => {
    expect(op("80 abckskskNNJ´¿?39ks3JSJHHE")).toBe("ssskkkkcbaSNNJJJHHE39308 ´¿?");
  });
});
