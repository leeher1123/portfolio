import React from 'react';
import styled, { css } from 'styled-components';

import SkillItem from './SkillItem';
import { media } from '../../../lib/styled';

const SkillList = ({ title, data }) => (
  <Container>
    <h2>{title}</h2>
    <SkillItem data={data} />
  </Container>
);

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: 40px 0 20px;
  h2 {
    margin-right: 40px;
    color: #fff;
    font-size: 20px;
    font-weight: bold;
    padding-left: 40px;
    white-space: nowrap;
  }
  ${media.sm(css`
    flex-direction: column;
  `)}
`;

export default SkillList;
