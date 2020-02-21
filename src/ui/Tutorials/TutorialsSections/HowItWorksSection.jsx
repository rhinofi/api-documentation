import React from 'react';
import {TutorialSection} from './TutorialSection';
import {Text} from '../../common/Text';
import {List, ListItem} from '../../common/List';

export const HowItWorksSection = () => (
  <TutorialSection title="How DeversiFi Works">
    <Text>DeversiFi is a high speed non-custodial trading platform that allows users to trade various digital asset pairs. DeversiFi is an orderbook exchange:</Text>
    <List>
      <ListItem>Buyer and sellers place their trades on the orderbook (i.e. sell 2ETH at 250USDt per ETH)</ListItem>
      <ListItem>When 2 opposing orders match - a trade is executed.</ListItem>
      <ListItem>All funds that have been used to place orders on DeversiFi are locked in a smart contract, which guarantees execution. So all orders on the DeversiFi orderbook are available to take if matched. This means that a user can be certain that their order will be executed at the indicated price.</ListItem>
    </List>
  </TutorialSection>
);
