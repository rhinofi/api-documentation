import React from 'react';
import {TutorialSection} from './TutorialSection';
import {Text} from '../../common/Text';
import {Bold} from '../../common/Bold';
import {CodeInText} from '../../common/CodeInText';
import {GreenLink} from '../../common/Link';
import {SubTitle} from '../../common/SubTitle';
import {SubSection} from '../../common/SubSection';
import {PrismCode} from '../../Docs/PrismCode';
import styled from 'styled-components';

export const WebsocketMarketDataSection = () => (
  <>
    <TutorialSection title="Websocket Market Data">
      <Text>
        When designing a trading system to use the DeversiFi APIs, the speed of your reaction to market data is essential.
        The fastest way to access market data when trading is to subscribe via websocket feeds.
        This is the same way that the DeversiFi UI shows and updates the order books.
      </Text>
    </TutorialSection>
    <SubSection id="Order Book" className="section">
      <SubTitle>Websocket Order Book</SubTitle>
      <Text>Subscription to the book for a particular trading symbol, such as MKR:ETH is simple, and can be done using the example code below:</Text>
      <CodeWrapper>
        <PrismCode
          language="js"
          code={`
            const ws = require('ws')
const w = new ws('wss://api.rhino.fi/market-data/ws')

w.on('message', (msg) => console.log(msg))

let msg = JSON.stringify({
  event: 'subscribe',
  channel: 'book',
  symbol: 'MKR:ETH'
})

w.on('open', () => w.send(msg))
`}
        />
      </CodeWrapper>
      <CodeWrapper>
      <PrismCode
        code={`
      To create and keep the order book updated on the client side:

      1. Subscribe to channel
      2. Receive the initial order book snapshot and create your in-memory book structure
      3. On all new updates, when count > 0 you should add to or update the price level
        3.1 If amount > 0 then add/update bids
        3.2 If amount < 0 then add/update asks
        3.3 When count = 0 then you have to delete the price level.
      4. On new updates a price level can also be removed
        4.1 If amount = 1 then remove from bids
        4.2 if amount = -1 then remove from asks
`}
/>
</CodeWrapper>

    </SubSection>
    <SubSection id="Trades" className="section">

    </SubSection>
  </>
);

const CodeWrapper = styled.div`
  margin-top: 16px;
  padding: 20px 20px 0;
  background: #1e202e;
  border-radius: 4px;
`;
