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
        <LinkButton
          onClick={() => props.history.push('/articles')}
          image={tutorials}
          alt="articles"
          text="Articles"
        />
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
          The rhino.fi API allows automated high-speed trading of cryptocurrencies and tokens, including Ethereum and Bitcoin, using funds held in a secure personal wallet or smart-contract.
        </Text>

        <Text>
          The endpoints which have been made available allow access to submit, cancel and query placed orders onto the rhino.fi order book, whilst maintaining full control and custody of funds and authenticating only using cryptographic signatures in place of API keys. Using this API you will be able to:
          <List>
            <ListItem>Create and integrate trading into your own application</ListItem>
            <ListItem>Design and run advanced trading algorithms</ListItem>
            <ListItem>Monitor price data and rhino.fi trading volumes</ListItem>
            <ListItem>Take advantage of DeFi arbitrage opportunties whilst keeping secure control of your funds in a personal Ethereum wallet.</ListItem>
          </List>
        </Text>
        <Text>
          The rhino.fi APIs can be interacted with directly as described by the endpoint documentation section, or making use of our open-source client libraries. The <CodeInText>dvf-client-js</CodeInText> (Node.js) library simplifies the interaction with the exchange and helps you get started faster. The library itself and tutorial on how to use it can be found on the <GreenLink href="https://github.com/rhinofi/dvf-client-js">rhino.fi Github</GreenLink>
        </Text>
        <Text>
          This documentation set is actively maintained and updated. If you would like to suggest any changes or find there is something missing, please <GreenLink href="https://github.com/rhinofi/api-documentation/issues">create an issue on Github</GreenLink>.
        </Text>
        <br/><br/>
        <Title>URLs</Title>
        <Text>The base URL for requests is <CodeInText>https://api.rhino.fi</CodeInText></Text>
        <List>
          <ListItem>Trading base url: <CodeInText>https://api.rhino.fi/v1/trading/</CodeInText></ListItem>
          <ListItem>Public volume data base url: <CodeInText>https://api.rhino.fi/v1/pub/</CodeInText></ListItem>
          <ListItem>Price data base url: <CodeInText>https://api.rhino.fi/market-data/</CodeInText></ListItem>
          <ListItem>Price data websocket proxy base url: <CodeInText>wss://api.rhino.fi/market-data/ws/</CodeInText></ListItem>
        </List>
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
