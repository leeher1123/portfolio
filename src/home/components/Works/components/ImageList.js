import React from 'react';
import styled from 'styled-components';

const ImageList = ({ data }) => (
  <Container>
    <p>*반응형으로 구현된 사진을 첨부합니다</p>
    <ImageSlice>
      {
        data.map((item) => item)
      }
    </ImageSlice>
  </Container>
);

const Container = styled.div`
  max-width: 820px;
  p {
    font-size: 12px;
    margin: 30px 0;
    color: rgba(255, 255, 255, 0.6);
  }
`;

const ImageSlice = styled.div`
  display: flex;
  overflow: auto;
  scroll-behavior: smooth;
  -ms-overflow-style: none;
  scrollbar-width: none;
  ::-webkit-scrollbar {
    display: none;
  }
  img {
    max-width: 270px;
    height: 400px;
    object-fit: cover;
    margin-right: 5px;
  }
`;

export default ImageList;
