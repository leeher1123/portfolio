import React from 'react';
import styled from 'styled-components';

import { YoutubeImages } from './images';
import { appData } from '../../../../appData';
import PageSection from './PageSection';

const YoutubeSection = () => (
  <Container>
    <PageSection
      title="Youtube 클론코딩"
      img="https://firebasestorage.googleapis.com/v0/b/portfolio-87f6a.appspot.com/o/images%2Fworks_images%2Fyoutube.png?alt=media&token=f47cb537-6656-452f-8c3b-21d56eb920e3"
      description={appData.works.youtubeDesc}
      list={YoutubeImages}
    />
  </Container>
);

const Container = styled.div`
  
`;

export default YoutubeSection;
