import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Logo.module.scss';

import ImageLogo from '../../assets/icons/logo.svg';

interface LogoProps {
    className?: string;
}

const Logo = ({ className }: LogoProps) => (
    <div className={classNames(cls.Logo, {}, [className])}>
        <ImageLogo />
        <span className={cls.Logo__name}>webCRM</span>
    </div>
);

export default Logo;
