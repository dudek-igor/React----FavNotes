import React from 'react';
import { withKnobs, select } from '@storybook/addon-knobs';
import Button from './Button';

export default {
  title: 'Atoms/Button',
  component: Button,
  decorators: [withKnobs],
};

export const FirstButton = () => {
  const label = 'Colors';
  const options = {
    primary: 'notes',
    secondary: 'twitters',
    tertiary: 'articles',
  };
  const defaultValue = 'hsl(49, 100%, 58%)';
  const groupId = 'GROUP-ID1';

  const value = select(label, options, defaultValue, groupId);

  return <Button pageType={value}>Button</Button>;
};

export const SecendaryButton = () => <Button secendary>Secendary Button</Button>;
