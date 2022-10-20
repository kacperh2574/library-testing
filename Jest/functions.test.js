const functions = require("./functions");

// checks if function return a specified value
test("Adds 2 + 2 to equal 4", () => {
  expect(functions.add(2, 2)).toBe(4);
});

// checks if function doesn't return a specified value
test("Adds 2 + 2 to equal 4", () => {
  expect(functions.add(2, 2)).not.toBe(5);
});

// check if function returns null value
test("Should be null", () => {
  expect(functions.isNull()).toBeNull();
});

// checks if a value returned from the function is falsy
test("Should be falsy", () => {
  expect(functions.checkValue(null)).toBeFalsy();
});

// toEqual
test("User should be Jan Kowalski object", () => {
  expect(functions.createStudent()).toEqual({
    fullName: "Jan Kowalski",
    indexNumber: 123456,
  });
});

// less than or equal
test("Should be under 100", () => {
  const a = 15;
  const b = 73;
  expect(a + b).toBeLessThanOrEqual(100);
});

// array
test("Admin should be in usernames", () => {
  usernames = ["jan", "adam", "paula"];
  expect(usernames).toContain("adam");
});
