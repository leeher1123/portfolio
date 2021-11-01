import styled from 'styled-components';
import { AiOutlineArrowUp } from 'react-icons/ai';
import { animateScroll as scroll } from 'react-scroll';
import cn from 'classnames';

import { useWindowScroll } from '../../hooks/useWindowScroll';

const BackTop = () => {
  const handleClick = () => {
    scroll.scrollToTop({
      duration: 500,
      smooth: true,
    });
  };

  const isActive = useWindowScroll(1000);

  return (
    <Container
      className={cn({ isActive })}
      onClick={handleClick}
    >
      <AiOutlineArrowUp />
    </Container>
  );
};

const Container = styled.div`
  position: fixed;
  right: 60px;
  bottom: 80px;
  background: #18f;
  color: #fff;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 26px;
  transform: translateY(200px);
  transition: .4s;
  &.isActive {
    transform: none;
  }
`;

export default BackTop;
