import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Slideshow from '../Slideshow';

export default {
    title: 'organisms/Slideshow',
    component: Slideshow
} as ComponentMeta<typeof Slideshow>;

const Template: ComponentStory<typeof Slideshow> = args => <Slideshow { ...args } />

export const Default = Template.bind({});
