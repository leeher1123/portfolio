import styled from 'styled-components';

import Visual from '../components/Visual';
import Profile from '../components/Profile/Profile';
import Skills from '../components/Skills/Skills';
import Works from '../components/Works/Works';
import Footer from '../../shared/components/footer/Footer';

const HomeContainer = () => (
  <Container>
    <Visual />
    <Profile />
    <Skills />
    <Works />
    <Footer />
  </Container>
);

const Container = styled.div`
  width: 1440px;
`;

export default HomeContainer;
