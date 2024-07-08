"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
require("./React-Modal.css");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
// Ajoutez du style pour la modal

var ReactModal = function ReactModal(_ref) {
  var isOpen = _ref.isOpen,
    onClose = _ref.onClose,
    message = _ref.message,
    title = _ref.title,
    children = _ref.children;
  if (!isOpen) return null;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "overlay",
    onClick: onClose
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "modal",
    onClick: function onClick(e) {
      return e.stopPropagation();
    }
  }, /*#__PURE__*/_react["default"].createElement("h2", null, title), /*#__PURE__*/_react["default"].createElement("spam", null, message), /*#__PURE__*/_react["default"].createElement("button", {
    className: "close-button",
    onClick: onClose
  }, "X"), /*#__PURE__*/_react["default"].createElement("div", {
    className: "modal-content"
  }, children)));
};
var _default = exports["default"] = ReactModal;