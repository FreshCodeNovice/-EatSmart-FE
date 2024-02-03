import React from 'react';
import {} from '@storybook/react';
import RadioImageButton, { RadioImageButtonProps } from './RadioImageButton';
import Ymale from '../../assets/images/Ymale.png';
import Nmale from '../../assets/images/Nmale.png';

export default {
    component: RadioImageButton,
    title: 'Image/RadioImageButton',
};

const Template = (args) => <RadioImageButton {...args} />;

export const Default = Template.bind({});
Default.args = {
    selected: false,
    selectedSrc: Ymale,
    unselectedSrc: Nmale,
    alt: 'male',
    onClick: () => {},
};

export const selectedImage = Template.bind({});
selectedImage.args = {
    ...Default.args,
    selected: true,
};
