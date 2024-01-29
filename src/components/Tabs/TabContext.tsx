import { useState, createContext, useMemo } from 'react';

type TabContextType = {
  tabId: string | null;
  setTabId: React.Dispatch<React.SetStateAction<string | null>>;
};

export const TabIdContext = createContext<TabContextType | null>(null);

const TabContext = ({
  children,
  initalValue,
}: {
  children: React.ReactNode;
  initalValue: string;
}) => {
  const [tabId, setTabId] = useState<null | string>(initalValue ?? null);

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
