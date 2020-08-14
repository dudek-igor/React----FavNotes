import React from 'react';
import StoryRouter from 'storybook-react-router';
import Sidebar from './Sidebar';

export default {
  title: 'Organisms/Sidebar',
  component: Sidebar,
  decorators: [StoryRouter()],
};

export const PrimarySidebar = () => <Sidebar />;
export const SecondarySidebar = () => <Sidebar pageType="twitter" />;
export const TertiarySidebar = () => <Sidebar pageType="article" />;
