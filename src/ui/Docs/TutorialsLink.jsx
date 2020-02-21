import React from 'react';
import {SidebarFooterLink} from '../common/SidebarFooterLink';
import tutorialsIcon from '../../assets/tutorials.svg';
import styled from 'styled-components';

export const TutorialsLink = () => <StyledLink to="/articles">Articles</StyledLink>;

const StyledLink = styled(SidebarFooterLink)`
  &::before {
    background: url(${tutorialsIcon}) center no-repeat;
    background-size: contain;
  }
`;
