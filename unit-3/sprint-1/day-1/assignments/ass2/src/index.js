function studentData(firstName, lastName, age, marksArray, ...hobbies) {
  let obj = {
    fullName: firstName + ' ' + lastName,
    age: age,
    hobbies: hobbies,
    getInfo: function() {
      return `${this.fullName}'s age is ${this.age}.`;
    },
    getResult: function() {
      const average = marksArray.reduce((a, b) => a + b, 0) / marksArray.length;
      if (average < 50) {
        return 'Result: FAIL';
      } else {
        return 'Result: PASS';
      }
    }
  };
  return obj;
}

export {
  studentData
}