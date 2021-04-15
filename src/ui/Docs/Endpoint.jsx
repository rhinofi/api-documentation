import React, {useEffect, useRef} from 'react';
import {Description} from './Description';
import styled from 'styled-components';
import {ResponseExample} from './ResponseExample';
import {ExampleCall} from './ExampleCall';
import {ResponseDetails} from './ResponseDetails';
import {TryEndpoint} from './TryEndpoint';
import {useLayout} from '../common/Layout/LayoutProvider';
import {Section} from '../common/Section';

export const Endpoint = ({endpoint}) => {
  const {method, title, name, path, description, responses, calls, responsesDetails} = endpoint;

  if (title === 'Submit Order') {
    console.log(endpoint)
  }

  const ref = useRef();
  useEffect(() => {
    if (location.hash.substring(1) === name && ref.current) {
      ref.current.scrollIntoView();
    }
  }, [name]);

  const {contentLayout} = useLayout();
  const [isContentFullWidth] = contentLayout;

  return (
    <Section className="section" id={name} ref={ref}>
      <Description
        method={method}
        title={title}
        link={path}
        description={description}
      />
      <Examples>
        <Row isContentFullWidth={isContentFullWidth}>
          <RowItem>
            <ExampleCall calls={calls}/>
            <TryEndpoint endpoint={endpoint} method={method}/>
          </RowItem>
          <RowItem>
            <ResponseExample responses={responses}/>
            <ResponseDetails details={responsesDetails}/>
          </RowItem>
        </Row>
      </Examples>
    </Section>
  );
};

const Examples = styled.div`
  padding: 24px 24px 40px;
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;

  & > * {
    display: flex;
    flex-direction: column;
    width: ${({isContentFullWidth}) => isContentFullWidth ? '100%' : '49%'};
  }

  & > *:nth-child(2n) {
    margin: ${({isContentFullWidth}) => isContentFullWidth ? '48px 0 0' : '0 0 0 2%'};
  }
`;

const RowItem = styled.div`
  
`;
