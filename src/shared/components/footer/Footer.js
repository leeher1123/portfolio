import styled from 'styled-components';
import { HiOutlineMail } from 'react-icons/hi';

const Footer = () => (
  <Container>
    <List>
      <ListItem>
        <Bar />
        <p>
          Developed by
          <br />
          Jimin
        </p>
      </ListItem>
      <ListItem>
        <Bar />
        <p>
          Designed by
          <br />
          Jimin
        </p>
      </ListItem>
      <Icon>
        <Bar />
        <HiOutlineMail />
        <span>leeher1123@naver.com</span>
      </Icon>
    </List>
  </Container>
);

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 150px;
  background: #202020;
  border-top: 1px solid rgba(255, 255, 255, 0.27);
  color: rgba(255, 255, 255, 0.62);
  font-size: 12px;
`;

const List = styled.div`
  display: flex;
`;

const Bar = styled.div`
  display: flex;
  width: 2px;
  height: 10px;
  background: #fff;
  margin: 0 40px;
`;

const ListItem = styled.div`
  display: flex;
  align-items: center;
  list-style: none;
`;

const Icon = styled.div`
  display: flex;
  align-items: center;
  span {
    margin-left: 5px;
  }
`;

export default Footer;
