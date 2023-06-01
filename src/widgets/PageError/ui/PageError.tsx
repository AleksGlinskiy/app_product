import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui';
import cls from './PageError.module.scss';

interface PageErrorProps {
    className?: string;
}

const PageError = ({ className }: PageErrorProps) => {
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.PageError, {}, [className])}>
            <h2>{t('Ошибка приложения!')}</h2>
            <Button>{t('Обновить приложение')}</Button>
        </div>
    );
};

export default PageError;
