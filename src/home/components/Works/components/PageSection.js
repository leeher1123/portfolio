import React from 'react';
import styled from 'styled-components';

import ImageList from './ImageList';

const PageSection = ({
  title, img, description, list,
}) => (
  <Container>
    <h2>{title}</h2>
    <img src={img} alt="페이지 전체 이미지" />
    <Desc>
      <p>{description}</p>
    </Desc>
    <ImageList data={list} />
  </Container>
);

const Container = styled.div`
  background: rgba(40, 40, 40, 0.55);
  padding: 100px 120px 100px 200px;
  border-top-left-radius: 60px;
  border-bottom-left-radius: 60px;
  border: 1px solid rgba(255, 255, 255, 0.1);

  img {
    width: 820px;
    object-fit: cover;
    margin-bottom: 20px;
  }

  h2 {
    font-size: 20px;
    margin-bottom: 30px;
    font-weight: 600;
    border-bottom: 1px solid rgba(255, 255, 255, 0.73);
    line-height: 2.1;
  }
`;

const Desc = styled.div`
  margin: 10px 0;
  color: rgba(255, 255, 255, 0.7);
  p {
    white-space: pre-line;
    line-height: 1.8;
  }
`;

export default PageSection;
