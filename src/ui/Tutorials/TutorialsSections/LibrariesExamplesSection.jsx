import React from 'react';
import styled from 'styled-components';
import {TutorialSection} from './TutorialSection';
import {Text} from '../../common/Text';
import {CodeInText} from '../../common/CodeInText';
import {GreenLink} from '../../common/Link';
import {List, ListItem} from '../../common/List';

export const LibrariesExamplesSection = () => (
  <TutorialSection title="Libraries and Examples">
    <Text>
      The rhino.fi API can be interacted with directly as described by the endpoint documentation and examples, or making use of our open-source client libraries. The <CodeInText>dvf-client-js</CodeInText> (Node.js) library simplifies the interaction with the exchange and helps you get started faster. The library itself and tutorial on how to use it can be found on the <GreenLink href="https://github.com/rhinofi/dvf-client-js">rhino.fi Github</GreenLink>
    </Text>
    <Text>
      The API cannot be used entirely standlone, as interaction is also required with the Ethereum blockchain to interface to the exchange. Ethereum interaction is required in-order for the on-ramping and off-ramping steps:
      <List>
        <ListItem>Registration</ListItem>
        <ListItem>Making a deposit</ListItem>
        <ListItem>Completing the final step of a withdrawal</ListItem>
      </List>
    </Text>
    <Text>
      A series of <GreenLink href="https://github.com/rhinofi/dvf-client-js/tree/master/examples">examples in javascript</GreenLink> make it easy to understand the blockchain steps required.
    </Text>
  </TutorialSection>
);
