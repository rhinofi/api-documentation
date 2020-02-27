import React from 'react';
import styled from 'styled-components';
import logo from '../../assets/logo.svg';
import docs from '../../assets/docs.svg';
import tutorials from '../../assets/tutorials.svg';
import angleIcon from '../../assets/icons/angle-bright.svg';
import github from '../../assets/github.svg';
import {Link, GreenLink} from '../common/Link';
import {Code} from '../common/Code';
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
        <a target="blank" href="https://github.com/">
          <BigButton>
            <img src={github} alt="github"/>
            <LinkButtonText>Github</LinkButtonText>
            <ExploreText>Explore</ExploreText>
          </BigButton>
        </a>
      </Buttons>
      <Context>
        <Title>Introduction - DeversiFi</Title>
        <Text>
          The DeversiFi API allows trading of cryptocurrency tokens from any Ethereum wallet or smart-contract.
        </Text>
     
        <Text>
          The available endpoints allow access to submit, cancel and query placed orders onto the DeversiFi order book, whilst keeping full custody of funds and authenticating only using an Ethereum account. By using this API anyone is able to create and integrate their own interfaces, or run trading algorithms whilst keeping secure control of their funds in a personal Ethereum wallet.
        </Text>
        <Text>
          The DeversiFi APIs can be interacted with directly as described by the endpoint documentation below or via a client library. The dvf-client-js library simplifies the interaction with the exchange and helps you get started quicker. The library itself and tutorial on how to use it can be found on the DeversiFi Github:  <CodeInText>https://github.com/DeversiFi</CodeInText>
        </Text>
        <Text>
          This documentation set is actively maintained and updated. If you would like to suggest any changes or find there is something missing, please reach out to us via email - <GreenLink href="#">feedback@deversifi.com</GreenLink> - or leave a suggestion as a comment.
        </Text>
        <Text>The base URL for requests is <CodeInText>https://api.deversifi.com</CodeInText></Text>
        <List>
          <ListItem>Trading base url: <CodeInText>https://api.deversifi.com/v1/trading/</CodeInText></ListItem>
          <ListItem>Public volume data base url: <CodeInText>https://api.deversifi.com/v1/pub/</CodeInText></ListItem>
          <ListItem>Price data base url: <CodeInText>https://api.deversifi.com/bfx/v2/</CodeInText></ListItem>
          <ListItem>Price data websocket proxy base url: <CodeInText>https://api.deversifi.com/bfx/ws/2/</CodeInText></ListItem>
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
  background-color: #4E505C;
  border: none;
  color: #fff;
  font-size: 16px;
  border-radius: 4px;

  font-family: Lato;
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
  color: #7AF5BF;

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
  font-family: Lato;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 120%;
  color: #fff;
`;

const Text = styled.p`
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 150%;
  margin-top: 16px;
`;

const Note = styled.p`
  font-family: Lato;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 140%;
  color: #C8C9DA;
  margin-top: 8px;
`;

const CodeInText = styled(Code)`
  margin-left: 8px;
`;
