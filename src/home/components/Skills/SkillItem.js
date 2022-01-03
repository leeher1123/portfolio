import React from 'react';
import styled, { css } from 'styled-components';

import { media } from '../../../lib/styled';

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
  ${media.sm(css`
    flex-wrap: wrap;
  `)}
`;

const Images = styled.div`
  width: 60px;
  height: 60px;
  margin: 10px 10px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
  }
`;

export default SkillItem;
