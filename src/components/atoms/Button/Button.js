import styled, { css } from 'styled-components';

const Button = styled.button`
  border: none;
  width: 220px;
  height: 47px;
  background-color: ${({ theme, pageType }) => theme[pageType]};
  border-radius: 50px;
  font-weight: ${({ theme }) => theme.bold};
  font-size: 16px;
  text-transform: uppercase;

  ${({ secendary }) =>
    secendary &&
    css`
      background-color: hsl(0, 0%, 90%);
      width: 105px;
      height: 30px;
      font-size: 10px;
    `}
`;

export default Button;
