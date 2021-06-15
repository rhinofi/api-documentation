import React from 'react';
import {TutorialSection} from './TutorialSection';
import {Text} from '../../common/Text';
import {SubTitle} from '../../common/SubTitle';
import {SubSection} from '../../common/SubSection';
import {PrismCode} from '../../Docs/PrismCode';
import styled from 'styled-components';

export const TradingClient = () => (
  <>
    <TutorialSection title="Trading client">
      <Text>
        We can use dvf-client to make our own trading client, which makes buy/sells.
      </Text>
    </TutorialSection>
    <SubSection id="Trading" className="section">
      <SubTitle>Trading</SubTitle>
      <Text>Using deversifi client library we can connect to our account and make trades using it's credentials:</Text>
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
  
  // order
  const price = 200
  const amount = '0.05'
  const buy = {
    symbol: "ETH:USDT",
    amount,
    price,
    starkPrivateKey
  }

  const sell = {
    symbol: "ETH:USDT",
    amount: \`-\${amount}\`,
    price,
    starkPrivateKey
  }

  const dvfConfig = {
    api: 'https://api.deversifi.dev',
    wallet: {
      type: 'tradingKey',
      meta: {
        starkPrivateKey
      }
    }
  }

  dvf = await DVF(web3, dvfConfig);

  const rBuyOrder = await dvf.submitOrder(buy)
  console.info('buy order receipt', JSON.stringify(rBuyOrder))

  const rSellOrder = await dvf.submitOrder(sell)
  console.info('sell order receipt', JSON.stringify(rSellOrder))
}
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
