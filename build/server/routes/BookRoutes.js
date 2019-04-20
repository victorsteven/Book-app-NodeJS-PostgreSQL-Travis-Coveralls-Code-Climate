"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _BookController = _interopRequireDefault(require("../controllers/BookController"));

var router = (0, _express.Router)();
router.get('/', _BookController["default"].getAllBooks);
router.post('/', _BookController["default"].addBook);
router.get('/:id', _BookController["default"].getABook);
router.put('/:id', _BookController["default"].updatedBook);
router["delete"]('/:id', _BookController["default"].deleteBook);
var _default = router;
exports["default"] = _default;
//# sourceMappingURL=BookRoutes.js.map