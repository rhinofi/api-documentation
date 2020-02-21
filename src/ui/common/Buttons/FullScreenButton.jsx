import styled from 'styled-components';
import arrowsIcon from '../../../assets/icons/fullscreen.svg';

export const FullScreenButton = styled.button`
  width: 32px;
  height: 32px;
  margin-left: 8px;
  background: #2E3141 url(${arrowsIcon}) center no-repeat;
  border-radius: 4px;
  border: none;
  cursor: pointer;
`;
