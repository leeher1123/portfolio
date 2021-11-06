import React from 'react';
import styled from 'styled-components';

import { UnsplashImages } from './images';
import PageSection from './PageSection';
import { appData } from '../../../../appData';

const UnsplashSection = () => (
  <Container>
    <PageSection
      title="Unsplash 클론코딩"
      to={appData.links.unsplashLink}
      img="https://firebasestorage.googleapis.com/v0/b/portfolio-87f6a.appspot.com/o/images%2Fworks_images%2Funsplash.png?alt=media&token=f60cbbe7-2a01-4698-b9cb-846a78de399c"
      description={appData.works.unsplashDesc}
      list={UnsplashImages}
    />
  </Container>
);

const Container = styled.div`
  
`;

export default UnsplashSection;
