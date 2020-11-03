const { square } = require("./square");

test("should square a number", () => {
  const res = square(3);
  expect(res).toEqual(9);
});
