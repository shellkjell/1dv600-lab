(function () {
    "use strict";

    var LibraryDAO = require('../dao/LibraryDAO');
    var BookDAO = require('../dao/BookDAO');

    module.exports = function (callback, title) { // The title is optional and is only present when searching. (You need yo modify the books.js file first)
        const books = [
            new BookDAO('1', 'Book of Wisdom 2.0', 'Me', 'Science, obviously', 'yesteryear', 99, 'Book of the year! - New York Times'),
            new BookDAO('2', 'Book of Talent 13.37', 'Me again', 'Pseudoscience', '1997', 99, 'Book of the year! - New York Times x2')
        ]

        callback(JSON.stringify(books))
    };

}());
