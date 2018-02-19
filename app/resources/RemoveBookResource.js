(function () {
  "use strict";

  var LibraryDAO = require('../dao/LibraryDAO');

  // Array Remove - By John Resig (MIT Licensed)
  let removeArrayItems = function (from, to) {
    var rest = this.slice((to || from) + 1 || this.length);
    this.length = from < 0 ? this.length + from : from;
    return this.push.apply(this, rest);
  };

  module.exports = function (id, callback) {
    LibraryDAO.readXMLFile((lib) => {
      for (let i = 0; i < lib.length; ++i) {
        if (lib[i].id === id) {
          removeArrayItems(i)
        }
      }
      LibraryDAO.writeXMLFile(lib)
    })
  };

}());
