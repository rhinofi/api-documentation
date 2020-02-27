import React from 'react';
import {TutorialSection} from './TutorialSection';
import {Text} from '../../common/Text';
import {SubTitle} from '../../common/SubTitle';
import {SubSection} from '../../common/SubSection';

export const SmartContractsSection = () => (
  <>
  <TutorialSection title="Smart Contracts">
  </TutorialSection>
  <SubSection id="MainnetContracts" className="section">
    <SubTitle>Mainnet Contracts</SubTitle>
    
    <Text>
    Up to date information on the exchange contracts can be obtained via the Get Config endpoint: <CodeInText>https://api.deversifi.dev/v1/trading/r/getConf</CodeInText>
    </Text>
    
    <Text>
      ETH Deposit Contract - 0x00…. - Etherscan link  <br/>
      USDT Deposit Contract - 0x00…. - Etherscan link <br/>
      DAI Deposit Contract - 0x00…. - Etherscan link <br/>
      Exchange Contract - 0x00…. - Etherscan link <br/>
    </Text>
  </SubSection>
  <SubSection id="RopstenContracts" className="section">
    <SubTitle>Ropsten Contracts</SubTitle>
    <Text>
      ETH Deposit Contract - 0x00…. - Etherscan link  <br/>
      USDT Deposit Contract - 0x00…. - Etherscan link <br/>
      DAI Deposit Contract - 0x00…. - Etherscan link <br/>
      Exchange Contract - 0x00…. - Etherscan link <br/>
    </Text>
  </SubSection>
  </>
);
