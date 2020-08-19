import styled, { css } from 'styled-components';
import { withContext } from 'hoc/withContext';

const Button = withContext(styled.button`
  border: none;
  width: 220px;
  height: 47px;
  background-color: ${({ theme, pageContext }) => theme[pageContext]};
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
`);

export default Button;
