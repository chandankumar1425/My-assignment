import Counter from "../counter.js";

global.score = 1;

test("counter", () => {
  expect(Counter).toBeDefined();
  const c = new Counter();
  expect(c).toBeInstanceOf(Counter);
  expect(c.value).toBe(0);
  global.score += 1;
});
test("onCalling get value should return some value", () => {
  expect(Counter).toBeDefined();
  const c = new Counter();
  expect(c).toBeInstanceOf(Counter);
  expect(c.getValue()).toBeDefined();
  expect(c.getValue()).toBe(0);

  global.score += 2;
});

test("On calling addValue with value x getValue should return previous_value + x", () => {
  expect(Counter).toBeDefined();
  const c = new Counter();
  c.addValue(5);
  expect(c.getValue()).toBe(5);
  global.score += 2;
});

test("On calling reduceValue with value x getValue should return previous_value - x", () => {
  expect(Counter).toBeDefined();
  const c = new Counter();
  c.addValue(5);
  c.reduceValue(1);
  expect(c.getValue()).toBe(4);
  global.score += 2;
});

test("On calling resetValue the counter value will be reset to 0", () => {
  expect(Counter).toBeDefined();
  const c = new Counter();
  expect(c.value).toBe(0);
  c.addValue(5);
  c.resetValue();
  expect(c.getValue()).toBe(0);
  global.score += 2;
});

afterAll(() => {
  console.log("Final Score is", global.score);
});
