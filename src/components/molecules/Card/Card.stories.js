import React from 'react';
import Card from './Card';

export default {
  title: 'Molecules/Card',
  component: Card,
};

export const PrimaryCard = () => <Card />;
export const SecondaryCard = () => <Card cardType="twitter" />;
export const TertiaryCard = () => <Card cardType="article" />;
