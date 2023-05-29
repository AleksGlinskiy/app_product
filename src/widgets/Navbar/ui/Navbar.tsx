import React from 'react';
import cls from './Navbar.module.scss';
import {classNames} from "shared/lib/classNames/classNames";
import {AppLink} from "shared/ui";
import {useTranslation} from "react-i18next";

interface NavbarProps {
	className?: string;
}

const Navbar = ({className}: NavbarProps) => {
	const { t } = useTranslation(['translation', 'about']);

	return (
		<div className={classNames(cls.Navbar, {}, [className])}>
			<nav className={cls.Navbar__nav}>
				<ul>
					<li><AppLink to="/">{t('Главная страница')}</AppLink></li>
					<li><AppLink to="/about">{t('О компании', {ns: "about"})}</AppLink></li>
				</ul>
			</nav>
		</div>
	);
};

export default Navbar;