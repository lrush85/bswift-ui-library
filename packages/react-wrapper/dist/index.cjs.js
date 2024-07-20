'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var Button$1 = function (props) {
    return "<button style=\"color: ".concat(props.color, ";\">").concat(props.label, "</button>");
};

const Button = ({ label, color }) => {
    return React__default["default"].createElement("div", { dangerouslySetInnerHTML: { __html: Button$1({ label, color }) } });
};

exports.Button = Button;
//# sourceMappingURL=index.cjs.js.map
