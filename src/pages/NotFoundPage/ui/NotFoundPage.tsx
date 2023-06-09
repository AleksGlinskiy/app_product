import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';

interface NotFoundPageProps {
    className?: string;
}

const NotFoundPage = ({ className }: NotFoundPageProps) => {
    const { t } = useTranslation();

    return (
        <div className={classNames('', {}, [className])}>
            <h1>{t('Страница не найдена!')}</h1>
        </div>
    );
};

export default NotFoundPage;
