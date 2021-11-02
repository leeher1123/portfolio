import React from 'react';
import styled from 'styled-components';

import PageSection from './PageSection';
import { appData } from '../../../../appData';
import { BlogImages } from './images';

const BlogSection = () => (
  <Container>
    <PageSection
      title="CRUD 를 구현한 Blog"
      img="https://firebasestorage.googleapis.com/v0/b/portfolio-87f6a.appspot.com/o/images%2Fworks_images%2Fblog.png?alt=media&token=90cf73b3-0267-4729-91d8-24f8941e4538"
      description={appData.works.blogDesc}
      list={BlogImages}
    />
  </Container>
);

const Container = styled.div`

`;

export default BlogSection;
