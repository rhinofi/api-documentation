import React, {useState} from 'react';
import {SectionTitle} from '../common/SectionTitle';
import styled from 'styled-components';
import {Tabs, TabsHeader, TabButton, TabsContent} from '../common/Tabs';
import {PrismCode} from './PrismCode';

export const ResponseExample = ({responses}) => {
  const [activeTab, setActiveTab] = useState(responses[0].code);

  return (
    <ResponseExampleView>
      <SectionTitle>Example response</SectionTitle>
      <Tabs>
        <TabsHeader>
          {responses.map(({code}, index) => (
            <TabButton
              key={code + index}
              isActive={activeTab === code}
              onClick={() => setActiveTab(code)}
            >
              {code}
            </TabButton>
          ))}
        </TabsHeader>
        <TabsContent>
          {responses.map(({code, example}, index) =>
            <PrismCode
              isHidden={code !== activeTab}
              key={code + index}
              language="js"
              code={example}
            />
          )}
        </TabsContent>
      </Tabs>
    </ResponseExampleView>
  );
};

const ResponseExampleView = styled.div`
  margin: 0 0 32px;
`;
