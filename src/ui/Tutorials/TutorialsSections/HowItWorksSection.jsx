import React from 'react';
import {TutorialSection} from './TutorialSection';
import {Text} from '../../common/Text';
import {List, ListItem} from '../../common/List';

export const HowItWorksSection = () => (
  <TutorialSection title="How DeversiFi Works">
    <Text>DeversiFi is a high speed self-custodial trading platform that allows a trader to buy and sell various digital assets (cryptocurrencies).</Text>
    <List>
      <ListItem>Self-custodial: Unlike other cryptocurrency exchanges, where you send your assets to be controlled by the exchange while trading, all assets deposited to DeversiFi are held on the Ethereum blockchain, in a set of smart-contracts. These 'smart-contracts' are open-source code, and are audited and community reviewed. The code only allows the funds to be moved or withdrawn with your explicit permission. For more information about the main 'StarkEx' smart-contract see the StarkWare Settlement Layer section below. Once funds are deposited, only the trades, withdrawals and deposits a user signs with their private key can be executed. </ListItem>
      <ListItem>Exchange: DeversiFi is an orderbook exchange - all orders placed by users are available on the exchange order books, meaning that offers to buy or sell can be viewed by all. This allows for transparent price discovery and market depth. To provide its users with deep liquidity DeversiFi is connected to other external liquidity providers. </ListItem>
      <ListItem>High-speed: Since all funds are locked within one of the exchange’s smart-contracts, a trade that is placed can be matched instantly and settled on-chain later with a 100% guarantee that it will complete. This allows DeversiFi to match orders placed by users instantly and make balances immediately available to trade again (for more information about settlement see the StarkWare Settlement Layer section).</ListItem>
    </List>
  </TutorialSection>
);
