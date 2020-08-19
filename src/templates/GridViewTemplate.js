import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import UserPageTemplate from 'templates/UserPageTemplate';
import Input from 'components/atoms/Input/Input';
import Heading from 'components/atoms/Heading/Heading';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import { withContext } from 'hoc/withContext';

const StyledWrapper = styled.div`
  padding: 25px 70px 25px 70px;
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

const GridViewTemplate = ({ children, pageContext }) => {
  return (
    <UserPageTemplate>
      <StyledWrapper>
        <StyledPageHeader>
          <StyledHeading big as="h1">
            {pageContext}
          </StyledHeading>
          <Input search placeholder="Search" />
          <StyledParagraph>6 {pageContext}</StyledParagraph>
        </StyledPageHeader>
        <StyledGrid>{children}</StyledGrid>
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
