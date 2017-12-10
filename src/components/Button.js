import React from 'react';
import PropTypes from 'prop-types';

const ButtonInline = ({ onClick, type, children }) =>
  <Button type={type} className="button-inline" onClick={onClick}>{children}</Button>

const Button = ({ onClick, type, className, children }) =>
  <button type={type} className={className} onClick={onClick}>{children}</button>

Button.defaultProps = {
  type: 'button'
};

Button.propTypes = {
  onClick: PropTypes.func,
  type: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node.isRequired
};

export default Button;

export {
  ButtonInline
};
