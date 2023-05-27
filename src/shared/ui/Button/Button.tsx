import React, {ButtonHTMLAttributes, FC} from 'react';
import cls from './Button.module.scss';
import {classNames} from "shared/lib/classNames/classNames";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string;
	theme?: string;
}

export enum ButtonTheme {
	CLEAR = 'clear',
}

const Button: FC<ButtonProps> = (props) => {
	const {
		className,
		children,
		theme = ButtonTheme.CLEAR,
		...other
	} = props;

	return (
		<button
			className={classNames(cls.Button, {}, [className, ...[cls[theme]]])}
			{...other}
		>
			{children}
		</button>
	);
};

export default Button;