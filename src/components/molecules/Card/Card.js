import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import styled, { css } from 'styled-components';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import Heading from 'components/atoms/Heading/Heading';
import Button from 'components/atoms/Button/Button';
import LinkIcon from 'assets/icons/link.svg';

const StyledWrapper = styled.div`
  min-height: 380px;
  box-shadow: 0 10px 30px -10px hsla(0, 0%, 0%, 0.1);
  border-radius: 10px;
  overflow: hidden;
  display: grid;
  grid-template-rows: 1fr 4fr;
`;

const InnerWrapper = styled.div`
  position: relative;
  padding: 17px 30px;
  background-color: ${({ theme, cardType }) => theme[cardType]};
  ${({ flex }) =>
    flex &&
    css`
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    `}
`;
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

const Card = ({ cardType, title, created, twitterName, articleUrl, content, id }) => {
  const [redirected, setRedirected] = useState(false);
  if (redirected === true) {
    return <Redirect to={`${cardType}/${id}`} />;
  }
  return (
    <StyledWrapper onClick={() => setRedirected(true)}>
      <InnerWrapper cardType={cardType}>
        <StyleHeading>{title}</StyleHeading>
        <DateInfo>{created}</DateInfo>
        {cardType === 'twitters' && (
          <StyledAvatar src={`https://avatars.io/twitter/${twitterName}`} />
        )}
        {cardType === 'articles' && <StyledLinkButton href={articleUrl} />}
      </InnerWrapper>
      <InnerWrapper flex>
        <Paragraph>{content}</Paragraph>
        <Button secendary>Remove</Button>
      </InnerWrapper>
    </StyledWrapper>
  );
};

Card.propTypes = {
  cardType: PropTypes.oneOf(['notes', 'twitters', 'articles']),
  title: PropTypes.string.isRequired,
  created: PropTypes.string.isRequired,
  twitterName: PropTypes.string,
  articleUrl: PropTypes.string,
  content: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};
Card.defaultProps = {
  cardType: 'notes',
  twitterName: 'unknown',
  articleUrl: '/',
};

export default Card;
