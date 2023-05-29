import React from 'react';
import cls from './Navbar.module.scss';
import {classNames} from "shared/lib/classNames/classNames";
import {AppLink} from "shared/ui";

interface NavbarProps {
	className?: string;
}

const Navbar = ({className}: NavbarProps) => {
	return (
		<div className={classNames(cls.Navbar, {}, [className])}>

			<nav className={cls.Navbar__nav}>
				<ul>
					<li><AppLink to="/">Главная</AppLink></li>
					<li><AppLink to="/about">О компании</AppLink></li>
				</ul>
			</nav>
		</div>
	);
};

export default Navbar;