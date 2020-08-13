import React from 'react';
import { addDecorator } from '@storybook/react';
import StoryRouter from 'storybook-react-router';
import { ThemeProvider } from 'styled-components';
import { theme } from 'theme/mainTheme';
import GlobalStyles from 'theme/GlobalStyles';

addDecorator((storyFn) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {storyFn()}
    </ThemeProvider>
  );
});
