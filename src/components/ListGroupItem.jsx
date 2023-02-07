import React from "react";
import PropTypes from "prop-types";

export const ListGroupItem = ({ children, className, tag: Tag, ...attrs }) => {
  return (
    <Tag className={className} {...attrs}>
      {children}
    </Tag>
  );
};

ListGroupItem.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
};

ListGroupItem.defaultProps = {
  children: null,
  className: "list__item",
  tag: "li",
};
