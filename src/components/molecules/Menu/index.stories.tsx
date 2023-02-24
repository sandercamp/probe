import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Menu from '../Menu';
import MenuButton from '../../atoms/MenuButton';

export default {
    title: 'molecules/Menu',
    component: Menu
} as ComponentMeta<typeof Menu>;

const Template: ComponentStory<typeof Menu> = args => <Menu { ...args } >
    <MenuButton text={ 'MenuButton1' } />
    <MenuButton text={ 'MenuButton2' } />
    <MenuButton text={ 'MenuButton3' } />
    <MenuButton text={ 'MenuButton4' } />
</Menu>

export const Default = Template.bind({});
