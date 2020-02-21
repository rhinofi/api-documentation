import React from 'react';
import styled from 'styled-components';
import {SectionTitle} from '../common/SectionTitle';
import {Tabs, TabsHeader, TabsContent, TabButton} from '../common/Tabs';
import {PrismCode} from './PrismCode';
import {CopyButton} from '../common/Buttons/CopyButton';
import {useActiveTab} from '../ActiveTab';
import {FullScreenButton} from '../common/Buttons/FullScreenButton';
import {useLayout} from '../common/Layout/LayoutProvider';

export const ExampleCall = ({calls}) => {
  const {activeTab, setActiveTab} = useActiveTab();
  const {contentLayout} = useLayout();
  const [isContentFullWidth, setIsContentFullWidth] = contentLayout;

  return (
    <ExampleCallSection>
      <SectionTitle>Example call</SectionTitle>
      <Tabs>
        <TabsHeader>
          {calls.map(({name}, index) => (
            <TabButton
              key={index}
              isActive={index === activeTab}
              onClick={() => setActiveTab(index)}
            >
              {name}
            </TabButton>
          ))}
        </TabsHeader>
        <StyledTabsContent>
          {calls.map(({name, content, language}, index) => {
            const style = {display: index !== activeTab ? 'none' : 'block'};
            return (
              <div key={index} style={style}>
                <PrismCode
                  key={name + index}
                  language={language}
                  code={content}
                />
                <TabContentButtons>
                  <CopyButton content={content}/>
                  <FullScreenButton onClick={() => setIsContentFullWidth(!isContentFullWidth)}/>
                </TabContentButtons>
              </div>
            );
          })}
        </StyledTabsContent>
      </Tabs>
    </ExampleCallSection>
  );
};

const ExampleCallSection = styled.div`
  margin-bottom: 32px;
`;

const StyledTabsContent = styled(TabsContent)`
  padding-bottom: 56px;
`;

const TabContentButtons = styled.div`
  position: absolute;
  bottom: 8px;
  right: 8px;
  display: flex;
  justify-content: flex-end;
`;
