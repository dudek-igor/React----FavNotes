import React from 'react';
import StoryRouter from 'storybook-react-router';
import Sidebar from './Sidebar';

export default {
  title: 'Organisms/Sidebar',
  component: Sidebar,
  decorators: [StoryRouter()],
};

export const PrimarySidebar = () => <Sidebar />;
export const SecondarySidebar = () => <Sidebar sidebarType="twitter" />;
export const TertiarySidebar = () => <Sidebar sidebarType="article" />;
