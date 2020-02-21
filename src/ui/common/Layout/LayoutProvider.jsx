import React, {useState, useContext} from 'react';

export const LayoutContext = React.createContext();

export const LayoutProvider = ({children}) => {
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(true);
  const [isContentFullWidth, setIsContentFullWidth] = useState(false);

  return (
    <LayoutContext.Provider value={{
      sidebarLayout: [isSidebarExpanded, setIsSidebarExpanded],
      contentLayout: [isContentFullWidth, setIsContentFullWidth]
    }}>
      {children}
    </LayoutContext.Provider>
  );
};

export function useLayout() {
  return useContext(LayoutContext);
};
