import React from 'react';
import angleIcon from '../../assets/icons/angle.svg';
import styled, {css} from 'styled-components';
import {Link} from 'react-router-dom';

export const Breadcrumbs = ({currentPage}) => (
  <BreadcrumbView>
    <BreadcrumbLink to="/">Home</BreadcrumbLink>
    <Angle src={angleIcon}/>
    <BreadcrumbText>{currentPage}</BreadcrumbText>
  </BreadcrumbView>
);

const BreadcrumbView = styled.div`
  display: flex;
  align-items: center;
`;

const BreadcrumbLinkStyles = css`
  font-size: 14px;
  line-height: 140%;
  color: #FF9A6F;
`;

const BreadcrumbLink = styled(Link)`
  ${BreadcrumbLinkStyles}
  text-decoration: none;
`;

const BreadcrumbText = styled.p`
  ${BreadcrumbLinkStyles}
`;

const Angle = styled.img`
  margin: 0 12px;
`;
