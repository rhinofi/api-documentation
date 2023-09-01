import React from 'react';
import styled from 'styled-components';
import logo from '../../assets/logo.svg';
import docs from '../../assets/docs.svg';
import tutorials from '../../assets/tutorials.svg';
import angleIcon from '../../assets/icons/angle-bright.svg';
import github from '../../assets/github.svg';
import {GreenLink} from '../common/Link';
import {CodeInText} from '../common/CodeInText';
import {List, ListItem} from '../common/List';

export const Intro = (props) => (
  <div>
    <SidebarHeader>
      <img src={logo} alt="logo"/>
    </SidebarHeader>
    <Main>
      <Buttons>
        <LinkButton
          onClick={() => props.history.push('/docs')}
          image={docs}
          alt="docs"
          text="Docs"
        />
        <a target="blank" href="https://tech.rhino.fi">
          <BigButton>
            <img src={tutorials} alt="articles"/>
            <LinkButtonText>Articles</LinkButtonText>
            <ExploreText>Explore</ExploreText>
          </BigButton>
        </a>
        <a target="blank" href="https://github.com/rhinofi">
          <BigButton>
            <img src={github} alt="github"/>
            <LinkButtonText>Github</LinkButtonText>
            <ExploreText>Explore</ExploreText>
          </BigButton>
        </a>
      </Buttons>
      <Context>
        <Title>Introduction to rhino.fi</Title>
        <Text>
          rhino.fi is a frictionless multi-chain DeFi aggregator that gives you access to all the best decentralised finance (DeFi) opportunities in one place securely and safely. It is self-custodial meaning you are always in control of your funds, and authenticating only using cryptographic signatures in place of API keys.
        </Text>

        <Text>
          If you are looking to learn more about the technology that drives the rhino.fi platform, including information on integration, you can access our <GreenLink href="https://tech.rhino.fi">technical guide</GreenLink>
        </Text>
        <Text>
          The rhino.fi APIs can be interacted with directly as described by the endpoint documentation section, or making use of our open-source client libraries. The <CodeInText>@rhino.fi/client-js</CodeInText> (Node.js) library simplifies the interaction with the exchange and helps you get started faster. The library itself and tutorial on how to use it can be found on the <GreenLink href="https://github.com/rhinofi/client-js">rhino.fi Github</GreenLink>
        </Text>
        <Text>
          If you are looking for support on how to use the various features of the platform, please refer to our <GreenLink href="https://support.rhino.fi">support knowledge base</GreenLink>.
        </Text>
        <br/><br/>
      </Context>
    </Main>
  </div>
);

const LinkButton = ({onClick, image, text, alt}) => (
  <BigButton onClick={onClick}>
    <img src={image} alt={alt}/>
    <LinkButtonText>{text}</LinkButtonText>
    <ExploreText>Explore</ExploreText>
  </BigButton>
);

const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 48px 0;
`;

const SidebarHeader = styled.div`
  display: flex;
  align-items: center;
  height: 59px;
  padding: 0 16px;
  border-bottom: 1px solid #2b2d3d;
`;

const BigButton = styled.button`
  display: flex;
  align-items: center;
  height: 104px;
  min-width: 270px;
  padding: 16px;
  background-color: #C5C5C5;
  border: none;
  color: #fff;
  font-size: 16px;
  border-radius: 4px;

  font-family: Lexend;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  cursor: pointer;
`;

const LinkButtonText = styled.p`
  margin-left: 15px;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  color: #FFFFFF;
`;

const ExploreText = styled.p`
  position: relative;
  padding-right: 18px;
  margin-left: auto;
  font-size: 14px;
  line-height: 150%;
  color: #F05558;

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    right: 0;
    width: 7px;
    height: 11px;
    transform: translateY(-50%);
    background: url(${angleIcon}) center no-repeat;
    background-size: contain;
  }
`;


const Main = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 0 15px;
`;

const Context = styled.div`
  max-width: 700px;
`;

const Title = styled.h1`
  font-family: Lexend;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 120%;
  color: black;
`;

const Text = styled.p`
  font-family: Lexend;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 150%;
  margin-top: 16px;
`;
