import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import MenuButton from './MenuButton';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'atom/MenuButton',
    component: MenuButton
} as ComponentMeta<typeof MenuButton>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof MenuButton> = args => <MenuButton { ...args } />

export const Default = Template.bind({});

Default.args = {
    text: 'MenuButton'
};

export const Active = Template.bind({});

Active.args = {
    text: 'MenuButton',
    active: true
};

export const Disabled = Template.bind({});

Disabled.args = {
    text: 'MenuButton',
    disabled: true
}