(
function () {
    'use strict'

    const fs = require('fs')

    const BookDAO = function (id, title, author, genre, publishDate, price, description, callback) {
        const res = {
            id, title, author, genre, publishDate, price, description
        }

        if (callback) callback(res)
        else return res
    }

    module.exports = BookDAO
} ()
)
