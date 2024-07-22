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
    children = _ref.children,
    _ref$modalBackground = _ref.modalBackground,
    modalBackground = _ref$modalBackground === void 0 ? "#fff" : _ref$modalBackground,
    _ref$closeButtonBackg = _ref.closeButtonBackground,
    closeButtonBackground = _ref$closeButtonBackg === void 0 ? "#000" : _ref$closeButtonBackg,
    _ref$closeButtonHover = _ref.closeButtonHoverBackground,
    closeButtonHoverBackground = _ref$closeButtonHover === void 0 ? "#ff0000" : _ref$closeButtonHover;
  if (!isOpen) return null;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "overlay",
    onClick: onClose
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "modal",
    onClick: function onClick(e) {
      return e.stopPropagation();
    },
    style: {
      background: modalBackground
    }
  }, /*#__PURE__*/_react["default"].createElement("h2", {
    className: "title-modal"
  }, title), /*#__PURE__*/_react["default"].createElement("span", null, message), /*#__PURE__*/_react["default"].createElement("button", {
    className: "close-button",
    onClick: onClose,
    style: {
      '--close-button-background': closeButtonBackground,
      '--hover-background': closeButtonHoverBackground
    }
  }, "X"), /*#__PURE__*/_react["default"].createElement("div", {
    className: "modal-content"
  }, children)));
};
var _default = exports["default"] = ReactModal;