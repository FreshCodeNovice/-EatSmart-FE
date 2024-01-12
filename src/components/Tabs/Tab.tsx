import styled from 'styled-components';
import React, { useContext } from 'react';
import { TabIdContext } from './TabContext';

type TabProps = {
  id: string;
  tabTitle: string;
};

const StyledTabButton = styled.button<{ active: boolean }>`
  border: none;
  width: 12.28125rem;
  height: 1.92825rem;
  border-radius: 0.9375rem 0.9375rem 0rem 0rem;
  background: ${(props) => (props.active ? '#6AA7EF' : '#f5f5f5')};
  color: ${(props) => (props.active ? 'white' : '#6AA7EF')};
`;

const TabContent = styled.div`
  border: 1px solid #6aa7ef;
  border-radius: 0.9375rem;
  padding: 1rem;
  margin-top: 1rem;
  z-index: 1;
`;

const Tab = ({ id, tabTitle }: TabProps) => {
  const tabIdContent = useContext(TabIdContext);

  const handleClick = () => {
    tabIdContent?.setTabId(id);
  };

  const isActive = tabIdContent?.tabId === id;
  return (
    <div
      style={{
        display: 'inline',
      }}
    >
      <span
        style={{
          cursor: 'pointer',
        }}
      >
        <StyledTabButton active={isActive} onClick={handleClick}>
          {tabTitle}
        </StyledTabButton>
      </span>
    </div>
  );
};

export default Tab;
