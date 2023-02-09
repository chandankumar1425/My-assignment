import {Artist, artistsObject} from "../artist.js";

global.score = 1;


test("values from constructor are inherited correctly", () => {
  const artist1 = new Artist("arun", "swimming", "swimmer");
  expect(artist1.name).toBe("arun");
  expect(artist1.skill).toBe("swimming");
  expect(artist1.getProfession()).toBe("swimmer");

  const artist2 = new Artist("Sachin", "cricket", "cricketer");
  // expect(artist2.name).toBe("Sachin");
  expect(artist2.skill).toBe("cricket");
  expect(artist2.profession).toBe("cricketer");
  global.score += 2;
});

test('get profession method works', () => {
  let person = new Artist('Lata Mangeshkar', 'Singing', "Singer")
  expect(person.name).toBe("Lata Mangeshkar")
  expect(person.getProfession()).toBe("Singer"); 
  global.score += 2;
});

test('methods added using .prototype property works properly', () => {
  let person = new Artist('Rahul Dravid', 'Cricket', "Cricketer")
  expect(person.print()).toBe(`I am ${person.name}`)
  expect(person.hasOwnProperty("print")).toBe(false)
  global.score += 3;
})

test("Values inherited correctly in Object.create method ", () => {
  let artist = Object.create(artistsObject)
  expect(artist.name).toBe("Rahul Dravid");
  expect(artist.skill).toBe("Cricket");
  expect(artist.profession).toBe("Cricketer");
  expect(artist.hasOwnProperty("name")).toBe(false)
  global.score += 2;
});

afterAll(() => {
  console.log("Final Score is", global.score);
});
