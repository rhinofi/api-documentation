import React from 'react';
import styled from 'styled-components';

export const Input = styled.input`
  width: 100%;
  height: 40px;
  padding: 0 16px;
  background-color: #FF9A6F;
  border: 1px solid #FFFFFF;
  border-radius: 4px;
  font-size: 14px;
  line-height: 140%;
  color: #FFFFFF;

  &::-webkit-input-placeholder {
    color: #FFFFFF;
    font-size: 14px;
  }
  &::-moz-placeholder {
    color: #FFFFFF;
    font-size: 14px;
  }
  &:-ms-input-placeholder {
    color: #FFFFFF;
    font-size: 14px;
  }
  &:-moz-placeholder {
    color: #FFFFFF;
    font-size: 14px;
  }
`;
