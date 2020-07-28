import React, {useState} from 'react';
import {SectionTitle} from '../common/SectionTitle';
import {ButtonFullWidth} from '../common/Buttons/Button';
import {Body} from './Body';
import {tryEndpoint} from '../../spec/tryEndpoint';
import {Parameter} from './Parameter';
import {ResponseError, Response} from './Response';
import styled from 'styled-components';
import {useLayout} from '../common/Layout/LayoutProvider';
import {PrismCode} from './PrismCode';

export const TryEndpoint = ({endpoint}) => {
  const [parameterValues, setParameterValues] = useState({});
  const [body, setBody] = useState(endpoint.body);
  const [response, setResponse] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);

  async function tryNow() {
    setResponse(undefined);
    setError(undefined);
    setLoading(true);
    const [error, response] = await tryEndpoint(endpoint, parameterValues, body);
    error && setError(error);
    response && setResponse(response);
    setLoading(false);
  }

  const {contentLayout} = useLayout();
  const [isContentFullWidth] = contentLayout;

  return (
    <Row isContentFullWidth={isContentFullWidth}>
      <Section isContentFullWidth={isContentFullWidth}>
        {endpoint.parameters && !!endpoint.parameters.length &&
          <>
            <SectionTitle>Query params</SectionTitle>
            {endpoint.parameters.map((parameter, index) => {
              const {name, required, description, type} = parameter;

              return (
                <Parameter
                  key={index}
                  name={name}
                  isRequired={required}
                  type={type}
                  value={parameterValues[name]}
                  onChange={value => setParameterValues(old => ({...old, [name]: value !== '' ? value : null}))}
                  description={description}
                  placeholder={parameter['x-example']}
                />
              );
            })}
          </>
        }
        {endpoint.body !== undefined && <Body value={body} onChange={setBody}/>}
        <ButtonFullWidth disabled={loading} onClick={tryNow}>{loading ? 'Loading' : 'Try now'}</ButtonFullWidth>
        {error && <ResponseError error={error}/>}
        {response && <Response response={response}/>}
      </Section>
      <div>
        <Title>cURL</Title>
        <Pre>
          <PrismCode
            language="bash"
            code={endpoint.curl}
          />
        </Pre>
      </div>
    </Row>
  );
};

const Section = styled.div`
  margin: ${({isContentFullWidth}) => isContentFullWidth ? '0 30px 0 0' : '0 0 24px'};
`;

const Title = styled.h3`
  margin-bottom: 8px;
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
  color: #FFFFFF;
`;

const Pre = styled.pre`
  padding: 16px;
  font-size: 13px;
  line-height: 16px;
  color: #FFFFFF;
  background: #1E202E;
  border-radius: 4px;
  overflow-x: auto;
`;

const Row = styled.div`
  display: flex;
  flex-direction: ${({isContentFullWidth}) => isContentFullWidth ? 'row' : 'column'};

  & > * {
    width: 100%;
  }
`;
