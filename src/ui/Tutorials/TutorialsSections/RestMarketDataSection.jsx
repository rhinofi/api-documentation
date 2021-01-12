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
        Deversifi currently places orders with Bitfinex and market data can be retrieved using Bitfinex public end points.
        Available symbols for trading are available in in the client config file under: DVF.exchangeSymbols
        <Bold> Currently market data APIs both websocket and REST are transitioning to a new implementation,
          thus endpoints are gradually switching to endpoint <CodeInText>/market-data/ws</CodeInText> which use different symbol format</Bold>
      </Text>
    </TutorialSection>
    <SubSection id="Rest API Market Data" className="section">
      <SubTitle>Deversifi Client Config</SubTitle>
      <Text>For retrieving the client config via Deversifi public API please see: </Text>
        <Text><GreenLink href="https://github.com/DeversiFi/dvf-client-js/tree/master/examples">https://github.com/DeversiFi/dvf-client-js/tree/master/examples</GreenLink></Text>
<Text>or</Text>
<Text></Text>
<Text><GreenLink href="https://docs.deversifi.com/docs#postV1TradingRGetuserconf">https://github.com/DeversiFi/dvf-client-js/tree/master/examples</GreenLink></Text>

<Text>For retrieving the client config when using dvf-client-js library please see examples in dvf-client-js: <GreenLink href="https://github.com/DeversiFi/dvf-client-js">https://github.com/DeversiFi/dvf-client-js</GreenLink>

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
      <SubTitle>Converting Symbol format between Bitfinex and Deversifi:</SubTitle>
      <Text>Trading symbols in exchangeSymbols are in Deversifi format. Deversifi symbol format is different than Bitfinex symbol format.
To make a call to Bitfinex API for Tickers, Candles and Orderbook symbols should be specified in Bitfinex format.
The exchange symbols in Deversifi config file use Deversifi format.
<GreenLink href="https://github.com/DeversiFi/dvf-client-js">https://github.com/DeversiFi/dvf-client-js</GreenLink>  can be used to convert between formats.
<br></br>
<Text>For example:</Text>
<br></br>To convert from Deversifi to Bitfinex format:</Text>

      <CodeWrapper>
      <PrismCode
          language="js"
          code={`    
const dvfToBfxSymbol = require('dvf-client-js/src/lib/dvf/dvfToBfxSymbol') 
          
// Convert Deversifi Symbol ETH:USDT to Bitfinex format
const bitfinexSymbol = dvfToBfxSymbol(‘ETH:USDT)

// this should return tETHUST
`}
    />
      </CodeWrapper>
      <Text>The converted symbols can be used to make a call to Bitfinex Rest API. The Bitfinex Symbol can be used with Bitfinex APIs to retrieve market data:</Text>
      <CodeWrapper>
      <PrismCode
          language="js"
          code={`    
          const request = require("request");

// set parameters
// multiple values possible, just comma-separate them 
// t=trading, f=funding

const symbols = "tETHUST”; 

// set url

const url = "https://api.deversifi.com/bfx/v2/tickers?symbols=" + symbols;

// execute request and print result

request(url, function(error, response, body) {
    console.log(JSON.parse(body));
});
`}
        />
      </CodeWrapper>
      <Text>
        Bitfinex Rest APIs and examples are available here:</Text>
        <List>
          <ListItem>
            <Text>Tickers: <GreenLink href="https://docs.deversifi.com/docs#getBfxV2Tickers">https://docs.deversifi.com/docs#getBfxV2Tickers</GreenLink></Text>
          </ListItem>
          <ListItem>
            <Text>Candles: <GreenLink href="https://docs.deversifi.com/docs#getBfxV2Candles">https://docs.deversifi.com/docs#getBfxV2Candles</GreenLink></Text>
          </ListItem>
          <ListItem>
            <Text>Orderbook: <GreenLink href="https://docs.deversifi.com/docs#getBfxV2Book">https://docs.deversifi.com/docs#getBfxV2Book</GreenLink></Text>
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
