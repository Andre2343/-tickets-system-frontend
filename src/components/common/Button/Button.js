import React from 'react';
import cn from 'classnames';
import MButton from '@material-ui/core/Button';
import s from './Button.module.scss';

const Button = ({ type = 'button', children, onClick, className, color = 'primary', variant = 'contained' }) => {
  return (
    <MButton color={color} variant={variant} onClick={onClick} type={type} className={cn(s.button, className)}>
      {children}
    </MButton>
  );
};

export default Button;
