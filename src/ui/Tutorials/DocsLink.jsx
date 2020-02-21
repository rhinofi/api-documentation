import React from 'react';
import {SidebarFooterLink} from '../common/SidebarFooterLink';
import docsIcon from '../../assets/docs.svg';
import styled from 'styled-components';

export const DocsLink = () => <StyledLink to="/docs">Docs</StyledLink>;

const StyledLink = styled(SidebarFooterLink)`
  &::before {
    background: url(${docsIcon}) center no-repeat;
    background-size: contain;
  }
`;
