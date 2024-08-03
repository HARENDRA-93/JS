// Activity 1: Object Creation and Access

// Task 1: Create an object representing a book with properties like title,author,and year,and log the object to the console.

let book = {
  Title: "Sirsaganj",
  Author: "Harendra",
  Year: 2024,
};
console.log(book);

// Task 2: Access and log the title and author properties of the book object.
console.log(book.Title);
console.log(book.Author);

// Activity 2: Object Methods

// Task 3: Add a method to the book object that returns a string with the book's title and author, and author, and log the result of calling this method.

let book2 = {
    Title: "Sirsaganj",
    Author: "Harendra",
    Year: 2024,

    function abc(){
        return this.Title;
    }
  };
  console.log(book2.abc);