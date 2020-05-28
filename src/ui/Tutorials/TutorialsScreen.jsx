import React, {useState} from 'react';
import {Screen} from '../common/Screen';
import {Sidebar} from '../common/Sidebar';
import {useLayout} from '../common/Layout/LayoutProvider';
import {Content, Header, Main} from '../common/Layout/Layout';
import {Breadcrumbs} from '../common/Breadcrumbs';
import {TutorialsLinks} from './TutorialsLinks';
import {HowItWorksSection} from './TutorialsSections/HowItWorksSection';
import {LibrariesExamplesSection} from './TutorialsSections/LibrariesExamplesSection';
import {SmartContractsSection} from './TutorialsSections/SmartContractsSection';
import {DevelopmentEnvironmentsSection} from './TutorialsSections/DevelopmentEnvironmentsSection';
import {StarkWareSettlementSection} from './TutorialsSections/StarkWareSettlementSection';
import {USDTetherMarketsSection} from './TutorialsSections/USDTetherMarketsSection';
import {WebsocketMarketDataSection} from './TutorialsSections/WebsocketMarketDataSection';
import {DocsLink} from './DocsLink';
import {ArticlesSearch} from './ArticlesSearch';

export const TutorialsScreen = () => {
  const {sidebarLayout} = useLayout();
  const [isSidebarExpanded] = sidebarLayout;

  return (
    <Screen>
      <Sidebar footerLink={<DocsLink/>}>
        <TutorialsLinks/>
      </Sidebar>
      <Content isSidebarExpanded={isSidebarExpanded}>
        <Header isSidebarExpanded={isSidebarExpanded}>
          <Breadcrumbs currentPage="Articles"/>
          <ArticlesSearch/>
        </Header>
        <Main>
          <HowItWorksSection/>
          <LibrariesExamplesSection/>
          <SmartContractsSection/>
          <DevelopmentEnvironmentsSection/>
          <StarkWareSettlementSection/>
          <WebsocketMarketDataSection/>
          <USDTetherMarketsSection/>
        </Main>
      </Content>
    </Screen>
  );
};
