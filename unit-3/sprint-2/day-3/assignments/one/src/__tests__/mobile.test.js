import Mobile from "../mobile";
global.score = 1;

test("Mobie class is a constructor which is accepting values", () => {
  var first = new Mobile("onplus", "0889", "0000")
  expect(JSON.stringify(first)).toBe(JSON.stringify({"model":"onplus","number":"0889"}))
  
  var second = new Mobile("samsung", "0889", "1000")
  expect(JSON.stringify(second)).toBe(JSON.stringify({"model":"samsung","number":"0889"}))

  global.score += 2;
});

test("unlock pin is a private value", () => {
  var first = new Mobile("onplus", "0889", "0000")
  expect(first.unlockPin).toBe(undefined)
  
  var second = new Mobile("onplus", "0889", "1000")
  expect(second.unlockPin).toBe(undefined)

  var parentClass = Mobile.toString()
  expect(parentClass.includes("#unlockPin")).toBe(true)

  global.score += 2;
});

test("get unlock pin works properly", () => {
  var first = new Mobile("onplus", "0889", "1111")
  expect(first.getUnlockPin).toBe("1111")
  
  var second = new Mobile("onplus", "0889", "2000")
  expect(second.getUnlockPin).toBe("2000")

  global.score += 2;
});

test("set unlock pin works properly", () => {
  var first = new Mobile("onplus", "0889", "0000")
  first.unlockPin = "2222"
  expect(first.getUnlockPin).toBe("2222")
  
  var second = new Mobile("onplus", "0889", "1000")
  second.unlockPin = "3333"
  expect(second.getUnlockPin).toBe("3333")

  global.score += 2;
});

test("send SMS function works properly", () => {
  var first = new Mobile("onplus", "0889", "0000")
  expect(first.sendSMS("New message")).toBe("New message")

  global.score += 1;
});


afterAll(() => {
  console.log("Final Score is", global.score);
});
