import React from 'react';
import {Input} from '../common/Input';
import styled from 'styled-components';
import {Type} from '../common/Type';

export const Parameter = ({name, isRequired, type, description, placeholder, value, onChange}) => (
  <ParameterRow>
    <ParameterInfo>
      <Row>
        <ParameterName isRequired={isRequired}>{name}</ParameterName>
        <Type>{type}</Type>
      </Row>
      <Description>{description}</Description>
    </ParameterInfo>
    <StyledInput
      placeholder={placeholder}
      value={value || ''}
      onChange={e => onChange(e.currentTarget.value)}
    />
  </ParameterRow>
);

const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const ParameterRow = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 24px;
`;

const ParameterName = styled.p`
  position: relative;
  font-size: 14px;
  line-height: 16px;
  text-align: right;
  color: #FFFFFF;

  &::after {
    content: '*';
    display: ${({isRequired}) => isRequired ? 'block' : ''};
    position: absolute;
    top: -2px;
    right: -5px;
    color: #f57a7a
  }
`;

const Description = styled.p`
  margin-top: 3px;
  font-size: 12px;
  line-height: 140%;
  text-align: right;
  color: #A3A6C2;
`;

const ParameterInfo = styled.div`
  max-width: 50%;
  width: 100%;
  margin-right: 16px;
`;

const StyledInput = styled(Input)`
  max-width: 50%;
`;
