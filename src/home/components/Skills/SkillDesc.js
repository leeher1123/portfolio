import React from 'react';
import styled, { css } from 'styled-components';

import { media } from '../../../lib/styled';

const SkillDesc = ({ title, description }) => (
  <Container>
    <h2>{title}</h2>
    <p>{description}</p>
  </Container>
);

const Container = styled.div`
  padding: 20px 40px;
  margin-left: 35px;
  margin-bottom: 20px;
  h2 {
    color: #fff;
    margin-bottom: 15px;
    font-size: 16px;
  }
  p {
    white-space: pre-line;
    color: rgba(255, 255, 255, 0.64);
    line-height: 2.1;
  }
  ${media.sm(css`
    padding: 0 12px;
    margin: 0;
  `)}
`;

export default SkillDesc;
