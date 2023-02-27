import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { within, userEvent } from '@storybook/testing-library';

import Header from '../Header';

export default {
    title: 'organisms/Header',
    component: Header,
    parameters: {
        // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'fullscreen',
        backgrounds: {
            default: 'light'
        }
    },
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = args => <Header {...args} />;

export const Default = Template.bind({});

Default.play = async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const menuItems = canvas.getAllByRole('menuitem');

    userEvent.hover(menuItems[0]);
};
