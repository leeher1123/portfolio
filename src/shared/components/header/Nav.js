import styled from 'styled-components';

import NavItem from './NavItem';

const Nav = () => {
  const menu = [
    {
      name: 'About me',
      to: 'profile',
    },
    {
      name: 'skills',
      to: 'skills',
    },
    {
      name: 'works',
      to: 'works',
    },
    {
      name: 'contact',
      to: 'contact',
    },
  ];
  return (
    <Container>
      {
        menu.map((item) => <NavItem item={item} />)
      }
    </Container>
  );
};

const Container = styled.div`
  display: flex;
`;

export default Nav;
