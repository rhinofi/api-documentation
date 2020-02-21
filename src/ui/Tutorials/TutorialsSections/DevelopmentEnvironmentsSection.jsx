import React from 'react';
import {Text} from '../../common/Text';
import {List, ListItem} from '../../common/List';
import {Code} from '../../common/Code';
import {TutorialSection} from './TutorialSection';

export const DevelopmentEnvironmentsSection = () => (
  <TutorialSection title="Development Environments">
    <Text>The live platform can be found on app.deversifi.com</Text>
    <Text>The base URL for requests is <Code>https://api.deversifi.com</Code></Text>
    <List>
      <ListItem>Trading base url: <Code>https://api.deversifi.com/v1/trading/</Code></ListItem>
      <ListItem>Public volume data base url: <Code>https://api.deversifi.com/v1/pub/</Code></ListItem>
      <ListItem>Price data base url: <Code>https://api.deversifi.com/bfx/v2/</Code></ListItem>
      <ListItem>Price data websocket base url: <Code>https://api.deversifi.com/bfx/ws/2/</Code></ListItem>
    </List>
    <Text>A staging environment which mirrors the live version can be found on app.deversifi.dev and is connected to the Ropsten testnet </Text>
    <Text>The base URL for requests is <Code>https://api.deversifi.dev</Code></Text>
    <List>
      <ListItem>Trading base url: <Code>https://api.deversifi.dev/v1/trading/</Code></ListItem>
      <ListItem>Public volume data base url: <Code>https://api.deversifi.dev/v1/pub/</Code></ListItem>
      <ListItem>Price data base url: <Code>https://api.deversifi.dev/bfx/v2/</Code></ListItem>
      <ListItem>Price data websocket base url: <Code>https://api.deversifi.dev/bfx/ws/2/</Code></ListItem>
    </List>
    <Text>A faucet for Ropsten ETH for testing purposes - <Code>https://faucet.ropsten.be/</Code></Text>
  </TutorialSection>
);
