/* eslint-disable react/prop-types */
import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from 'theme/GlobalStyles';
import { theme } from 'theme/mainTheme';

import { withRouter } from 'react-router-dom';

import PageContext from 'context';

const MainTemplate = ({ children, location }) => {
  const [pageType, setPageType] = useState('notes');

  const pageValidation = useCallback(() => {
    const pageTypes = ['notes', 'twitters', 'articles'];
    const { pathname } = location;
    const [currentPage] = pageTypes.filter((page) => pathname.includes(page));
    setPageType(currentPage);
  }, [location]);

  useEffect(() => {
    pageValidation();
    return () => {
      pageValidation();
    };
  });
  return (
    <>
      <PageContext.Provider value={pageType}>
        <GlobalStyle />
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </PageContext.Provider>
    </>
  );
};
MainTemplate.propTypes = {
  children: PropTypes.element.isRequired,
};

export default withRouter(MainTemplate);
