import Link from 'next/link';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  height: 5rem;
  display: flex;
  width: 500px;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  bottom: 0;
  border-top: 1px solid black;
  z-index: 9;
`;

const Footer = () => {
  return (
    <StyledFooter>
      <Link href="/">홈</Link>
      <Link href="/">대결</Link>
      <Link href="/">통계</Link>
      <Link href="/">기록</Link>
    </StyledFooter>
  );
};

export default Footer;
