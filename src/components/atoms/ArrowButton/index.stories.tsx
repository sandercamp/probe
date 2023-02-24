import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import ArrowButton from '../ArrowButton';

export default {
    title: 'atom/ArrowButton',
    component: ArrowButton
} as ComponentMeta<typeof ArrowButton>;

const Template: ComponentStory<typeof ArrowButton> = args => <ArrowButton { ...args } />

export const Default = Template.bind({});
