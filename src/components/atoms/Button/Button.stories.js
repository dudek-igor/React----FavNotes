import React from 'react';
import { withKnobs, select } from '@storybook/addon-knobs';
import Button from './Button';

export default {
  title: 'Button',
  component: Button,
  decorators: [withKnobs],
};

export const FirstButton = () => {
  const label = 'Colors';
  const options = {
    primary: 'hsl(49, 100%, 58%)',
    secondary: 'hsl(196, 83%, 75%)',
    tertiary: 'hsl(106, 47%, 64%)',
  };
  const defaultValue = 'hsl(49, 100%, 58%)';
  const groupId = 'GROUP-ID1';

  const value = select(label, options, defaultValue, groupId);

  return <Button color={value}>Button</Button>;
};

export const SecendaryButton = () => <Button secendary>Secendary Button</Button>;
