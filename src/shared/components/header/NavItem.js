import styled, { css } from 'styled-components';
import {
  Link,
} from 'react-scroll';

import { media } from '../../../lib/styled';

const NavItem = ({ item }) => (
  <Container>
    <Link
      activeClass="isActive"
      to={item.to}
      spy
      smooth
      offset={-70}
      duration={500}
      ignoreCancelEvents={false}
      spyThrottle={500}
    >
      {item.name}
    </Link>
  </Container>
);

const Container = styled.div`
  a {
    display: flex;
    align-items: center;
    height: 70px;
    padding: 0 15px;
    margin: 0 10px;
    color: #fff;
    cursor: pointer;
    &:hover {
      color: rgba(255, 255, 255, 0.5);
    }
  }
  ${media.sm(css`
    display: none;
  `)}
`;

export default NavItem;
