const marsRover = require("./mars_rover");

test("Mars should be in west 1", () => {
  expect(marsRover([0, 0], [3, 3], "FFR")).toBe("0:2:W");
});

test("Mars should be in west 2", () => {
  expect(marsRover([0, 0], [3, 3], "FFLLL")).toBe("0:2:W");
});

test("Mars should be in north 1", () => {
  expect(marsRover([0, 0], [3, 3], "FFRFL")).toBe("1:2:N");
});

test("Mars should be in east", () => {
  expect(marsRover([0, 0], [3, 3], "FFRRR")).toBe("0:2:E");
});

test("Mars should be in south 1", () => {
  expect(marsRover([0, 0], [3, 3], "FFRFR")).toBe("1:2:S");
});

test("Mars should be in south 2", () => {
  expect(marsRover([0, 0], [3, 3], "FFRFRF")).toBe("1:1:S");
});

test("Mars should be in north 2", () => {
  expect(marsRover([0, 0], [3, 3], "FF")).toBe("0:2:N");
});

test("Mars should be in north 3", () => {
  expect(marsRover([0, 0], [3, 3], "FFRRRR")).toBe("0:2:N");
});

test("RIP Mars", () => {
  expect(marsRover([0, 0], [3, 3], "FFRLL")).toBe("RIP");
});
