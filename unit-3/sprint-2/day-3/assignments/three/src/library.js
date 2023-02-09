class Book {
    constructor(name, author, section) {
      this.name = name;
      this.author = author;
      this.section = section;
    }
  }
  
  class Section {
    constructor(name) {
      this.name = name;
      this.books = [];
    }
  
    addBookToSection(book) {
      let isBookPresent = false;
      for (let b of this.books) {
        if (b.name === book.name && b.author === book.author) {
          isBookPresent = true;
          break;
        }
      }
      if (!isBookPresent) {
        this.books.push(book);
      }
    }
  }
  
  class Library {
    constructor(name) {
      this.name = name;
      this.sections = [];
    }
  
    addSection(section) {
      let isSectionPresent = false;
      for (let s of this.sections) {
        if (s.name === section.name) {
          isSectionPresent = true;
          break;
        }
      }
      if (!isSectionPresent) {
        this.sections.push(section);
      }
    }
  
    addBookToLibrary(book) {
      let targetSection = null;
      for (let s of this.sections) {
        if (s.name === book.section) {
          targetSection = s;
          break;
        }
      }
      if (targetSection) {
        targetSection.addBookToSection(book);
      }
    }
  }
// Do not change the export statement below

export { Library, Section, Book };