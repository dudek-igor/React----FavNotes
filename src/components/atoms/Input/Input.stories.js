import React from 'react';
import Input from './Input';

export default {
  title: 'Input',
  component: Input,
};

export const FirstInput = () => <Input placeholder="Login" />;

export const SecendaryInput = () => <Input search placeholder="Search" />;
