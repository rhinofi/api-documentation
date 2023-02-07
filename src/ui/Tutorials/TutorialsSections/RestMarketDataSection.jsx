import React from 'react';
import {TutorialSection} from './TutorialSection';
import {Text} from '../../common/Text';
import {GreenLink} from '../../common/Link';
import {SubTitle} from '../../common/SubTitle';
import {List, ListItem} from '../../common/List';
import {SubSection} from '../../common/SubSection';
import {PrismCode} from '../../Docs/PrismCode';
import {CodeInText} from '../../common/CodeInText';
import {Bold} from '../../common/Bold';
import styled from 'styled-components';

export const RestMarketDataSection = () => (
  <>
    <TutorialSection title="Rest API Market Data">
      <Text>
        Available symbols for trading are available in in the client config file under: DVF.exchangeSymbols.
      </Text>
    </TutorialSection>
    <SubSection id="Rest API Market Data" className="section">
      <SubTitle>rhino.fi Client Config</SubTitle>
      <Text>For retrieving the client config via rhino.fi public API please see: </Text>
        <Text><GreenLink href="https://github.com/rhinofi/@rhino.fi/client-js/tree/master/examples">https://github.com/rhinofi/@rhino.fi/client-js/tree/master/examples</GreenLink></Text>
<Text>or</Text>
<Text></Text>
<Text><GreenLink href="https://docs.rhino.fi/docs#postV1TradingRGetuserconf">Get user conf endpoint</GreenLink></Text>

<Text>For retrieving the client config when using @rhino.fi/client-js library please see examples in @rhino.fi/client-js: <GreenLink href="https://github.com/rhinofi/@rhino.fi/client-js">https://github.com/rhinofi/@rhino.fi/client-js</GreenLink>

</Text><br></br>
      <SubTitle>Available trading pair symbols</SubTitle>
      <Text>client config has DVF.exchangeSymbols property which has an array or trading pair symbols:</Text>
      <CodeWrapper>
      <PrismCode
          language="js"
          code={`
          "exchangeSymbols": [
              "ETH:USDT",
              "ZRX:USDT",
              "ZRX:ETH",
              "BTC:USDT",
              "ETH:BTC",
              "DUSK:USDT"
         ]
`}
        />
      </CodeWrapper>
      <br></br>
      <Text>
        Rest APIs and examples are available here:</Text>
        <List>
          <ListItem>
            <Text>Tickers: <GreenLink href="https://docs.rhino.fi/docs#getDvfTickers">https://docs.rhino.fi/docs#getDvfTickers</GreenLink></Text>
          </ListItem>
          <ListItem>
            <Text>Candles: <GreenLink href="https://docs.rhino.fi/docs#getDvfCandles">https://docs.rhino.fi/docs#getDvfCandles</GreenLink></Text>
          </ListItem>
          <ListItem>
            <Text>Orderbook: <GreenLink href="https://docs.rhino.fi/docs#getDvfBook">https://docs.rhino.fi/docs#getDvfBook</GreenLink></Text>
          </ListItem>
        </List>
    </SubSection>
  </>
);

const CodeWrapper = styled.div`
  margin-top: 16px;
  padding: 20px 20px 0;
  background: #1e202e;
  border-radius: 4px;
`;
