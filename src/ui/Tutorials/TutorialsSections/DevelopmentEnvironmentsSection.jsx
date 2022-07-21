import React from 'react';
import {Text} from '../../common/Text';
import {List, ListItem} from '../../common/List';
import {Code} from '../../common/Code';
import {TutorialSection} from './TutorialSection';

export const DevelopmentEnvironmentsSection = () => (
  <TutorialSection title="Development Environments">
    <Text>The live platform can be found on app.rhino.fi</Text>
    <Text>The base URL for requests is <Code>https://api.rhino.fi</Code></Text>
    <List>
      <ListItem>Trading base url: <Code>https://api.rhino.fi/v1/trading/</Code></ListItem>
      <ListItem>Price data base url: <Code>https://api.rhino.fi/market-data/</Code></ListItem>
      <ListItem>Price data websocket base url: <Code>wss://api.deversifi.com/rhino.fi/ws/</Code></ListItem>
    </List>
    <Text>A staging environment which mirrors the live version can be found on app.stg.rhino.fi and is connected to the Goerli testnet </Text>
    <Text>The base URL for requests is <Code>https://api.stg.rhino.fi</Code></Text>
    <List>
      <ListItem>Trading base url: <Code>https://api.stg.rhino.fi/v1/trading/</Code></ListItem>
      <ListItem>Price data base url: <Code>https://api.stg.rhino.fi/market-data/</Code></ListItem>
      <ListItem>Price data websocket base url: <Code>wss://api.stg.rhino.fi/market-data/ws/</Code></ListItem>
    </List>
    <Text>A faucet for Goerli ETH for testing purposes - <Code>https://goerlifaucet.com/</Code></Text>
  </TutorialSection>
);
