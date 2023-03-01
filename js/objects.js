(function() {

    "use strict";

    /**
    //  * TODO:
    //  * Create an object with firstName and lastName properties that are strings
    //  * with your first and last name. Store this object in a variable named
    //  * `person`.
    //  *
    //  * Example:
    //  *  > console.log(person.firstName) // "Rick"
    //  *  > console.log(person.lastName) // "Sanchez"
    //  */
    //my answer
    let person = {
        firstName: "Rick",
        lastName: "Sanchez"
    }
    console.log(person.firstName);
    console.log(person.lastName);
    //instructor answer
    //Same as mine
    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */
    //my answer
    person.sayHello = function(){
        return "Hello from " + person.firstName + " " + person.lastName;
    }
    console.log(person.sayHello());
    //instructor answer
    //same as mine
    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */
        //display name, amount before discount, amount after discount
        //create an array of object - which represents one shopper
        //use forEach loop to iterate through the array and console.log it
        //my answer
    let shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];
    // shoppers.forEach(function(discount){
    //     console.log("hello " + discount.name);
    //     console.log("your total before discount is: $" + discount.amount);
    //     if (discount.amount > 200){
    //         let totalDisPrice = discount.amount - discount.amount * .12;
    //         console.log("Your discount price is $" + totalDisPrice);
    //     }else {
    //         console.log("You don't have discount. Your total is $" + discount.amount);
    //     }
    // })
    //instructor answer
    shoppers.forEach(function (shopper){
        let discount;
        let total;
        if(shopper.amount > 200){
            discount = shopper.amount * .12;
            total =  shopper.amount - discount;
            console.log("Hello " + shopper.name + " your discount was " + discount + ". Your new total is " + total);
        }else{
            console.log("Hello " + shopper.name + ", your total is " + shopper.amount);
        }
    })

    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */
    let books = [
        {title: "The Salmon of Doubt",
        author: {firstName:"Douglas",lastName: "Adams"}},
        {title: "Walkaway",
        author:  {firstName: "Cory", lastName: "Doctorow"}},
        {title: "A Brief History of Time",
        author:  {firstName: "Stephen", lastName: "Hawking"}},
        {title: "Time to Kill By",
        author:  {firstName: "John", lastName: "GrisHam"}},
        {title: "The House of Mirth",
        author: {firstName: "Edith", lastName: "Steinbeck"}}]

    console.log(books[0].title);
    console.log(books[0].author.firstName);
    console.log(books[0].author.lastName);
    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */
    let bookInfo = [
        {book: "# 1", title: "The Salmon of Doubt", author: {firstName:"Douglas",lastName: "Adams"}},
        {book: "# 2", title: "Walkaway", author:  {firstName: "Cory", lastName: "Doctorow"}},
        {book: "# 3", title: "A Brief History of Time", author:  {firstName: "Stephen", lastName: "Hawking"}},
        {book: "# 4", title: "Time to Kill By", author:  {firstName: "John", lastName: "GrisHam"}},
        {book: "# 5", title: "The House of Mirth", author: {firstName: "Edith", lastName: "Steinbeck"}}]
    for(let i =0; i < bookInfo.length; i++){
        console.log("Book " + bookInfo[i].book + "\n" + "Title: " + bookInfo[i].title + "\n" + "Author: " + bookInfo[i].author.firstName + " " + bookInfo[i].author.lastName + "\n" + "---");
    }
    //instructor answer
    // for(let i =0; i < bookInfo.length; i++){
    //     console.log("Book #" + i+1);
    //     console.log("title: " + bookInfo.title);
    //     console.log("author: " + bookInfo.author.firstName + " " + bookInfo.author.lastName);
    // }
    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */
   function createBook(title, firstName, lastName){
       let book = {
           title: title,
           author: {
               firstName: firstName,
               lastName: lastName}
       }
       return book;
    }
    let bookArr = [];
    for(let i = 0; i < books.length; i++){
       bookArr = [];
        bookArr.push(createBook(books[i]));
    }console.log(createBook(bookArr));
    // function showBookInfo(book, bookNum){
    //     console.log("Book #" + bookNum);
    //     console.log("title: " + book.title);
    //     console.log("author: " + book.author.firstName + " " + book.author.lastName);
    // }



})();
