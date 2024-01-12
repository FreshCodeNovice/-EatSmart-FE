import { useState, createContext, useMemo } from 'react';

type TabContextType = {
  tabId: string | null;
  setTabId: React.Dispatch<React.SetStateAction<string | null>>;
};

export const TabIdContext = createContext<TabContextType | null>(null);

const TabContext = ({ children }: { children: React.ReactNode }) => {
  const [tabId, setTabId] = useState<null | string>(null);

  const value = useMemo(
    () => ({
      tabId,
      setTabId,
    }),
    [tabId]
  );

  return (
    <TabIdContext.Provider value={value}>{children}</TabIdContext.Provider>
  );
};

export default TabContext;
