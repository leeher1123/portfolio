import styled, { css } from 'styled-components';
import Link from 'next/link';
import { AiFillGithub } from 'react-icons/ai';

import NavItem from './NavItem';
import { media } from '../../../lib/styled';

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
      <Link href="https://www.notion.so/8d7fc554cdf6464ab1e97c77ae6b7ab1">
        <a>Notion</a>
      </Link>
      <GitLogo>
        <Link href="https://github.com/leeher1123">
          <a><AiFillGithub /></a>
        </Link>
      </GitLogo>
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
    ${media.sm(css`
    display: none;
  `)}
  }
`;

const GitLogo = styled.div`
  a {
    font-size: 40px;
    display: none;
    color: #fff;
    margin: 0;
    padding: 0;
    ${media.sm(css`
      display: flex;
      align-items: center;
  `)}
  }
`;

export default Nav;
