import React from 'react';
import styled from 'styled-components';
import {Link} from '../common/Link';
import {Text} from '../common/Text';
import {Code} from '../common/Code';
import {Title} from '../common/Title';

export const Description = ({method, title, link, description}) => (
  <DescriptionView>
    <Header>
      <HeaderRow>
        <Method>{method}</Method>
        <StyledTitle>{title}</StyledTitle>
      </HeaderRow>
      <HeaderRow>
        <Text>Contribute to this endpoint on <Link href="#">Github</Link></Text>
        <TutorialsLink href="#">Related articles</TutorialsLink>
      </HeaderRow>
    </Header>
    <LinkWrapper>
      <Code>{link}</Code>
    </LinkWrapper>
    <Text>{description}</Text>
  </DescriptionView>
);

const DescriptionView = styled.div`
  padding: 0 24px 16px;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 18px;
`;

const HeaderRow = styled.div`
  display: flex;
  align-items: center;

  & ${Text} {
    margin-top: 0;
  }
`;

const StyledTitle = styled(Title)`
  margin-left: 12px;
`;

const TutorialsLink = styled(Link)`
  margin-left: 24px;
`;


const Method = styled.p`
  display: inline-block;
  padding: 2.5px 4.5px;
  font-size: 10px;
  line-height: 16px;
  text-align: center;
  color: #7AF5BF;
  border: 1px solid #2a3941;
  border-radius: 4px;
`;

const LinkWrapper = styled.div`
  margin-bottom: 24px;
`;
