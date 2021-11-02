import styled from 'styled-components';

import Visual from '../components/Visual';
import Profile from '../components/Profile/Profile';
import Skills from '../components/Skills/Skills';
import Works from '../components/Works/Works';

const HomeContainer = () => (
  <Container>
    <Visual />
    <Profile />
    <Skills />
    <Works />
  </Container>
);

const Container = styled.div`

`;

export default HomeContainer;
