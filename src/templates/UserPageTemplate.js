import React from 'react';
import PropTypes from 'prop-types';
import Sidebar from 'components/organisms/Sidebar/Sidebar';
import styled from 'styled-components';

const StyledDiv = styled.div`
  padding-left: 150px;
`;

const UserPageTemplate = ({ children }) => {
  return (
    <>
      <Sidebar />
      <StyledDiv>{children}</StyledDiv>
    </>
  );
};
UserPageTemplate.propTypes = {
  children: PropTypes.node.isRequired,
};

export default UserPageTemplate;
