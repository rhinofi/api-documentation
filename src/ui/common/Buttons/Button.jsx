import styled, {css} from 'styled-components';

export const ButtonBase = css`
  font-weight: bold;
  font-size: 15px;
  line-height: 144%;
  color: #FFFFFF;
  border-radius: 4px;
  background: #6BCACE;
  border: none;
  cursor: pointer;

  &:disabled {
    background: #226467;
    color: #FFFFFF;
  }
`;

export const ButtonFullWidth = styled.button`
  ${ButtonBase};
  height: 48px;
  width: 100%;
`;
