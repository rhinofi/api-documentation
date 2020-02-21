import React from 'react';
import styled from 'styled-components';

export const Input = styled.input`
  width: 100%;
  height: 40px;
  padding: 0 16px; 
  background-color: #1e202e;
  border: 1px solid #2E3141;
  border-radius: 4px;
  font-size: 14px;
  line-height: 140%;
  color: #FFFFFF;

  &::-webkit-input-placeholder {
    color: #6e7087;
    font-size: 14px;
  }
  &::-moz-placeholder {
    color: #6e7087;
    font-size: 14px;
  }
  &:-ms-input-placeholder {
    color: #6e7087;
    font-size: 14px;
  }
  &:-moz-placeholder {
    color: #6e7087;
    font-size: 14px;
  }
`;
