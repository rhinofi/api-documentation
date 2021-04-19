import React from 'react';
import styled from 'styled-components';

export const Body = ({value, onChange}) => (
  <TextArea style={{whiteSpace: 'pre'}} value={value} onChange={e => onChange(e.currentTarget.value)}/>
);

const TextArea = styled.textarea`
  height: 200px;
  width: 100%;
  margin-top: 30px;
  margin-bottom: 30px;
  padding: 13px 16px;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), #212433;
  border: 1px solid #2E3141;
  border-radius: 4px;
  font-size: 14px;
  line-height: 140%;
  color: #FFFFFF;
  resize: none;
  font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
`;
