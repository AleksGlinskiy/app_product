import React, { useCallback, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, Button, Modal } from 'shared/ui';
import { useTranslation } from 'react-i18next';
import { RoutePatch } from 'shared/config/routeConfig/routeConfig';
import { Theme } from 'app/providers/ThemeProvider';
import { ButtonTheme } from 'shared/ui/Button/Button';
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

    const onToggleModal = useCallback(() => {
        setIsAuthModal((prev) => !prev);
    }, []);

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
                        <Button onClick={onToggleModal} theme={ButtonTheme.CLEAR}>
                            <span>{t('Войти')}</span>
                        </Button>
                    </li>
                </ul>
            </nav>

            <Modal isOpen={isAuthModal} onClose={onToggleModal}>
                {/* eslint-disable-next-line i18next/no-literal-string */}
                <p>
                    Lorem ipsum dolor sit amet,
                    consectetur adipisicing elit. Aspernatur, aut,
                    culpa cupiditate dolorum earum hic id ipsum
                    libero nam natus provident totam ut!
                    Doloremque laudantium nostrum, possimus ullam velit veritatis.
                </p>
            </Modal>
        </div>
    );
};

export default Navbar;
