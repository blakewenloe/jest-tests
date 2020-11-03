const { square } = require("./square");

describe("square functions", () => {
  test("should square a number", () => {
    const res = square(3);
    expect(res).toEqual(9);
  });

  test("should square negative numbers", () => {
    const res = square(-3);
    expect(res).toEqual(9);
  });
});
