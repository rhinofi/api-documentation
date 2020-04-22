import React from 'react';
import styled from 'styled-components';
import {TutorialSection} from './TutorialSection';
import {Text} from '../../common/Text';
import {Code} from '../../common/Code';
import {GreenLink} from '../../common/Link';

const CodeInText = styled(Code)`
  margin-left: 8px;
`;

export const LibrariesExamplesSection = () => (
  <TutorialSection title="Libraries and Examples">
    <Text>
      The DeversiFi API can be interacted with directly as described by the endpoint documentation and examples, or making use of our open-source client libraries. The <CodeInText>dvf-client-js</CodeInText> (Node.js) library simplifies the interaction with the exchange and helps you get started faster. The library itself and tutorial on how to use it can be found on the <GreenLink href="https://github.com/DeversiFi/dvf-client-js">DeversiFi Github</GreenLink>
    </Text>
  </TutorialSection>
);
