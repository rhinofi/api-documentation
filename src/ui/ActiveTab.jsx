import React, {createContext, useState, useContext, useEffect} from 'react';


export const ActiveTabContext = createContext();

export function ActiveTab({children}) {
  const [activeTab, setActiveTab] = useState(getStoredActiveTab);

  useEffect(() => {
    setStoredActiveTab(activeTab);
  }, [activeTab]);

  return (
    <ActiveTabContext.Provider value={{activeTab, setActiveTab}}>
      {children}
    </ActiveTabContext.Provider>
  );
}

export function useActiveTab() {
  return useContext(ActiveTabContext);
}

function setStoredActiveTab(value) {
  return localStorage.setItem('activeTab', JSON.stringify(value));
}

function getStoredActiveTab() {
  return JSON.parse(localStorage.getItem('activeTab') || '0');
}
