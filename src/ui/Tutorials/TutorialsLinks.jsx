import React, {useEffect, useState} from 'react';
import {SidebarLink} from '../common/Sidebar';
import {useScroll} from '../hooks/useScroll';
import styled from 'styled-components';

function getElement() {
  const sections = document.querySelectorAll('.section');

  const {scrollY} = window;
  for (const section of sections) {
    if (scrollY + 100 >= section.offsetTop && scrollY < section.offsetTop + section.offsetHeight - 100) {
      return section;
    }
  }
}

export const TutorialsLinks = () => {
  const [currentSection, setCurrentSection] = useState(location.hash.substring(1));

  useEffect(() => {
    onScroll();
    function onScroll() {
      const element = getElement();
      setCurrentSection(element.id);
      history.replaceState('', '', '#' + element.id);
    }

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <ul>
      <TutorialsLink
        currentSection={currentSection}
        setCurrentSection={setCurrentSection}
        text="How DeversiFi Works"
      />
      <TutorialsLink
        currentSection={currentSection}
        setCurrentSection={setCurrentSection}
        text="Libraries and Examples"
      />
      <TutorialsLink
        currentSection={currentSection}
        setCurrentSection={setCurrentSection}
        text="Smart Contracts"
      >
        <SubList>
          <TutorialsLink
            currentSection={currentSection}
            setCurrentSection={setCurrentSection}
            text="Mainnet Contracts"
          />
          <TutorialsLink
            currentSection={currentSection}
            setCurrentSection={setCurrentSection}
            text="Ropsten Contracts"
          />
        </SubList>
      </TutorialsLink>
      <TutorialsLink
        currentSection={currentSection}
        setCurrentSection={setCurrentSection}
        text="Development Environments"
      />
      <TutorialsLink
        currentSection={currentSection}
        setCurrentSection={setCurrentSection}
        text="StarkWare Settlement Layer"
      >
        <SubList>
          <TutorialsLink
            currentSection={currentSection}
            setCurrentSection={setCurrentSection}
            text="Overview"
          />
          <TutorialsLink
            currentSection={currentSection}
            setCurrentSection={setCurrentSection}
            text="Signatures"
          />
          <TutorialsLink
            currentSection={currentSection}
            setCurrentSection={setCurrentSection}
            text="Token Accounts"
          />
        </SubList>
      </TutorialsLink>
      <TutorialsLink
        currentSection={currentSection}
        setCurrentSection={setCurrentSection}
        text="USDTetherMarkets"
      />
    </ul>
  );
};

const TutorialsLink = ({text, children, currentSection, setCurrentSection}) => {
  const id = text.split(' ').join('');

  return (
    <li>
      <SidebarLink
        href={`#${id}`}
        isActive={currentSection === id}
        onClick={() => setCurrentSection(id)}
      >
        {text}
      </SidebarLink>
      {children}
    </li>
  );
};

const SubList = styled.ul`
  padding-left: 10px;
`;
