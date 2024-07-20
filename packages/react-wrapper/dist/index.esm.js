import React from 'react';

var Button$1 = function (props) {
    return "<button style=\"color: ".concat(props.color, ";\">").concat(props.label, "</button>");
};

const Button = ({ label, color }) => {
    return React.createElement("div", { dangerouslySetInnerHTML: { __html: Button$1({ label, color }) } });
};

export { Button };
//# sourceMappingURL=index.esm.js.map
