const { square } = require("./square");

test("should square a number", function () {
  const res = square(3);
  expect(res).toEqual(9);
});
