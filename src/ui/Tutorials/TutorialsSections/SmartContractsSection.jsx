import React from 'react';
import {TutorialSection} from './TutorialSection';
import {Text} from '../../common/Text';
import {SubTitle} from '../../common/SubTitle';
import {SubSection} from '../../common/SubSection';
import {Link, GreenLink} from '../../common/Link';

export const SmartContractsSection = () => (
  <>
  <TutorialSection title="Smart Contracts">
  </TutorialSection>
  <SubSection id="MainnetContracts" className="section">
    <SubTitle>Mainnet Contracts</SubTitle>

    <Text>
      To be certain of using the most up to date information, you should optain the smart-contract addresses, as well as a list of other configuration parameters via the getConfig API endpoint.
    </Text>

    <Text>
      The StarkEx smart-contracts, where funds are held and settlements occur, are open-source and the deployed version can be reviewed on <GreenLink href="https://github.com/starkware-libs/starkex-contracts">Github</GreenLink>.
    </Text>

    <Text>
      Exchange Contract - 0x5d22045DAcEAB03B158031eCB7D9d06Fad24609b <br/>
    </Text>
  </SubSection>
  <SubSection id="RopstenContracts" className="section">
    <SubTitle>Ropsten Contracts</SubTitle>
    <Text>
      Exchange Contract - 0x5783323064dDa4A1ebe62defFeF46750BD2C560c <br/>
    </Text>
  </SubSection>
  </>
);
