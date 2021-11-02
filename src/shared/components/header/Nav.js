import styled from 'styled-components';
import Link from 'next/link';

import NavItem from './NavItem';

const Nav = () => {
  const menu = [
    {
      name: 'About me',
      to: 'profile',
    },
    {
      name: 'Skills',
      to: 'skills',
    },
    {
      name: 'Works',
      to: 'works',
    },
  ];
  return (
    <Container>
      {
        menu.map((item) => <NavItem item={item} />)
      }
      <Link href="https://github.com/leeher1123">
        <a>Github</a>
      </Link>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  a {
    display: flex;
    align-items: center;
    color: #fff;
    height: 70px;
    padding: 0 15px;
    margin: 0 10px;
    cursor: pointer;
    &:hover {
      color: rgba(255, 255, 255, 0.5);
    }
  }
`;

export default Nav;
