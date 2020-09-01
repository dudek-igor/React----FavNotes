import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import UserPageTemplate from 'templates/UserPageTemplate';
import Input from 'components/atoms/Input/Input';
import Heading from 'components/atoms/Heading/Heading';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import { withContext } from 'hoc/withContext';
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';
import plusIcon from 'assets/icons/plus.svg';
import NewItemBar from 'components/organisms/NewItemBar/NewItemBar';

const StyledWrapper = styled.div`
  padding: 25px 150px 25px 75px;
`;
const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 45px;
  @media (max-width: 1100px) {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 20px;
  }
  @media (max-width: 800px) {
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 0;
  }
`;
const StyledPageHeader = styled.div`
  margin: 25px 0 25px 0;
  ::first-letter {
    text-transform: uppercase;
  }
`;
const StyledHeading = styled(Heading)`
  margin: 25px 0 20px 0;
`;
const StyledParagraph = styled(Paragraph)`
  font-weight: ${({ theme }) => theme.bold};
  margin: 10px 0 0 0;
`;
const StyledButtonIcon = withContext(styled(ButtonIcon)`
  position: fixed;
  bottom: 40px;
  right: 40px;
  z-index: 30;
  border-radius: 50%;
  background-color: ${({ theme, pageContext }) => theme[pageContext]};
  background-size: 35%;
  transform: ${({ isVisible }) => (isVisible ? 'rotate(-135deg)' : 'rotate(0deg)')};
  transition: transform 0.4s ease-in-out;
`);

const GridViewTemplate = ({ children, pageContext }) => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <UserPageTemplate>
      <StyledWrapper>
        <StyledPageHeader>
          <StyledHeading big as="h1">
            {pageContext}
          </StyledHeading>
          <Input search placeholder="Search" />
          <StyledParagraph>
            {children.length > 1 ? `${children.length} ${pageContext}` : null}
          </StyledParagraph>
        </StyledPageHeader>
        <StyledGrid>{children}</StyledGrid>
        <NewItemBar setIsVisible={setIsVisible} isVisible={isVisible} />
        <StyledButtonIcon
          onClick={() => setIsVisible(!isVisible)}
          icon={plusIcon}
          isVisible={isVisible}
        />
      </StyledWrapper>
    </UserPageTemplate>
  );
};
GridViewTemplate.propTypes = {
  pageContext: PropTypes.oneOf(['notes', 'twitters', 'articles']),
  children: PropTypes.node.isRequired,
};
GridViewTemplate.defaultProps = {
  pageContext: 'notes',
};

export default withContext(GridViewTemplate);
