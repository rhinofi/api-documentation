import React from 'react';
import {Category, CategoryName, SidebarLink} from '../common/Sidebar';
import {useScroll} from '../hooks/useScroll';

export const SidebarLinks = ({list}) => {
  const [currentSection, setCurrentSection] = useScroll();

  return (
    list.map(category => {
      const {name, items} = category;

      return (
        <Category key={name}>
          <CategoryName key={name}>{name}</CategoryName>
          <ul>
            {items.map(item => (
              <li key={item.name}>
                <SidebarLink
                  href={item.link}
                  isActive={currentSection === item.name}
                  onClick={() => setCurrentSection(item.name)}
                >
                  {item.title}
                </SidebarLink>
              </li>
            ))}
          </ul>
        </Category>
      );
    })
  );
};
