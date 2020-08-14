import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { NavLink, Link } from 'react-router-dom';
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';
import bulbIcon from 'assets/icons/bulb.svg';
import logoutIcon from 'assets/icons/logout.svg';
import penIcon from 'assets/icons/pen.svg';
import twitterIcon from 'assets/icons/twitter.svg';
import logoIcon from 'assets/icons/logo.svg';

const SidebarWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 150px;
  height: 100vh;
  background-color: ${({ theme, pageType }) => theme[pageType]};
  display: grid;
  grid-template-rows: 1.5fr 4fr 1fr;
`;

const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  ${({ center }) =>
    center &&
    css`
      justify-content: center;
    `}
  ${({ flexEnd }) =>
    flexEnd &&
    css`
      justify-content: flex-end;
    `}
`;

const StyledLogoLink = styled(NavLink)`
  display: block;
  width: 67px;
  height: 67px;
  background-image: url(${logoIcon});
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: 80%;
  border: none;
`;

const Sidebar = ({ pageType }) => {
  return (
    <SidebarWrapper pageType={pageType}>
      <InnerWrapper center>
        <StyledLogoLink as={Link} to="/" />
      </InnerWrapper>
      <InnerWrapper>
        <ButtonIcon as={NavLink} to="/notes" exact icon={penIcon} />
        <ButtonIcon as={NavLink} to="/twitters" icon={twitterIcon} />
        <ButtonIcon as={NavLink} to="/articles" icon={bulbIcon} />
      </InnerWrapper>
      <InnerWrapper flexEnd>
        <ButtonIcon as={Link} to="/" icon={logoutIcon} />
      </InnerWrapper>
    </SidebarWrapper>
  );
};

Sidebar.propTypes = {
  pageType: PropTypes.oneOf(['notes', 'twitters', 'articles']),
};
Sidebar.defaultProps = {
  pageType: 'notes',
};

export default Sidebar;
