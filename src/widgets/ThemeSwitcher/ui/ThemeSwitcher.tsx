import React from 'react';
import cls from './ThemeSwitcher.module.scss';
import {classNames} from "shared/lib/classNames/classNames";
import {Theme, useTheme} from "app/providers/ThemeProvider";
import DarkIcon from "../../assets/icons/theme-dark.svg";
import LightIcon from "../../assets/icons/theme-light.svg";
import { Button } from "shared/ui";

interface ThemeSwitcherProps {
	className?: string;
}

const ThemeSwitcher = ({className}: ThemeSwitcherProps) => {
	const {theme, toggleTheme} = useTheme();

	return (
		<Button
			onClick={toggleTheme}
			className={classNames(cls.ThemeSwitcher__btn, {}, [className])}
		>
			{theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}
		</Button>
	);
};

export default ThemeSwitcher;