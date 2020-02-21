import React from 'react';
import {TutorialSection} from './TutorialSection';
import {Text} from '../../common/Text';
import {GreenLink} from '../../common/Link';

export const LibrariesExamplesSection = () => (
  <TutorialSection title="Libraries and Examples">
    <Text>
      The DeversiFi APIs can be interacted with directly as described by the endpoint documentation below or via a client library. The dvf-client-js library simplifies the interaction with the exchange and helps you get started quicker. The library itself and tutorial on how to use it can be found on:
      <GreenLink>https://github.com/ethfinex/dvf-client-js</GreenLink>
    </Text>
  </TutorialSection>
);
