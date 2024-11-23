const getTheTitles = function(books) {
    let bookTitles = [];
    for (const book in books) {
        bookTitles.push(books[book].title);
    };
    return bookTitles;
};

// Do not edit below this line
module.exports = getTheTitles;
