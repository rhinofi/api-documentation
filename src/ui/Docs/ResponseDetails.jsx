import React from 'react';
import {SectionTitle} from '../common/SectionTitle';
import styled from 'styled-components';
import {Type} from '../common/Type';

export const ResponseDetails = ({details}) => {

  const renderResponsesDetails = (details) => {
    const responseDetails = [];

    for (const property in details) {
      responseDetails.push(
        <ResponseInfo
          className="response-details"
          key={property}
          title={property}
          type={details[property].type}
          description={details[property].description}
        >
          {details[property].properties ? renderResponsesDetails(details[property].properties) : null}
        </ResponseInfo>
      );
    }

    return responseDetails;
  };

  return (
    <ResponseDetailsView>
      <SectionTitle>Response details</SectionTitle>
      {renderResponsesDetails(details)}
    </ResponseDetailsView>
  );
};

const ResponseInfo = ({title, description, type, children, className}) => (
  <ResponseInfoView className={className}>
    <Row>
      <Title>{title}</Title>
      <Type>{type}</Type>
    </Row>
    <Text>{description}</Text>
    {children}
  </ResponseInfoView>
);

const ResponseDetailsView = styled.div`
  .response-details .response-details {
    margin-top: 24px;
    padding-left: 24px;
  }
`;


const ResponseInfoView = styled.div`
  & + & {
    margin-top: 24px;
  }
`;

const Row = styled.div`
  display: flex;
  align-items: center;
`;

const Title = styled.p`
  font-size: 14px;
  line-height: 16px;
  color: #FFFFFF;
`;

const Text = styled.p`
  margin-top: 3px;
  font-size: 12px;
  line-height: 140%;
  color: #FFFFFF;
`;
