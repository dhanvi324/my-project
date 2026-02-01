//asss-21/1/26
/*Create a Book class with the following:

  Properties:
      title (string)
      author (string)
      pages (number)
      isAvailable (boolean, default: true)


  Methods:
      borrow() - Marks the book as not available
      returnBook() - Marks the book as available
      getInfo() - Returns a string with book details (e.g., "The Hobbit by J.R.R. Tolkien (310 pages)")
      isLongBook() - Returns true if pages > 300, false otherwise
      1. Create at least 5 book objects using the class:
      Example: "Harry Potter", "1984", "The Hobbit", etc.


  2. Perform the following operations:

      i. Display info of all books
      ii. Borrow 2 books and show their availability status
      iii. Return 1 book and show updated status
      iv. Count how many books are "long books" (more than 300 pages)
      v. List all available books*/
class book{
    title;
    author;
    pages;
    isAvailable=true;
    //static allbooks=[];
    constructor({title,author,pages,isAvailable=true)
    {
        this.title=title;
        this.author=author;
        this.pages=pages;
        //book.allbooks.push(this); adding books to an array directly instead of typing manually
    }
    borrow()
    {
        this.isAvailable=false
    }
    retunbook()
    {
        this.isAvailable=true
    }
    getInfo()
    {
        console.log("The" ,this.title, "by", this.author,"(",this.pages, "pages)")
    }
    isLongBook()
    {
        if(this.pages>300)
        {
            return true;
        }
        else
        {
            return false;
        }
    }
}
let b1=new book('harrypotter','jkbowl',300);
let b2=new book('harry','jkb',200);
let b3=new book('hopper','jkk',300);
let b4=new book('harrystyles','jkl',500);
let b5=new book('harrypotter','jkstan',900);
b1.getInfo()
b2.getInfo()
b3.getInfo()
b4.getInfo()
b5.getInfo()
b1.borrow()
b2.borrow()
console.log('b1 is',b1.isAvailable);
console.log('b2 is',b2.isAvailable);
b1.retunbook()
console.log(b1.title,'is',b1.isAvailable);
let c=0;
books=[b1,b2,b3,b4,b5]//array of objects
for(let x of books)
{
    if(x.isLongBook())
    {
        c++;
    }
}
console.log(c);
//using filter
let count=books.filter(book=>book.pages>300).length
console.log(count)
for(let x of books)
    {
        if(x.isAvailable==true)
        {
            console.log(x.title);
        }
    }