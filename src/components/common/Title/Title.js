import React from 'react';
import cn from 'classnames';
import s from './Title.module.scss';

const Title = ({ children, className }) => <h1 className={cn(s.title, className)}>{children}</h1>;

export default Title;
