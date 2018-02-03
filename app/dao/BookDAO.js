(
function () {
    'use strict'

    const fs = require('fs')

    const BookDAO = function (id, title, author, genre, publishDate, price, description) {
        return {
            id, title, author, genre, publishDate, price, description
        }
    }

    module.exports = BookDAO
} ()
)
