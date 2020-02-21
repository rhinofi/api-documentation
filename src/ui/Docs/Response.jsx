import React from 'react';
import styled from 'styled-components';
import {TabsHeader, TabButton, TabsContent, Tabs} from '../common/Tabs';
import {PrismCode} from './PrismCode';

export const ResponseError = ({error}) => (
  <BodyView>{error.toString()}</BodyView>
);

export const Response = ({response}) => {
  const {status, statusText, body} = response;

  return (
    <ResponseView>
      <Tabs>
        <TabsHeader>
          <StyledTabButton isActive isSuccess={status === 200}>
            {status}{statusText ? `: ${statusText}` : ''}
          </StyledTabButton>
        </TabsHeader>
        <TabsContent>
          <PrismCode
            language="js"
            code={JSON.stringify(body, null, 2)}
          />
        </TabsContent>
      </Tabs>
    </ResponseView>
  );
};

const ResponseView = styled.div`
  margin: 30px 0;
`;

const BodyView = styled.div`
  white-space: pre;
`;

const StyledTabButton = styled(TabButton)`
  padding-left: 12px;
  outline: none;
  cursor: initial;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 4px;
    width: 4px;
    height: 4px;
    transform: translateY(-50%);
    background-color: ${({isSuccess}) => isSuccess ? '#7AF5BF' : '#F57A7A'};
    border-radius: 50%;
  }
`;
