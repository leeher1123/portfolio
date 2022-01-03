import React from 'react';
import styled, { css } from 'styled-components';

import SectionTitle from '../../../shared/title/SectionTitle';
import { appData } from '../../../appData';
import UnsplashSection from './components/UnsplashSection';
import YoutubeSection from './components/YoutubeSection';
import BlogSection from './components/BlogSection';
import { media } from '../../../lib/styled';

const Works = () => (
  <Container name="works">
    <SectionTitle title={appData.works.menu} />
    <WorkSection>
      <UnsplashSection />
    </WorkSection>
    <WorkSection>
      <YoutubeSection />
    </WorkSection>
    <WorkSection>
      <BlogSection />
    </WorkSection>
  </Container>
);

const Container = styled.div`
  background-color: #373737;
  border-top: 1px solid #7C7C7C;
  color: #fff;
`;

const WorkSection = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 40px 0 40px;
  ${media.sm(css`
    display: block;
  `)}
`;

export default Works;
