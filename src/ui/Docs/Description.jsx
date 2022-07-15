import React from 'react';
import styled from 'styled-components';
import {Link, GreenLink} from '../common/Link';
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
        <Text>Contribute to this endpoint on <Link href="https://github.com/rhinofi/api-documentation">Github</Link></Text>
        <TutorialsLink href="/articles#LibrariesandExamples">Related articles</TutorialsLink>
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
  color: #6BCACE;
  border: 1px solid #6BCACE;
  border-radius: 4px;
`;

const LinkWrapper = styled.div`
  margin-bottom: 24px;
`;
