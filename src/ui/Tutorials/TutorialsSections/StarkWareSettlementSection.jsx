import React from 'react';
import {TutorialSection} from './TutorialSection';
import {Text} from '../../common/Text';
import {GreenLink} from '../../common/Link';
import {SubTitle} from '../../common/SubTitle';
import {List, ListItem} from '../../common/List';
import {SubSection} from '../../common/SubSection';
import styled from 'styled-components';

export const StarkWareSettlementSection = () => (
  <>
    <TutorialSection title="StarkWare Settlement Layer">
      <Text>In order to provide our users with a no-compromise self-custodial trading experience, DeversiFi has pioneered the adoption of a Layer 2 scaling solution. This  allows instant settlements and high transaction throughput capacity. The Layer 2 scaling for DeversiFi is provided by StarkWare.</Text>
    </TutorialSection>
    <SubSection id="Overview" className="section">
      <SubTitle>Overview</SubTitle>
      <Text>StarkWare uses succinct cryptographic proofs of knowledge (aka STARK proofs) to reduce the amortized gas consumption of each transaction. In high-level, the smart contract owns all trader funds deposited to the exchange, and a record of only the hash of all system account balances. The scalability engine batches many transactions together, verifies their validity (traders signatures, balances sufficiency, etc) and updates the balances hash on the smart contract accordingly. The smart contract enforces any such update to include a STARK proof of integrity, showing the exchange indeed knows of valid transactions changing the trader balances to the new state. The succinctness of the proofs implies that the gas required to verify each proof scales exponentially better compared to the number of transactions in each batch. This allows DeversiFi to handle high throughput, while maintaining both low fees and traders self-custody. Further details about StarkWare scalability engine can be found in <GreenLink>https://starkware.co/product/starkex.</GreenLink></Text>
    </SubSection>
    <SubSection id="Signatures" className="section">
      <SubTitle>Signatures</SubTitle>
      <Text>For maximal efficiency of the the smart contract, the trader orders signature uses a special ECDSA flavor, boosting the onchain STARK proof verification efficiency, allowing more trades with lower fees. More details on the orders signature format and code examples, can be found at <GreenLink>https://github.com/starkware-libs/starkex-resources/tree/master/crypto/starkware/crypto/signature</GreenLink></Text>
    </SubSection>
    <SubSection id="TokenAccounts" className="section">
      <SubTitle>Token accounts</SubTitle>
      <Text>Trader funds are kept off-chain in token accounts (aka vaults). Each token account can belong at any given time to at most one trader, and keep a record of a single asset type (aka token_id). Each token account has a unique id, which is a 31 bit integer. The Merkle root of all the token accounts is the hash maintained by the smart contract. DeversiFi allocates traders with valid token account ids, and those ids are part of every order that might move funds in or out of them, ensuring traders maintain maximal control over their assets.</Text>
      <Text>The only on-chain operations the trader is required to execute via API or the UI are:</Text>
      <StyledList>
        <StyledListItem>Trader registration: used to notify the smart contract of the traders STARK public-key, and link it to their Ethereum address. The STARK public-key is used by the proof system to identify asset owners, and this link allows traders to maintain custody when depositing or withdrawing assets from the exchange. (LINK TO REGISTRATION ENDPOINT)</StyledListItem>
        <StyledListItem>Deposit: Sending funds to the smart contract. The onchain deposit transaction records the deposit information onchain, without changing the balances hash. After the Deposit transaction, a proof would move the record off-chain, effectively clearing the onchain record and updating the hash accordingly. For maximal privacy the deposited record is first moved to a temporary token account, and only after it, DiversiFi transfers it to the traders permanent token account. This transfer requires the traders signature as well, resulting in two signatures for each deposit: ETH signature for deposit transaction and STARK signature for the transfer to the permanent token account. The trader can start trading as early as the time the onchain deposit transaction is mined. (LINK TO DEPOSIT ENDPOINT)</StyledListItem>
        <StyledListItem>Withdrawal: when a trader wants to withdraw an asset they first request DiversiFi (via the web UI or the API) to move the required asset record from the offchain area to the contract. This operation is done using a STARK proof, resulting in an update of the balances hash onchain and adding a record to the smart contract allowing the trader to withdraw the asset directly from the contract (using an Ethereum transaction). Symmetrically to the depositing funds, the record is first moved to a temporary token account before being passed explicitly to the contract. This transfer operation requires the traders signature as well. (LINK TO WITHDRAWAL ENDPOINT)</StyledListItem>
      </StyledList>
    </SubSection>
  </>
);


const StyledList = styled(List.withComponent('ol'))`
  list-style: decimal;
`;

const StyledListItem = styled(ListItem)`
  &:before {
    display: none;
  }
`;
