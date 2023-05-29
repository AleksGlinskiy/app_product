import React, {useState} from 'react';
import cls from './Sidebar.module.scss';
import {classNames} from "shared/lib/classNames/classNames";
import {Navbar} from "widgets/Navbar";
import {Button, Logo} from "shared/ui";

interface SidebarProps {
	className?: string;
}

const Sidebar = ({className}: SidebarProps) => {
	const [collapsed, setCollapsed] = useState(false);

	const toggleCollapsed = () => {
		setCollapsed(prev => !prev);
	}

	return (
		<div className={classNames(cls.Sidebar, {[cls.collapsed]: collapsed}, [className])}>
			<Logo className={cls.Logo} />

			{collapsed ? '' : <Navbar className={cls.Navbar} />}

			<Button className={cls.toggleButton} onClick={toggleCollapsed}>
				{collapsed ? '>' : '<'}
			</Button>
		</div>
	);
};

export default Sidebar;