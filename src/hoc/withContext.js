/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PageContext from 'context';

export const withContext = (Component) => {
  return function contextComponent(props) {
    return (
      <PageContext.Consumer>
        {(context) => <Component {...props} pageContext={context} />}
      </PageContext.Consumer>
    );
  };
};
