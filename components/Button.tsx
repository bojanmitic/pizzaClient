import React, { useState } from 'react';
import styles from './button.module.css';
import classNames from 'classnames';
import { Spinner } from 'react-bootstrap';

interface IButtonProps {
  //Common HTML Props
  id?: string;
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void | Promise<any>;
  title?: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';

  //Button component props
  pending?: boolean;
  icon?: React.ReactElement;

  //common component props
  children: React.ReactNode;
}

const Button = (props: IButtonProps) => {
  const {
    disabled,
    pending: pendingFromProps = false,
    id,
    className,
    title,
    type = 'button',
    children,
    icon,
  } = props;
  const [pendingFromState, setPendingFromState] = useState(false);

  const pending = pendingFromProps || pendingFromState;

  const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    const { onClick } = props;
    if (typeof onClick !== 'function') return;
    const mayByPromise = onClick(e);
    const promise =
      mayByPromise && typeof mayByPromise.then === 'function'
        ? mayByPromise
        : Promise.resolve();
    setPendingFromState(true);
    await promise;
    setPendingFromState(false);
  };

  const classes = classNames(styles.root, className, {
    [styles.disabled]: disabled,
  });

  const rootProps = {
    id,
    title,
    type,
    className: classes,
    disabled: disabled || pending,
  };
  return (
    <button {...rootProps} onClick={handleClick}>
      <span className={styles.wrapper}>
        {pending && <Spinner className={styles.spinner} animation="border" />}
        {icon && <span className={styles.icon}>{icon}</span>}
        {children && <span className={styles.label}>{children}</span>}
      </span>
    </button>
  );
};

export default Button;
