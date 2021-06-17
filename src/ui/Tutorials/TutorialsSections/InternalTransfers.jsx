import React from 'react';
import {TutorialSection} from './TutorialSection';
import {Text} from '../../common/Text';
import {SubTitle} from '../../common/SubTitle';
import {SubSection} from '../../common/SubSection';
import {PrismCode} from '../../Docs/PrismCode';
import {Code} from '../../common/Code';
import styled from 'styled-components';

export const InternalTransfers = () => (
  <>
    <TutorialSection title="Internal Transfers">
      <Text>
        Internal transfers allow transfering amounts of your deversifi token balance to other users of the protocol.
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
      <Text>To fetch transfer history we would query the <Code>/transfers</Code> endpoint using previously establish dvf with key credentials and your preferred http request package:</Text>
      <CodeWrapper>
        <PrismCode
          language="js"
          code={`
const fetch = require('node-fetch');

const makeEcRecoverHeader = data => {
  const bufferStarkAuthData = Buffer.from(JSON.stringify(data))
  return 'EcRecover ' + bufferStarkAuthData.toString('base64')
}

const { nonce, signature } = await dvf.sign.nonceSignature()

const authData = {
  signature,
  nonce
}

const authHeaders = makeEcRecoverHeader(authData)

const transfersUrl = 'https://api.deversifi.com/v1/trading/transfers';

const rTransfers = await fetch(transfersUrl, {
  method: "GET",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json",
    "Authorization": authHeaders
  },
});
console.info('transfer history', await rTransfers.json())
          `}
        />
      </CodeWrapper>
      <Text>To better reference each transfer it is possible to provide a memo property which will be attached to the transfer. It will also be reflected in
        transfer history response. It is added from 2.5.1v in dvf-client-js. Currently only available in the github repository. The code would be exactly similar
        to the first example, except adding one more property to the <Code>transfer</Code>:</Text>
      <CodeWrapper>
        <PrismCode
            language="js"
            code={`
const memo = 'Test transfer'
await dvf.transfer({ recipientEthAddress, token, amount, memo })

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
