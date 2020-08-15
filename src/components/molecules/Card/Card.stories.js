import React from 'react';
import Card from './Card';

export default {
  title: 'Molecules/Card',
  component: Card,
};

export const PrimaryCard = () => <Card />;
export const SecondaryCard = () => <Card cardType="twitters" />;
export const TertiaryCard = () => <Card cardType="articles" />;
