import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink } from 'shared/ui';
import { useTranslation } from 'react-i18next';
import { RoutePatch } from 'shared/config/routeConfig/routeConfig';
import cls from './Navbar.module.scss';

import HomeIcon from '../../assets/icons/home.svg';
import AboutIcon from '../../assets/icons/about.svg';

interface NavbarProps {
    className?: string;
    onlyIcon?: boolean;
}

const Navbar = ({ className, onlyIcon }: NavbarProps) => {
    const { t } = useTranslation(['translation', 'about']);

    return (
        <div className={classNames(cls.Navbar, { [cls.Icon]: onlyIcon }, [className])}>
            <nav>
                <ul>
                    <li>
                        <AppLink to={RoutePatch.main}>
                            <HomeIcon />
                            <span>{t('Главная страница')}</span>
                        </AppLink>
                    </li>
                    <li>
                        <AppLink to={RoutePatch.about}>
                            <AboutIcon />
                            <span>{t('О компании', { ns: 'about' })}</span>
                        </AppLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;
