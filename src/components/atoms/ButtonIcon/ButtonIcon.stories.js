import React from 'react';
import bulbIcon from 'assets/icons/bulb.svg';
import logoutIcon from 'assets/icons/logout.svg';
import penIcon from 'assets/icons/pen.svg';
import plusIcon from 'assets/icons/plus.svg';
import twitterIcon from 'assets/icons/twitter.svg';
import styled from 'styled-components';
import ButtonIcon from './ButtonIcon';

export default {
  title: 'Atoms/ButtonIcon',
  component: ButtonIcon,
  decorators: [(storyFn) => <YellowBackground>{storyFn()}</YellowBackground>],
};

const YellowBackground = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 300px;
  background: ${({ theme }) => theme.notes};
`;

export const Bulb = () => <ButtonIcon active icon={bulbIcon} />;
export const Logout = () => <ButtonIcon icon={logoutIcon} />;
export const Pen = () => <ButtonIcon icon={penIcon} />;
export const Plus = () => <ButtonIcon icon={plusIcon} />;
export const Twitter = () => <ButtonIcon icon={twitterIcon} />;
