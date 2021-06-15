import React from 'react';
import {TutorialSection} from './TutorialSection';
import {Text} from '../../common/Text';
import {SubTitle} from '../../common/SubTitle';
import {SubSection} from '../../common/SubSection';
import {PrismCode} from '../../Docs/PrismCode';
import styled from 'styled-components';

export const InternalTransfers = () => (
  <>
    <TutorialSection title="Internal Transfers">
      <Text>
        Internal transfers allow transfering amounts of your deversifi token balance to other users on the platform.
      </Text>
    </TutorialSection>
    <SubSection id="Transfer" className="section">
      <SubTitle>Transfer</SubTitle>
      <Text>Following example shows how to make an internal transfer using deversifi client library:</Text>
      <CodeWrapper>
        <PrismCode
          language="js"
          code={`
const HDWalletProvider = require('truffle-hdwallet-provider')
const Web3 = require('web3')
const DVF = require('dvf-client-js');

async function transfer () {
  const providerUrl = '// Infura or similar provider url //';

  const ethPrivKey = '// Your private key //';

  const starkPrivateKey = '// Your stark private key //';
  const token = 'ETH';
  const recipientEthAddress = '0x0000000000000000000000000000000000000001'
  const amount = '0.005'

  const provider = new HDWalletProvider(ethPrivKey, providerUrl);
  const web3 = new Web3(provider);

  const dvfConfig = {
    api: 'https://api.deversifi.com',
    wallet: {
      type: 'tradingKey',
      meta: {
        starkPrivateKey
      }
    }
  }

  dvf = await DVF(web3, dvfConfig);

  await dvf.transfer({ recipientEthAddress, token, amount })
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
