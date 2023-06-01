import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher';
import cls from './TopPanel.module.scss';

interface TopPanelProps {
    className?: string;
}

const TopPanel = ({ className }:TopPanelProps) => (
    <div className={classNames(cls.TopPanel, {}, [className])}>
        <LangSwitcher className={cls.LangSwitcher} />
        <ThemeSwitcher />
    </div>
);

export default TopPanel;
