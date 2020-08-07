import React from 'react';
import PropTypes from 'prop-types';
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
  border: 5px solid ${({ theme }) => theme.twitter};
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
  right: 25px;
  top: 50%;
  transform: translateY(-50%);
`;

const Card = ({ cardType }) => (
  <StyledWrapper>
    <InnerWrapper cardType={cardType}>
      <StyleHeading>Hello Igor</StyleHeading>
      <DateInfo>3 days ago</DateInfo>
      {cardType === 'twitter' && (
        <StyledAvatar src="https://api.adorable.io/avatars/86/abott@adorable.png" />
      )}
      {cardType === 'article' && <StyledLinkButton href="/" />}
    </InnerWrapper>
    <InnerWrapper flex>
      <Paragraph>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum porro, ut eum labore
        incidunt soluta maxime! Quidem distinctio, aut, beatae laudantium officiis nulla
        repellendus, quos sit deserunt quas ullam quibusdam?
      </Paragraph>
      <Button secendary>Remove</Button>
    </InnerWrapper>
  </StyledWrapper>
);

Card.propTypes = {
  cardType: PropTypes.oneOf(['note', 'twitter', 'article']),
};
Card.defaultProps = {
  cardType: 'note',
};

export default Card;
