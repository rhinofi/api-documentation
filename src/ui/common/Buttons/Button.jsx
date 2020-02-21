import styled, {css} from 'styled-components';

export const ButtonBase = css`
  font-weight: bold;
  font-size: 15px;
  line-height: 144%;
  color: #7AF5BF;
  border-radius: 4px;
  background: #27353c;
  border: none;
  cursor: pointer;

  &:disabled {
    background: #A3A6C2;
    color: #FFFFFF;
  }
`;

export const ButtonFullWidth = styled.button`
  ${ButtonBase};
  height: 48px;
  width: 100%;
`;
