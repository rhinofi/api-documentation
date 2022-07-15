import React from 'react';
import {SectionTitle} from '../common/SectionTitle';
import styled from 'styled-components';
import {Type} from '../common/Type';

export const Details = ({type, details}) => {

  const renderDetails = (details) => {
    const reqResDetails = [];

    for (const property in details) {
      reqResDetails.push(
        <Info
          className="response-details"
          key={property}
          title={property}
          type={details[property].type}
          description={details[property].description}
        >
          {details[property].properties ? renderDetails(details[property].properties) : null}
        </Info>
      );
    }

    return reqResDetails;
  };

  return (
    <DetailsView>
      <SectionTitle>{type === 'req' ? 'Request' : 'Response'} details</SectionTitle>
      {renderDetails(details)}
    </DetailsView>
  );
};

const Info = ({title, description, type, children, className}) => (
  <InfoView className={className}>
    <Row>
      <Title>{title}</Title>
      <Type>{type}</Type>
    </Row>
    <Text>{description}</Text>
    {children}
  </InfoView>
);

const DetailsView = styled.div`
  .response-details .response-details {
    margin-top: 24px;
    padding-left: 24px;
  }
`;


const InfoView = styled.div`
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
  color: #F05558;
`;

const Text = styled.p`
  margin-top: 3px;
  font-size: 12px;
  line-height: 140%;
  color: black;
`;
