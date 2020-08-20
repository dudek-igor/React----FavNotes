/* eslint-disable no-shadow */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import styled, { css } from 'styled-components';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import Heading from 'components/atoms/Heading/Heading';
import Button from 'components/atoms/Button/Button';
import LinkIcon from 'assets/icons/link.svg';
import { connect } from 'react-redux';
import { removeItem } from 'data/actions';
import { withContext } from 'hoc/withContext';

const StyledWrapper = styled.div`
  min-height: 380px;
  box-shadow: 0 10px 30px -10px hsla(0, 0%, 0%, 0.9);
  margin: 10px 0;
  border-radius: 10px;
  overflow: hidden;
  display: grid;
  grid-template-rows: 1fr 4fr;
`;
const InnerWrapper = withContext(styled.div`
  position: relative;
  padding: 17px 30px;
  background-color: ${({ theme, pageContext }) => theme[pageContext]};
  ${({ flex }) =>
    flex &&
    css`
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    `}
`);
const DateInfo = styled.div`
  margin: 0 0 10px;
  font-weight: ${({ theme }) => theme.bold};
  font-size: ${({ theme }) => theme.fontSize.xs};
`;
const StyleHeading = styled(Heading)`
  margin: 5px 0 0;
`;
const StyledAvatar = styled.img`
  position: absolute;
  right: 20px;
  top: 20px;
  height: 86px;
  width: 86px;
  border-radius: 50%;
  border: 5px solid ${({ theme }) => theme.twitters};
`;
const StyledLinkButton = styled.a`
  display: block;
  width: 47px;
  height: 47px;
  border-radius: 50px;
  background: white url(${LinkIcon});
  background-size: 60%;
  background-position: 50%;
  background-repeat: no-repeat;
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
`;

const Card = ({
  pageContext,
  title,
  created,
  twitterName,
  articleUrl,
  content,
  id,
  removeItem,
}) => {
  const [redirected, setRedirected] = useState(false);
  if (redirected === true) {
    return <Redirect to={`${pageContext}/${id}`} />;
  }
  return (
    <StyledWrapper onClick={() => setRedirected(true)}>
      <InnerWrapper>
        <StyleHeading>{title}</StyleHeading>
        <DateInfo>Created - {created}</DateInfo>
        {pageContext === 'twitters' && (
          <StyledAvatar src={`https://avatars.io/twitter/${twitterName}`} />
        )}
        {pageContext === 'articles' && <StyledLinkButton href={articleUrl} />}
      </InnerWrapper>
      <InnerWrapper flex>
        <Paragraph>{content}</Paragraph>
        <Button
          secendary
          onClick={(e) => {
            e.stopPropagation();
            removeItem(pageContext, id);
          }}
        >
          Remove
        </Button>
      </InnerWrapper>
    </StyledWrapper>
  );
};

Card.propTypes = {
  pageContext: PropTypes.oneOf(['notes', 'twitters', 'articles']),
  title: PropTypes.string.isRequired,
  created: PropTypes.string.isRequired,
  twitterName: PropTypes.string,
  articleUrl: PropTypes.string,
  content: PropTypes.string.isRequired,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  removeItem: PropTypes.func.isRequired,
};
Card.defaultProps = {
  pageContext: 'notes',
  twitterName: 'unknown',
  articleUrl: '/',
};

const mapDispatchToProps = {
  removeItem,
};

export default connect(null, mapDispatchToProps)(withContext(Card));
