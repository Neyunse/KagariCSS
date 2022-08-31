"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Button = props => {
  return /*#__PURE__*/_react.default.createElement("button", {
    className: props.styleArg ? "kg__button ".concat(props.styleArg) : 'kg__button'
  }, props.label);
};

var _default = Button;
exports.default = _default;