(function () {
  "use strict";

  var fs = require('fs');

  // Instructions how to use the xml2js
  // https://github.com/Leonidas-from-XIV/node-xml2js
  var xml2js = require('xml2js');
  var BookDAO = require('../dao/BookDAO');


  // Use this file to write and read the xml file.
  var LibraryDAO = {    

    // Get the entire file from the file system.
    readXMLFile: function (callback) {
      fs.readFile(__dirname + '/../../books.xml', (e, content) => {
        xml2js.parseString(content, (e, res) => {
          let books = []
          res.catalog.book.forEach(element => {
            books.push(new BookDAO(element['$'].id, element['title'], element['author'], element['genre'], element['publish_date'], element['price'], element['description']))
          })
          callback(books)
        })
      })
    },

    // Write the entire file from the file system.
    writeXMLFile: function (data) {

    }
  };

  module.exports = LibraryDAO;
}());
