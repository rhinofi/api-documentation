import React from 'react';
import {Text} from '../../common/Text';
import {TutorialSection} from './TutorialSection';
import {PrismCode} from '../../Docs/PrismCode';
import styled from 'styled-components';
import {Code} from '../../common/Code';

export const USDTetherMarketsSection = () => (
  <TutorialSection title="USD Tether Markets">
    <Text>To provide traders with the best liquidity possible the XXX/USDT markets on DeversiFi build on the liquidity of XXX/USD markets from liquidity providers. However since there is often not a direct 1:1 rate between USD and USDT, a shift must be applied to the order books to reflect that.The configuration for DeversiFi returns a settleSpread parameter:</Text>
    <CodeWrapper>
      <PrismCode
        language="js"
        code={`
"USD": {
  "decimals":6,
  "wrapperAddress":"0x83e42e6d1ac009285376340ef64bac1c7d106c89",
  "tokenAddress":"0x0736d0c130b2ead47476cc262dbed90d7c4eeabd",
  "minOrderSize":10,
  "settleSpread": 0.02
}`
        }
      />
    </CodeWrapper>
    <Text>
      This <Code>settleSpread</Code> is indicative of the current USDT/USD exchange rate. When orders are placed on USDT markets, the settlement price in the signed order must be shifted by the settleSpread parameter before the order is accepted.
    </Text>
    <Text>
      For example, if placing a buy order on the ETH/USD(T) market at a price of 100 USD relative to the liquidity provider the order will be settled on DeversiFi at a price of 102 USDT. Equally a sell order at 100 USD would receive 102 USDT when settled on DeversiFi.
    </Text>
    <CodeWrapper>
      <PrismCode
        language="js"
        code={`
efx.submitOrder(symbol, amount, price)
// => settlementPrice = price * (1 + settleSpread)`
        }
      />
    </CodeWrapper>
    <Text>
      The <Code>settleSpread</Code> parameter is set dynamically as a 30 minute rolling mean of the USDT/USD market exchange rate. When placing orders using submitOrder or generating them with createOrder the shift is applied for you.
    </Text>
  </TutorialSection>
);

const CodeWrapper = styled.div`
  margin-top: 16px;
  padding: 20px 20px 0;
  background: #1e202e;
  border-radius: 4px;
`;
