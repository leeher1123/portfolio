import styled from 'styled-components';

const SectionTitle = ({ title }) => (
  <Container>
    <h2>{title}</h2>
  </Container>
);

const Container = styled.div`
  padding: 20px;
  h2 {
    font-size: 52px;
    margin-top: 0;
    color: #fff;
    font-weight: 400;
    font-family: 'Special Elite', cursive;
  }
`;

export default SectionTitle;
