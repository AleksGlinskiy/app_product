import React, { useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Navbar } from 'widgets/Navbar';
import { Button, Logo } from 'shared/ui';
import { LangSwitcher } from 'widgets/LangSwitcher';
import cls from './Sidebar.module.scss';

interface SidebarProps {
    className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);

    const toggleCollapsed = () => {
        setCollapsed((prev) => !prev);
    };

    return (
        <div
            data-testid="sidebar"
            className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}
        >
            <Logo className={cls.Logo} />

            <Navbar onlyIcon={collapsed} />

            <Button
                data-testid="sidebar-toggle"
                className={cls.toggleButton}
                onClick={toggleCollapsed}
            >
                {collapsed ? '>' : '<'}
            </Button>
        </div>
    );
};
