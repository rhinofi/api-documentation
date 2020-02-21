import styled from 'styled-components';
import angleIcon from '../../assets/icons/angle.svg';
import {Link} from 'react-router-dom';

export const SidebarFooterLink = styled(Link)`
  position: relative;
  display: block;
  padding: 25px 30px 25px 60px;
  font-weight: bold;
  font-size: 15px;
  line-height: 144%;
  color: #FFFFFF;
  text-decoration: none;
  background: #36394B;
  border-radius: 4px;
  cursor: pointer;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 16px;
    width: 35px;
    height: 39px;
    transform: translateY(-50%);
  }

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    right: 16px;
    width: 20px;
    height: 10px;
    transform: translateY(-50%);
    background: url(${angleIcon}) center no-repeat;
    background-size: contain;
  }
`;
