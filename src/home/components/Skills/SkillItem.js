import React from 'react';
import styled from 'styled-components';

const SkillItem = ({ data }) => (
  <Container>
    {
      data.map((item) => <Images>{item}</Images>)
    }
  </Container>
);

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Images = styled.div`
  width: 60px;
  height: 60px;
  margin-right: 20px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
  }
`;

export default SkillItem;
