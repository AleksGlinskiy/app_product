import React, { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Link, LinkProps } from 'react-router-dom';
import cls from './AppLink.module.scss';

export enum AppLinkTheme {
    DARK = 'dark',
    LIGHT = 'light',
}

interface AppLinkProps extends LinkProps {
    className?: string;
    theme?: AppLinkTheme;
}

const AppLink: FC<AppLinkProps> = (props) => {
    const {
        to,
        className,
        children,
        theme = AppLinkTheme.LIGHT,
        ...other
    } = props;

    return (
        <Link
            to={to}
            className={classNames(cls.AppLink, {}, [className, ...[cls[theme]]])}
            {...other}
        >
            {children}
        </Link>
    );
};

export default AppLink;
