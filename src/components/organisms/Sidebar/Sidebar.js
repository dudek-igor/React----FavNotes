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
  width: 163px;
  height: 100vh;
  background-color: ${({ theme, sidebarType }) => theme[sidebarType]};
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
  ${({ end }) =>
    end &&
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

const Sidebar = ({ sidebarType }) => {
  return (
    <SidebarWrapper sidebarType={sidebarType}>
      <InnerWrapper center>
        <StyledLogoLink exact to="/" />
      </InnerWrapper>
      <InnerWrapper>
        <ButtonIcon exact as={NavLink} to="/" icon={penIcon} />
        <ButtonIcon as={NavLink} to="/twitters" icon={twitterIcon} />
        <ButtonIcon as={NavLink} to="/articles" icon={bulbIcon} />
      </InnerWrapper>
      <InnerWrapper end>
        <ButtonIcon exact as={Link} to="/" icon={logoutIcon} />
      </InnerWrapper>
    </SidebarWrapper>
  );
};

Sidebar.propTypes = {
  sidebarType: PropTypes.oneOf(['note', 'twitter', 'article']),
};
Sidebar.defaultProps = {
  sidebarType: 'note',
};

export default Sidebar;
