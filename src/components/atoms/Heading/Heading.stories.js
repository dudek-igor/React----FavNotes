import React from 'react';
import Heading from './Heading';

export default {
  title: 'Heading',
  component: Heading,
};

export const BigHeading = () => <Heading big>Hello Igor</Heading>;

export const SmallerHead = () => <Heading>Hello Igor</Heading>;
