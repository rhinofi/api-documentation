import React, {useRef} from 'react';
import styled from 'styled-components';
import {ButtonBase} from './Button';
import copyIcon from '../../../assets/icons/copy.svg';

export const CopyButton = ({content}) => {
  const ref = useRef(null);

  const copy = () => {
    if (ref.current) {
      ref.current.select();
      document.execCommand('copy');
    }
  };

  return (
    <>
      <HiddenTextArea ref={ref} defaultValue={content}/>
      <StyledCopyButton onClick={copy}>Copy to clipboard</StyledCopyButton>
    </>
  );
};

export const StyledCopyButton = styled.button`
  ${ButtonBase};
  position: relative;
  height: 32px;
  padding: 0 8px 0 28px;
  background-image: url(${copyIcon});
  background-repeat: no-repeat;
  background-position: 8px center;
  font-size: 12px;
  line-height: 16px;
`;

const HiddenTextArea = styled.textarea`
  opacity: 0;
  position: absolute;
  z-index: -1;
  width: 0;
  height: 0;
`;
