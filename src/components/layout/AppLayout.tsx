import styled from "styled-components";

const AppLayout = (props: { children: React.ReactNode }) => {
  return (
    <Centering>
      <FixedWidth>{props.children}</FixedWidth>
    </Centering>
  );
};

export default AppLayout;

const Centering = styled.div`
  display: flex;
  justify-content: center;
`;

const FixedWidth = styled.div`
  width: 393px;
  height: 100vh;
`;
