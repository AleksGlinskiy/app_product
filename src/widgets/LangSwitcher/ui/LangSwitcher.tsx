import React from 'react';
import cls from './LangSwitcher.module.scss';
import {classNames} from "shared/lib/classNames/classNames";
import {useTranslation} from "react-i18next";
import {Button} from "shared/ui";

interface LangSwitcherProps {
	className?: string;
}

const LangSwitcher = ({className}: LangSwitcherProps) => {
	const { t, i18n } = useTranslation();

	const toggleTranslate = () => {
		i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
	}

	return (
		<Button onClick={toggleTranslate} className={classNames(cls.LangSwitcher, {}, [className])}>{t('Язык')}</Button>
	);
};

export default LangSwitcher;