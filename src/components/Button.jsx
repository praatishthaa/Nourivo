import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const VARIANT_STYLES = {
  primary: 'bg-tiffany text-bistre hover:bg-teal',
  secondary: 'bg-yellowbus text-bistre hover:bg-yellow-400',
  danger: 'bg-red-500 text-white hover:bg-red-600',
  ghost: 'bg-transparent border border-bistre text-bistre hover:bg-bistre hover:text-white',
};

const Button = ({
  children,
  variant = 'primary',
  fullWidth = false,
  onClick,
  type = 'button',
  disabled = false,
  className = '',
}) => {
  const baseStyles = 'px-4 py-2 rounded font-semibold transition duration-200';
  const disabledStyles = 'opacity-50 cursor-not-allowed';

  const finalClass = classNames(
    baseStyles,
    VARIANT_STYLES[variant],
    {
      'w-full': fullWidth,
      [disabledStyles]: disabled,
    },
    className
  );

  return (
    <button
      type={type}
      onClick={onClick}
      className={finalClass}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['primary', 'secondary', 'danger', 'ghost']),
  fullWidth: PropTypes.bool,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  disabled: PropTypes.bool,
  className: PropTypes.string,
};

export default Button;
