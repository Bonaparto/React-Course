class Book {
  #name;
  #code;
  #pages;

  constructor(name, code, pages) {
    this.#name = name;
    this.#code = code;
    this.#pages = pages;
  }

  getName() {
    return this.#name;
  }

  getCode() {
    return this.#code;
  }

  getPages() {
    return this.#pages;
  }

  setName(name) {
    this.#name = name;
  }

  setCode(code) {
    this.#code = code;
  }

  setPages(pages) {
    this.#pages = pages;
  }

  getBookData() {
    return `${this.#name} ${this.#code} ${this.#pages}`;
  }
}

class ScientificBook extends Book {
  #price;
  #publisher;

  constructor(name, code, pages, price, publisher) {
    super(name, code, pages);
    this.#price = price;
    this.#publisher = publisher;
  }

  getPrice() {
    return this.#price;
  }

  getPublisher() {
    return this.#publisher;
  }

  setPrice(price) {
    this.#price = price;
  }

  setPublisher(publisher) {
    this.#publisher = publisher;
  }

  getBookData() {
    return super.getBookData() + ` ${this.#price} ${this.#publisher}`;
  }
}

class LiteratureBook extends Book {
  #author;
  #publishedYear;

  constructor(name, code, pages, author, publishedYear) {
    super(name, code, pages);
    this.#author = author;
    this.#publishedYear = publishedYear;
  }

  getAuthor() {
    return this.#author;
  }

  getPublishedYear() {
    return this.#publishedYear;
  }

  setAuthor(author) {
    this.#author = author;
  }

  setPublishedYear(publishedYear) {
    this.#publishedYear = publishedYear;
  }

  getBookData() {
    return super.getBookData() + ` ${this.#author} ${this.#publishedYear}`;
  }
}

class Library {
  #name;
  #city;
  #country;
  #books;
  #sizeOfBooks = 0;

  constructor(name, city, country, books) {
    this.#name = name;
    this.#city = city;
    this.#country = country;
    this.#books = books;
  }

  getName() {
    return this.#name;
  }
  getCity() {
    return this.#city;
  }
  getCountry() {
    return this.#country;
  }

  setName(name) {
    this.#name = name;
  }
  setCity(city) {
    this.#city = city;
  }
  setCountry(country) {
    this.#country = country;
  }

  addBook(book) {
    this.#books[this.#sizeOfBooks] = book;
    this.#sizeOfBooks++;
  }

  printLibraryData() {
    console.log(
      `${this.getName()} ${this.getCountry()} ${this.getCity()}`
    );
    this.#books.forEach((book) => console.log(book.getBookData()));
  }
}

const sBook1 = new ScientificBook("kek1", "1", 10, 100, "lmao");
const sBook2 = new ScientificBook("kek2", "2", 20, 200, "lmao");
const sBook3 = new ScientificBook("kek3", "3", 30, 300, "lmao");
const sBook4 = new ScientificBook("kek4", "4", 40, 400, "lmao");
const sBook5 = new ScientificBook("kek5", "5", 50, 500, "lmao");

const lBook1 = new LiteratureBook("lol1", "1", 50, 500, "lmao");
const lBook2 = new LiteratureBook("lol2", "2", 40, 400, "lmao");
const lBook3 = new LiteratureBook("lol3", "3", 30, 300, "lmao");
const lBook4 = new LiteratureBook("lol4", "4", 20, 200, "lmao");
const lBook5 = new LiteratureBook("lol5", "5", 10, 100, "lmao");

const library = new Library("Sample", "Almaty", "Kazakhstan", [
  sBook1,
  lBook1,
  sBook2,
  lBook2,
  sBook3,
  lBook3,
  sBook4,
  lBook4,
  sBook5,
  lBook5,
]);

library.printLibraryData();
