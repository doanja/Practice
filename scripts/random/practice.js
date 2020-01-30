/**
 * * Create an ES6+ class with the following:
 ** A property containing a simple type variable (i.e. string, boolean, int, etc.) that holds a unique 				identifier for the class.
 ** A property containing a collection (i.e. array, map, set) that holds some set of information related to the class.
 ** A constructor that accepts the initial value for you simple type property as an argument.
 ** CRUD functions for your collection. (i.e. addToCollection(data), clearCollection(data), printCollection(), updateValueInCollection(data) )
 ** Bonus: export your class file, and include it in another js file before creating an object with the class, and calling some of its functions.
 *
 *
 */

export default class Book {
  constructor(title, read, pages, authors) {
    this.title = title;
    this.read = read;
    this.pages = pages;
    this.authors = [...authors];
  }

  getTitle() {
    return this.title;
  }

  updateTitle(newTitle) {
    this.title = newTitle;
  }

  clearAuthors() {
    this.authors = [];
  }

  printAuthors() {
    this.authors.forEach(author => {
      return author;
    });
  }
}
