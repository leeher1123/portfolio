import React from 'react';
import styled from 'styled-components';

const SkillDesc = ({ title, description }) => (
  <Container>
    <h2>{title}</h2>
    <p>{description}</p>
  </Container>
);

const Container = styled.div`
  padding: 20px 40px;
  margin-left: 35px;
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
`;

export default SkillDesc;
