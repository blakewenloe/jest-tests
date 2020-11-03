const { square, cube } = require("./square");

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

describe("cube functions", () => {
  test("should cube a number", () => {
    const res = cube(3);
    expect(res).toEqual(27);
  });

  test("should cube negative numbers", () => {
    const res = cube(-3);
    expect(res).toEqual(-27);
  });
});
