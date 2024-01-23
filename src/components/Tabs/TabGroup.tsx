import React from 'react';
import Tab from './Tab';
import styled from 'styled-components';
import TabContext from './TabContext';
import TabFunnel from './TabFunnel';

const StyledTabFunnel = styled.div``;

export type tabGroup = {
  id: string;
  title: string;
  content?: React.ReactNode;
};

const TabGroup = ({ tabs }: { tabs: tabGroup[] }) => {
  return (
    <TabContext initalValue={tabs[0].id}>
      <div>
        {tabs.map((tab) => {
          return <Tab id={tab.id} tabTitle={tab.title} key={tab.id} />;
        })}
      </div>

      <StyledTabFunnel>
        {tabs.map((tab) => {
          return (
            <TabFunnel id={tab.id} key={tab.id}>
              {tab.content}
            </TabFunnel>
          );
        })}
      </StyledTabFunnel>
    </TabContext>
  );
};

export default TabGroup;
