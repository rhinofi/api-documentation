import React from 'react';
import {TutorialSection} from './TutorialSection';
import {Text} from '../../common/Text';
import {SubTitle} from '../../common/SubTitle';
import {SubSection} from '../../common/SubSection';
import {PrismCode} from '../../Docs/PrismCode';
import {Code} from '../../common/Code';
import styled from 'styled-components';

export const TradingClient = () => (
  <>
    <TutorialSection title="Trading Client">
      <Text>
        We can use dvf-client to make our own trading client, which makes it easy to place buy or sell orders.
      </Text>
    </TutorialSection>
    <SubSection id="Trading" className="section">
      <SubTitle>Trading</SubTitle>
      <Text>Using the rhino.fi client library we can connect to our account and make trades using key credentials:</Text>
      <CodeWrapper>
        <PrismCode
          language="js"
          code={`
const HDWalletProvider = require('truffle-hdwallet-provider')
const Web3 = require('web3')
const DVF = require('dvf-client-js');

async function client () {
  const providerUrl = '// Infura or similar provider url //';
  const ethPrivKey = '// Your private key //';
  const starkPrivateKey = '// Your stark private key //';

  const provider = new HDWalletProvider(ethPrivKey, providerUrl);
  const web3 = new Web3(provider);

  const price = 200
  const amount = '0.05'

  // order buy params
  const buy = {
    symbol: "ETH:USDT",
    amount,
    price,
    starkPrivateKey
  }

  // order sell params
  const sell = {
    symbol: "ETH:USDT",
    amount: \`-\${amount}\`,
    price,
    starkPrivateKey
  }

  const dvfConfig = {
    api: 'https://api.rhino.fi',
    wallet: {
      type: 'tradingKey',
      meta: {
        starkPrivateKey
      }
    }
  }

  dvf = await DVF(web3, dvfConfig);

  // Buy order placing
  const rBuyOrder = await dvf.submitOrder(buy)
  console.info('buy order receipt', JSON.stringify(rBuyOrder))

  // Sell order placing
  const rSellOrder = await dvf.submitOrder(sell)
  console.info('sell order receipt', JSON.stringify(rSellOrder))
}
          `}
        />
      </CodeWrapper>
      <Text>If you decide you want to cancel the order no matter buy or sell, use the returned reference <Code>rBuyOrder</Code> or <Code>rSellOrder</Code> to cancel it:</Text>
      <CodeWrapper>
      <PrismCode
          language="js"
          code={`
// Order canceling
const rBuyOrder = await dvf.submitOrder(buy)
await dvf.cancelOrder({ orderId: rBuyOrder._id })
          `}
          />
      </CodeWrapper>
    </SubSection>
  </>
);

const CodeWrapper = styled.div`
  margin-top: 16px;
  padding: 20px 20px 0;
  background: #1e202e;
  border-radius: 4px;
`;
