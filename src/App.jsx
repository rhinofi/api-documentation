import React from 'react';
import {ActiveTab} from './ui/ActiveTab';
import {DocsScreen} from './ui/Docs/DocsScreen';
import {Intro} from './ui/Docs/Intro';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {LayoutProvider} from './ui/common/Layout/LayoutProvider';
import {TutorialsScreen} from './ui/Tutorials/TutorialsScreen';
import {NotFound} from './ui/NotFound';

export const App = () => {
  return (
    <ActiveTab>
      <Router>
        <LayoutProvider>
          <Switch>
            <Route exact path="/docs" component={DocsScreen}/>
            <Route exact path="/" component={Intro}/>
            <Route path="*" component={NotFound}/>
          </Switch>
        </LayoutProvider>
      </Router>
    </ActiveTab>
  );
};
