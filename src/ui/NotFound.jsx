import React from 'react';
import styled from 'styled-components';

export function NotFound() {
  return (
    <Header>Page Not Found</Header>
  );
}

const Header = styled.h1`
  padding-top: 2em;
  text-align: center;
  font-size: 3em;
  font-weight: bold;
`;
