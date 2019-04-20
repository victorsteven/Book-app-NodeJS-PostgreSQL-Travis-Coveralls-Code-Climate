"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _BookService = _interopRequireDefault(require("../services/BookService"));

var _Utils = _interopRequireDefault(require("../utils/Utils"));

var util = new _Utils["default"]();

var BookController =
/*#__PURE__*/
function () {
  function BookController() {
    (0, _classCallCheck2["default"])(this, BookController);
  }

  (0, _createClass2["default"])(BookController, null, [{
    key: "getAllBooks",
    value: function () {
      var _getAllBooks = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee(req, res) {
        var allBooks;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return _BookService["default"].getAllBooks();

              case 3:
                allBooks = _context.sent;

                if (allBooks.length > 0) {
                  util.setSuccess(200, 'Books retrieved', allBooks);
                } else {
                  util.setSuccess(200, 'No book found');
                }

                return _context.abrupt("return", util.send(res));

              case 8:
                _context.prev = 8;
                _context.t0 = _context["catch"](0);
                util.setError(400, _context.t0);
                return _context.abrupt("return", util.send(res));

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 8]]);
      }));

      function getAllBooks(_x, _x2) {
        return _getAllBooks.apply(this, arguments);
      }

      return getAllBooks;
    }()
  }, {
    key: "addBook",
    value: function () {
      var _addBook = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee2(req, res) {
        var newBook, createdBook;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!(!req.body.title || !req.body.price || !req.body.description)) {
                  _context2.next = 3;
                  break;
                }

                util.setError(400, 'Please provide complete details');
                return _context2.abrupt("return", util.send(res));

              case 3:
                newBook = req.body;
                _context2.prev = 4;
                _context2.next = 7;
                return _BookService["default"].addBook(newBook);

              case 7:
                createdBook = _context2.sent;
                util.setSuccess(201, 'Book Added!', createdBook);
                return _context2.abrupt("return", util.send(res));

              case 12:
                _context2.prev = 12;
                _context2.t0 = _context2["catch"](4);
                util.setError(400, _context2.t0.message);
                return _context2.abrupt("return", util.send(res));

              case 16:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[4, 12]]);
      }));

      function addBook(_x3, _x4) {
        return _addBook.apply(this, arguments);
      }

      return addBook;
    }()
  }, {
    key: "updatedBook",
    value: function () {
      var _updatedBook = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee3(req, res) {
        var alteredBook, id, updateBook;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                alteredBook = req.body;
                id = req.params.id;

                if (Number(id)) {
                  _context3.next = 5;
                  break;
                }

                util.setError(400, 'Please input a valid numeric value');
                return _context3.abrupt("return", util.send(res));

              case 5:
                _context3.prev = 5;
                _context3.next = 8;
                return _BookService["default"].updateBook(id, alteredBook);

              case 8:
                updateBook = _context3.sent;

                if (!updateBook) {
                  util.setError(404, "Cannot find book with the id: ".concat(id));
                } else {
                  util.setSuccess(200, 'Book updated', updateBook);
                }

                return _context3.abrupt("return", util.send(res));

              case 13:
                _context3.prev = 13;
                _context3.t0 = _context3["catch"](5);
                util.setError(404, _context3.t0);
                return _context3.abrupt("return", util.send(res));

              case 17:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[5, 13]]);
      }));

      function updatedBook(_x5, _x6) {
        return _updatedBook.apply(this, arguments);
      }

      return updatedBook;
    }()
  }, {
    key: "getABook",
    value: function () {
      var _getABook = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee4(req, res) {
        var id, theBook;
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                id = req.params.id;

                if (Number(id)) {
                  _context4.next = 4;
                  break;
                }

                util.setError(400, 'Please input a valid numeric value');
                return _context4.abrupt("return", util.send(res));

              case 4:
                _context4.prev = 4;
                _context4.next = 7;
                return _BookService["default"].getABook(id);

              case 7:
                theBook = _context4.sent;

                if (!theBook) {
                  util.setError(404, "Cannot find book with the id ".concat(id));
                } else {
                  util.setSuccess(200, 'Found Book', theBook);
                }

                return _context4.abrupt("return", util.send(res));

              case 12:
                _context4.prev = 12;
                _context4.t0 = _context4["catch"](4);
                util.setError(404, _context4.t0);
                return _context4.abrupt("return", util.send(res));

              case 16:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, null, [[4, 12]]);
      }));

      function getABook(_x7, _x8) {
        return _getABook.apply(this, arguments);
      }

      return getABook;
    }()
  }, {
    key: "deleteBook",
    value: function () {
      var _deleteBook = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee5(req, res) {
        var id, bookToDelete;
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                id = req.params.id;

                if (Number(id)) {
                  _context5.next = 4;
                  break;
                }

                util.setError(400, 'Please provide a numeric value');
                return _context5.abrupt("return", util.send(res));

              case 4:
                _context5.prev = 4;
                _context5.next = 7;
                return _BookService["default"].deleteBook(id);

              case 7:
                bookToDelete = _context5.sent;

                if (bookToDelete) {
                  util.setSuccess(200, 'Book deleted');
                } else {
                  util.setError(404, "Book with the id ".concat(id, " cannot be found"));
                }

                return _context5.abrupt("return", util.send(res));

              case 12:
                _context5.prev = 12;
                _context5.t0 = _context5["catch"](4);
                util.setError(400, _context5.t0);
                return _context5.abrupt("return", util.send(res));

              case 16:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, null, [[4, 12]]);
      }));

      function deleteBook(_x9, _x10) {
        return _deleteBook.apply(this, arguments);
      }

      return deleteBook;
    }()
  }]);
  return BookController;
}();

var _default = BookController;
exports["default"] = _default;
//# sourceMappingURL=BookController.js.map