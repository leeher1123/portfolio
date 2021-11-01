import React from 'react';
import styled from 'styled-components';

import SkillItem from './SkillItem';

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
`;

export default SkillList;
