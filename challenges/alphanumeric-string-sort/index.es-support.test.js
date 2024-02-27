const op = require("./index.es-support");

fdescribe("Alphanumeric String Sort (Spanish characters support", () => {
  it("Test input 1", () => {
    expect(op('10bY¨^3cáéXZ2!ñÑ\"Üü')).toBe('üñéácbYXZÑÜ3120¨^!\"');
  });
});
