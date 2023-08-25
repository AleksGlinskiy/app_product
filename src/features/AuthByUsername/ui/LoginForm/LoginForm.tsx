import React, { InputHTMLAttributes } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui';
import Input from 'shared/ui/Input/Input';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string;
}

export const LoginForm = ({ className }: LoginFormProps) => {
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <h1>{t('Вход')}</h1>
            <Input type="text" placeholder={t('Username')} className={cls.input} />
            <Input type="text" placeholder={t('Password')} className={cls.input} />
            <Button>{t('Войти')}</Button>
        </div>
    );
};
