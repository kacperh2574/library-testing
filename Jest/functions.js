const functions = {
  add: (x, y) => x + y,
  isNull: () => null,
  checkValue: (x) => x,
  createStudent: () => {
    const student = { fullName: "Jan Kowalski" };
    student["indexNumber"] = 123456;
    return student;
  },
};

module.exports = functions;
