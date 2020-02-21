import React from 'react';
import {Section} from '../../common/Section';
import {Title} from '../../common/Title';
import styled from 'styled-components';

export const TutorialSection = ({title, children}) => (
  <StyledSection id={title.split(' ').join('')} className="section">
    <Title>{title}</Title>
    {children}
  </StyledSection>
);

export const StyledSection = styled(Section)`
  padding-left: 24px;
  padding-right: 24px;
  padding-bottom: 40px;

  &:not(:first-child) {
    padding-top: 70px;
  }
`;
