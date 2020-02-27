import React from 'react';
import {TutorialSection} from './TutorialSection';
import {Text} from '../../common/Text';
import {List, ListItem} from '../../common/List';

export const HowItWorksSection = () => (
  <TutorialSection title="How DeversiFi Works">
    <Text>DeversiFi is a high speed non-custodial trading platform that allows users to trade various digital asset pairs. </Text>
    <List>
      <ListItem>Non-custodial: All assets deposited to DeversiFi are locked within one of the exchange wrapper contracts or the StarkEx contract itself (for more information about the StarkEx contract see the StarkWare Settlement Layer section). Once funds are locked, only trades, withdrawals and deposits a user signs with their private key can be executed. </ListItem>
      <ListItem>Exchange: DeversiFi is an orderbook exchange - all orders placed by users are available on the exchange order books. This allows for transparent price discovery and market depth. To provide its users with deep liquidity DeversiFi is connected to liquidity providers. </ListItem>
      <ListItem>Highj-speed: Since all funds are locked within one of the exchange’s smart contract trades can be matched instantly and settled on-chain later as there is a 100% guarantee that each user's funds are present. This allows DeversiFi to match orders placed by users instantly and balances are immediately available to trade again (for more information about settlement see the StarkWare Settlement Layer section).</ListItem>
    </List>
  </TutorialSection>
);
