import React from 'react';
import cls from './TopPanel.module.scss';
import {classNames} from "shared/lib/classNames/classNames";
import {ThemeSwitcher} from "widgets/ThemeSwitcher";

interface TopPanelProps {
	className?: string;
}

const TopPanel = ({className}:TopPanelProps) => {
	return (
		<div className={classNames(cls.TopPanel, {}, [className])}>
			<ThemeSwitcher />
		</div>
	);
};

export default TopPanel;