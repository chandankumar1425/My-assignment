import { Library, Section, Book } from "../library.js";

global.score = 1;

test("Book class should create book object", () => {
  expect(Book).toBeDefined();
  const b = new Book("Java", "Gary Cornell", "DSA");
  expect(b).toBeInstanceOf(Book);
  expect(b).toEqual({
    name: "Java",
    author: "Gary Cornell",
    section: "DSA",
  });

  global.score += 1;
});

test("Section class should create the section with given properties", () => {
  expect(Section).toBeDefined();
  const s = new Section("DSA");
  expect(s).toBeInstanceOf(Section);
  expect(s).toEqual({
    name: "DSA",
    books: [],
  });

  global.score += 1;
});

test("Calling addBook method of section should add the book to the books array", () => {
  expect(Section).toBeDefined();
  const s = new Section("DSA");
  expect(s).toBeInstanceOf(Section);

  expect(Book).toBeDefined();
  const b = new Book("Java", "Gary Cornell", "DSA");
  expect(b).toBeInstanceOf(Book);

  s.addBookToSection(b);
  expect(s).toEqual({
    name: "DSA",
    books: [b],
  });

  global.score += 1;
});

test("If book is already present in the section, it should not be added", () => {
  expect(Section).toBeDefined();
  const s = new Section("DSA");
  expect(s).toBeInstanceOf(Section);
  expect(Book).toBeDefined();
  const b1 = new Book("Java", "Gary Cornell", "DSA");
  const b2 = new Book("Java", "Gary Cornell-2", "DSA");
  const b3 = new Book("Java", "Gary Cornell", "DSA");
  const b4 = new Book("Python", "Gary Cornell", "DSA");

  s.addBookToSection(b1);
  s.addBookToSection(b2);
  s.addBookToSection(b3);
  s.addBookToSection(b4);

  expect(s).toEqual({
    name: "DSA",
    books: [b1, b2, b4],
  });

  global.score += 1;
});

test("Library class should create library object with given properties", () => {
  expect(Library).toBeDefined();
  const l = new Library("Masai");
  expect(l).toBeInstanceOf(Library);
  expect(l).toEqual({
    name: "Masai",
    sections: [],
  });

  global.score += 1;
});

test("Adding section to the library should add section to the array", () => {
  expect(Library).toBeDefined();
  const l = new Library("Masai");
  expect(l).toBeInstanceOf(Library);

  expect(Section).toBeDefined();
  const s = new Section("DSA");
  expect(s).toBeInstanceOf(Section);

  l.addSection(s);

  expect(l).toEqual({
    name: "Masai",
    sections: [s],
  });

  global.score += 1;
});

test("If a section is already present in the library, it should not be added", () => {
  expect(Library).toBeDefined();
  const l = new Library("Masai");
  expect(l).toBeInstanceOf(Library);

  expect(Section).toBeDefined();
  const s1 = new Section("DSA");
  const s2 = new Section("Coding");
  const s3 = new Section("DSA");

  l.addSection(s1);
  l.addSection(s2);
  l.addSection(s3);

  expect(l).toEqual({
    name: "Masai",
    sections: [s1, s2],
  });

  global.score += 1;
});

test("addBook in library class should add the book to the section which the book belongs to", () => {
  expect(Library).toBeDefined();
  const l = new Library("Masai");
  expect(l).toBeInstanceOf(Library);

  expect(Section).toBeDefined();
  const s1 = new Section("DSA");
  const s2 = new Section("Coding");

  expect(Book).toBeDefined();
  const b1 = new Book("Java", "Gary Cornell", "DSA");
  const b2 = new Book("Js", "Brendan Eich", "Coding");

  l.addSection(s1);
  l.addSection(s2);

  l.addBookToLibrary(b1);
  l.addBookToLibrary(b2);

  expect(l).toEqual({
    name: "Masai",
    sections: [s1, s2],
  });

  expect(l.sections[0].books).toEqual([b1]);
  expect(l.sections[1].books).toEqual([b2]);

  global.score += 2;
});

afterAll(() => {
  console.log("Final Score is", global.score);
});
