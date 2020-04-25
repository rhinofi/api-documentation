import React, {useRef, useEffect} from 'react';
import Prism from 'prismjs';
import styled from 'styled-components';


export function PrismCode({code, plugins, language, isHidden}) {
  const ref = useRef(null);
  useEffect(() => {
    if (ref.current) {
      Prism.highlightElement(ref.current);
    }
  });

  return (
    <Pre isHidden={isHidden} className={!plugins ? '' : plugins.join(' ')}>
      <Code ref={ref} className={`language-${language}`}>
        {code ? code.trim() : ''}
      </Code>
    </Pre>
  );
};

const Pre = styled.pre`
  && {
    display: ${({isHidden}) => isHidden ? 'none' : 'block'};
    background: none;
    padding: 0 0 20px;
    margin: 0;
  }
`;

const Code = styled.code`
  && {
    font-size: 13px;
    line-height: 16px;
  }
`;
