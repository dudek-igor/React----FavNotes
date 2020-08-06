import React from 'react';

import Button from 'components/Button/Button';
import GlobalStyle from 'theme/GlobalStyles';

function Root() {
  return (
    <>
      <GlobalStyle />
      <h1>Hello Igor</h1>
      <Button>Close / Save</Button>
      <Button secendary>Remove</Button>
    </>
  );
}

export default Root;
