import React from 'react';
import { useTranslation } from 'react-i18next';

const AboutPage = () => {
    const { t } = useTranslation('about');
    return (
        <h1>{t('О компании')}</h1>
    );
};

export default AboutPage;
