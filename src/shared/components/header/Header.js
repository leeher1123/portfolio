import styled from 'styled-components';

import Nav from './Nav';

const Header = () => (
  <Container>
    <Logo>Min</Logo>
    <Nav />
  </Container>
);

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
  background: rgba(0, 0, 0, 0.3);
`;

const Logo = styled.div`
  font-size: 20px;
  font-weight: bold;
  color: #fff;
`;

export default Header;
