import React, {useState} from 'react';
import {loadSpec} from '../../spec';
import {Sidebar} from '../common/Sidebar';
import {Breadcrumbs} from '../common/Breadcrumbs';
import {Endpoint} from './Endpoint';
import {DocsSearch} from './DocsSearch';
import {useLayout} from '../common/Layout/LayoutProvider';
import {Screen} from '../common/Screen';
import {SidebarLinks} from './SidebarLinks';
import {Content, Header, Main} from '../common/Layout/Layout';
import {TutorialsLink} from './TutorialsLink';

export const DocsScreen = () => {
  const [spec] = useState(loadSpec);

  const {sidebarLayout} = useLayout();
  const [isSidebarExpanded] = sidebarLayout;

  return (
    <Screen>
      <Sidebar footerLink={<TutorialsLink/>}>
        <SidebarLinks list={spec?.sidebar ?? []}/>
      </Sidebar>
      <Content isSidebarExpanded={isSidebarExpanded}>
        <Header isSidebarExpanded={isSidebarExpanded}>
          <Breadcrumbs currentPage="Docs"/>
          <DocsSearch spec={spec}/>
        </Header>
        <Main className="docs">
          <div>
            {spec && spec.endpoints.map((endpoint, index) =>
              <Endpoint key={index} endpoint={endpoint}/>
            )}
            {!spec && <div>Loading</div>}
          </div>
        </Main>
      </Content>
    </Screen>
  );
};
