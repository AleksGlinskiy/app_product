import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Button, ButtonTheme } from './Button';

export default {
    title: 'shared/Button',
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
    children: 'Button',
};

export const DefaultDark = Template.bind({});
DefaultDark.args = {
    children: 'Button',
};
DefaultDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Inline = Template.bind({});
Inline.args = {
    children: 'Button',
    theme: ButtonTheme.INLINE,
};

export const InlineDark = Template.bind({});
InlineDark.args = {
    children: 'Button',
    theme: ButtonTheme.INLINE,
};
InlineDark.decorators = [ThemeDecorator(Theme.DARK)];
