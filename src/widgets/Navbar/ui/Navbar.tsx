import React, { useCallback, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, Button, Modal } from 'shared/ui';
import { useTranslation } from 'react-i18next';
import { RoutePatch } from 'shared/config/routeConfig/routeConfig';
import { Theme } from 'app/providers/ThemeProvider';
import { ButtonTheme } from 'shared/ui/Button/Button';
import { LoginModal } from 'features/AuthByUsername';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAuthData, userActions } from 'entities/User';
import cls from './Navbar.module.scss';

import HomeIcon from '../../assets/icons/home.svg';
import AboutIcon from '../../assets/icons/about.svg';

interface NavbarProps {
    className?: string;
    onlyIcon?: boolean;
}

const Navbar = ({ className, onlyIcon }: NavbarProps) => {
    const { t } = useTranslation(['translation', 'about']);

    const [isAuthModal, setIsAuthModal] = useState(false);
    const authData = useSelector(getUserAuthData);
    const dispatch = useDispatch();

    const onCloseModal = useCallback(() => {
        setIsAuthModal(false);
    }, []);

    const onShowModal = useCallback(() => {
        setIsAuthModal(true);
    }, []);

    const onLogout = useCallback(() => {
        dispatch(userActions.logout());
    }, [dispatch]);

    if (authData) {
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
                        <li>
                            <Button onClick={onLogout} theme={ButtonTheme.CLEAR}>
                                <span>{t('Выйти')}</span>
                            </Button>
                        </li>
                    </ul>
                </nav>
            </div>
        );
    }

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
                    <li>
                        <Button onClick={onShowModal} theme={ButtonTheme.CLEAR}>
                            <span>{t('Войти')}</span>
                        </Button>
                    </li>
                </ul>
            </nav>

            <LoginModal
                isOpen={isAuthModal}
                onClose={onCloseModal}
            />
        </div>
    );
};

export default Navbar;
