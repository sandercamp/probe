import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Spinner from '../Spinner';

export default {
    title: 'atom/Spinner',
    component: Spinner
} as ComponentMeta<typeof Spinner>;

const Template: ComponentStory<typeof Spinner> = () => <Spinner />

export const Default = Template.bind({});

Default.args = {
    text: 'Spinner'
};
