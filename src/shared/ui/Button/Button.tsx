import React, { ButtonHTMLAttributes, FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Button.module.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: string;
}

export enum ButtonTheme {
    INLINE = 'inline',
}

export const Button: FC<ButtonProps> = (props) => {
    const {
        className,
        children,
        theme,
        ...other
    } = props;

    return (
        <button
            type="button"
            className={classNames(cls.Button, {}, [className, ...[cls[theme]]])}
            {...other}
        >
            {children}
        </button>
    );
};
