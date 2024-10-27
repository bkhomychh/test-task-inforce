import type { ButtonHTMLAttributes } from 'react';
import clsx from 'clsx';

import styles from './Button.module.scss';

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = ({ className, ...otherProps }: IButtonProps) => {
  return <button type="button" {...otherProps} className={clsx(styles.button, className)} />;
};

export default Button;
