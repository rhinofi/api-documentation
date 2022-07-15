import React from 'react';
import {TutorialSection} from './TutorialSection';
import {Text} from '../../common/Text';
import {SubTitle} from '../../common/SubTitle';
import {SubSection} from '../../common/SubSection';
import {PrismCode} from '../../Docs/PrismCode';
import styled from 'styled-components';

export const QueryingEndpoints = () => (
  <>
    <TutorialSection title="Querying Endpoints">
      <Text>
        Get information from rhino.fi API endpoints.
      </Text>
    </TutorialSection>
    <SubSection id="Public Endpoints" className="section">
      <SubTitle>Public endpoints</SubTitle>
      <Text>Following example shows how make a simple query to a public endpoint without authentication:</Text>
      <CodeWrapper>
        <PrismCode
          language="js"
          code={`
const fetch = require('node-fetch');

async function public () {
  const params = {
    year: "2021",
    month: "03",
    day: "01",
  };
  const url = \`https://api.rhino.fi/v1/trading/r/24HoursVolume/\${params.year}/\${params.month}/\${params.day}\`;

  const rTradingVolume = await fetch(url, {
    method: "GET",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
    },
  });
  console.info('trading volume history', await rTradingVolume.json())
}
          `}
        />
      </CodeWrapper>
    </SubSection>
    <SubSection id="Private Endpoints" className="section">
      <SubTitle>Private Endpoints</SubTitle>
      <Text>Using same rhino.fi client we can call authorized endpoints [example 1], same result can be achieved manually signing a signature POST [example 2]
        and for get GET we need an Authorization header [example 3]:</Text>
      <CodeWrapper>
        <PrismCode
          language="js"
          code={`
const HDWalletProvider = require('truffle-hdwallet-provider')
const Web3 = require('web3')
const DVF = require('dvf-client-js');
const fetch = require('node-fetch');

async function private () {
  // ---SETUP---
  const providerUrl = '// Infura or similar provider url //';
  const ethPrivKey = '// Your private key //';
  const starkPrivateKey = '// Your stark private key //';

  const provider = new HDWalletProvider(ethPrivKey, providerUrl);
  const web3 = new Web3(provider);

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

  // ---EXAMPLE 1 [DVF CLIENT]---
  const balances = await dvf.getBalance()
  console.info('balances', balances)

  // ---EXAMPLE 2 [POST]---
  const { nonce, signature } = await dvf.sign.nonceSignature()

  const body = {
    nonce: nonce.toString(),
    signature
  }

  const balanceUrl = 'https://api.rhino.fi/v1/trading/r/getBalance';

  const rBalance = await fetch(balanceUrl, {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
    },
  });
  console.info('balances', await rBalance.json())

  // ---EXAMPLE 3 [GET]---
  const { nonce, signature } = await dvf.sign.nonceSignature()

  const makeEcRecoverHeader = data => {
    const bufferStarkAuthData = Buffer.from(JSON.stringify(data))
    return 'EcRecover ' + bufferStarkAuthData.toString('base64')
  }

  const authHeaders = makeEcRecoverHeader({ nonce, signature })
  const user24HourVolumeUrl = 'https://api.rhino.fi/v1/trading/r/User24HoursVolume';

  const rUserVolume = await fetch(user24HourVolumeUrl, {
    method: "GET",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": authHeaders
    },
  });
  console.info('User 24 hour volume', await rUserVolume.json())
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
