import React from 'react';
import Tab from './';
import styled from 'styled-components';
import TabContext from './TabContext';
import TabFunnel from './TabFunnel';

const StyledTabFunnel = styled.div``;

const TabGroup = () => {
  return (
    <TabContext>
      <div>
        <Tab id="tab1" tabTitle="Tab 1" />
        <Tab id="tab2" tabTitle="Tab 2" />
        <Tab id="tab3" tabTitle="Tab 3" />
        <Tab id="tab4" tabTitle="Tab 4" />
      </div>

      <StyledTabFunnel>
        <TabFunnel id="tab1">
          <div>첫번쨰 탭 내용</div>
        </TabFunnel>

        <TabFunnel id="tab2">
          <div>두번쨰 탭 내용</div>
        </TabFunnel>

        <TabFunnel id="tab3">
          <div>세번쨰 탭 내용</div>
        </TabFunnel>

        <TabFunnel id="tab4">
          <div>네번쨰 탭 내용</div>
        </TabFunnel>
      </StyledTabFunnel>
    </TabContext>
  );
};

export default TabGroup;
