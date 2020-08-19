import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import UserPageTemplate from 'templates/UserPageTemplate';
import Button from 'components/atoms/Button/Button';
import Heading from 'components/atoms/Heading/Heading';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import { withContext } from 'hoc/withContext';

const StyledWrapper = styled.div`
  padding: 50px 0 0 100px;
`;
const StyledInnerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 50px;
  max-width: 50vw;
`;
const StyledAvatar = styled.img`
  height: 86px;
  width: 86px;
  border-radius: 50%;
  border: 5px solid ${({ theme }) => theme.twitters};
`;
const StyledParagraph = styled(Paragraph)`
  margin: 20px 0px;
  max-width: 50vw;
  ${({ bold }) =>
    bold &&
    css`
      font-weight: ${({ theme }) => theme.bold};
      margin: 10px 0px;
    `}
`;
const StyledButton = styled(Button)`
  margin: 50px 0px;
`;

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  border-radius: 50px;
  font-weight: ${({ theme }) => theme.bold};
  text-decoration: none;
  color: black;
`;

const DetailsTemplate = ({ pageContext, title, created, content, articleUrl, twitterName }) => {
  return (
    <UserPageTemplate>
      <StyledWrapper>
        <StyledInnerWrapper>
          <Heading big>{title}</Heading>
          {pageContext === 'twitters' && (
            <StyledAvatar src={`https://avatars.io/twitter/${twitterName}`} />
          )}
          {pageContext === 'articles' && <Link href={articleUrl} />}
        </StyledInnerWrapper>
        <StyledParagraph bold>CREATED - {created}</StyledParagraph>
        <StyledParagraph>{content}</StyledParagraph>
        <StyledButton>
          <StyledLink to={`/${pageContext}`}>Close / Save</StyledLink>
        </StyledButton>
      </StyledWrapper>
    </UserPageTemplate>
  );
};

DetailsTemplate.propTypes = {
  pageContext: PropTypes.oneOf(['notes', 'twitters', 'articles']),
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  created: PropTypes.string.isRequired,
  articleUrl: PropTypes.string,
  twitterName: PropTypes.string,
};
DetailsTemplate.defaultProps = {
  pageContext: 'notes',
  articleUrl: '',
  twitterName: '',
};

export default withContext(DetailsTemplate);
