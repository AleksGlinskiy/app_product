import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import TopPanel from './TopPanel';

export default {
    title: 'widgets/TopPanel',
    component: TopPanel,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof TopPanel>;

const Template: ComponentStory<typeof TopPanel> = (args) => <TopPanel {...args} />;

export const Default = Template.bind({});

export const DefaultDark = Template.bind({});
DefaultDark.decorators = [ThemeDecorator(Theme.DARK)];
