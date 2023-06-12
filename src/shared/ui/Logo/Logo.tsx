import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './Logo.module.scss';

import ImageLogo from '../../assets/icons/logo.svg';

interface LogoProps {
    className?: string;
}

const Logo = ({ className }: LogoProps) => {
    const { t } = useTranslation('about');
    return (
        <div className={classNames(cls.Logo, {}, [className])}>
            <ImageLogo />
            <span className={cls.Logo__name}>{t('webCRM')}</span>
        </div>
    );
};

export default Logo;
