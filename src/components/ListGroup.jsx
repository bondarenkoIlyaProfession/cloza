import React from "react";
import PropTypes from "prop-types";

export const ListGroup = ({ children, className, tag: Tag, ...attrs }) => {
  return (
    <Tag className={`list-reset ${className}`} {...attrs}>
      {children}
    </Tag>
  );
};

ListGroup.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
};

ListGroup.defaultProps = {
  children: null,
  className: "list-reset",
  tag: "ul",
};
