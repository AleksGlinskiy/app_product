import React from 'react';
import cls from './Logo.module.scss';
import {classNames} from "shared/lib/classNames/classNames";

import ImageLogo from "../../assets/icons/logo.svg";

interface LogoProps {
	className?: string;
}

const Logo = ({className}: LogoProps) => {
	return (
		<div className={classNames(cls.Logo, {}, [className])}>
			<ImageLogo />
			<span className={cls.Logo__name}>webCRM</span>
		</div>
	);
};

export default Logo;