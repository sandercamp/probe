import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import MenuToggleIcon from './';

export default {
    title: 'atom/MenuToggleIcon',
    component: MenuToggleIcon
} as ComponentMeta<typeof MenuToggleIcon>;

const Template: ComponentStory<typeof MenuToggleIcon> = args => <MenuToggleIcon { ...args } />

export const Default = Template.bind({});
