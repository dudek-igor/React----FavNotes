import React from 'react';
import { ThemeProvider } from 'styled-components';

import Button from 'components/atoms/Button/Button';
import Input from 'components/atoms/Input/Input';
import GlobalStyle from 'theme/GlobalStyles';
import { theme } from 'theme/mainTheme';

import magnifierIcon from 'assets/icons/magnifier.svg';

function Root() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <h1>Hello Igor</h1>
        {magnifierIcon}
        <Input placeholder="Login" />
        <Input search placeholder="Search" />
        <Button>Close / Save</Button>
        <Button secendary>Remove</Button>
      </>
    </ThemeProvider>
  );
}

export default Root;
