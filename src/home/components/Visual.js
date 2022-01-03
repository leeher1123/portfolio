import styled, { css } from 'styled-components';

import { appData } from '../../appData';
import { media } from '../../lib/styled';

const Visual = () => (
  <Container>
    <Content>
      <h1>{appData.visual.title}</h1>
      <p>{appData.visual.description}</p>
    </Content>
  </Container>
);

const Container = styled.div`
  height: 1000px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: url('https://images.unsplash.com/photo-1627232091268-20e5a37c9177?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2129&q=80') 100% no-repeat;
`;

const Content = styled.div`
  position: relative;
  width: 100%;
  margin-left: 100px;
  color: #fff;
  padding: 0 30px;
  line-height: 1.6;
  white-space: pre-line;
  h1 {
    font-size: 56px;
  }
  p {
    font-size: 21px;
    color: rgba(255, 255, 255, 0.8);
  }
  ${media.sm(css`
    margin: 0;
  `)}
`;

export default Visual;
