import React from 'react';
import {TutorialSection} from './TutorialSection';
import {Text} from '../../common/Text';
import {SubTitle} from '../../common/SubTitle';
import {SubSection} from '../../common/SubSection';
import {PrismCode} from '../../Docs/PrismCode';
import {Code} from '../../common/Code';
import {Bold} from '../../common/Bold';
import styled from 'styled-components';

export const RebalancingFunds = () => (
  <>
    <TutorialSection title="Rebalancing funds">
      <Text>
        It is possible to easily track your balance using rhino.fi client.
      </Text>
    </TutorialSection>
    <SubSection id="RebalancingFunds" className="section">
      <SubTitle>Balance/Deposit/Withdrawals</SubTitle>
      <Text>The client api exposes convenient deposit/withdraw tracking functionality. <Code>getBalance</Code> Alaways returns latest balance data, but
      you can use <Code>getDeposits</Code> to see all deposit history and <Code>getWithdrawals</Code> to see all <Bold>pending</Bold> withdrawals. </Text>
      <CodeWrapper>
        <PrismCode
          language="js"
          code={`
const HDWalletProvider = require('truffle-hdwallet-provider')
const Web3 = require('web3')
const RhinofiClientFactory = require('@rhino.fi/client-js');

async function balance () {
  const providerUrl = '// Infura or similar provider url //';
  const ethPrivKey = '// Your private key //';
  const starkPrivateKey = '// Your stark private key //';

  const provider = new HDWalletProvider(ethPrivKey, providerUrl);
  const web3 = new Web3(provider);

  const rhinofiConfig = {
    api: 'https://api.rhino.fi',
    wallet: {
      type: 'tradingKey',
      meta: {
        starkPrivateKey
      }
    }
  }
  const rhinofi = await RhinofiClientFactory(web3, rhinofiConfig);

  // balance
  const balances = await rhinofi.getBalance()
  console.info('balances', balances)

  // deposits
  const deposits = await rhinofi.getDeposits()
  console.info('deposits', deposits)

  // withdrawals
  const withdrawls = await rhinofi.getWithdrawals()
  console.info('withdrawls', withdrawls)
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
