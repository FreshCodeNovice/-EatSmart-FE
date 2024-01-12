import styled from 'styled-components';
import React, { useContext } from 'react';
import { TabIdContext } from './TabContext';

const StyledFunnel = styled.div<{ active: boolean }>`
  display: ${({ active }) => (active ? 'block' : 'none')};
`;

const TabFunnel = ({
  children,
  id,
}: {
  children: React.ReactNode;
  id: string;
}) => {
  const tabIdContent = useContext(TabIdContext);
  const isActive = tabIdContent?.tabId === id;

  return <StyledFunnel active={isActive}>{children}</StyledFunnel>;
};
export default TabFunnel;
