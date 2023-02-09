import {
  UserInfo,
  serveIn,
  serveFood,
  generateInVoice,
  billNote,
} from "../swiggy";

global.score = 1;

test("UserInfo constructor should exist and able to create an object", () => {
  expect(UserInfo).toBeDefined();
  expect(typeof UserInfo).toBe("function");
  const r = new UserInfo("Jane", "Koramangala");
  expect(r).toBeInstanceOf(UserInfo);
  expect(r).toEqual({
    name: "Jane",
    location: "Koramangala",
  });

  global.score += 2;
});

test("ServeIn function should create a new object and return the serveFood value binded with this object", () => {
  expect(serveIn).toBeDefined();
  expect(serveFood).toBeDefined();
  expect(typeof serveFood).toBe("function");
  let r1 = serveIn("Jane", "Koramangala", "Samosa");
  expect(r1).toEqual("Serving Samosa to Jane in Koramangala");
  let r2 = serveIn("Kate", "HSR Layout", "Burger");
  expect(r2).toEqual("Serving Burger to Kate in HSR Layout");

  global.score += 3;
});

test("GenerateInvoice function should create a new object and return the billNote value binded with this object", () => {
  expect(generateInVoice).toBeDefined();
  expect(billNote).toBeDefined();
  expect(typeof generateInVoice).toBe("function");
  let r1 = generateInVoice("Amar", "Sarjaput", 2, 500);
  expect(r1).toEqual("Amar's bill is INR 1000");

  global.score += 4;
});
afterAll(() => {
  console.log("Final Score is", global.score);
});
