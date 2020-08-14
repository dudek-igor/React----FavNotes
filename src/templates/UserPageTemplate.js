import React from 'react';
import PropTypes from 'prop-types';
import Sidebar from 'components/organisms/Sidebar/Sidebar';

const UserPageTemplate = ({ children, pageType }) => {
  return (
    <>
      <Sidebar pageType={pageType} />
      {children}
    </>
  );
};
UserPageTemplate.propTypes = {
  pageType: PropTypes.oneOf(['notes', 'twitters', 'articles']),
  children: PropTypes.node.isRequired,
};
UserPageTemplate.defaultProps = {
  pageType: 'notes',
};

export default UserPageTemplate;
