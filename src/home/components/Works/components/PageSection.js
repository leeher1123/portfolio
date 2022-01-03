import React from 'react';
import styled, { css } from 'styled-components';
import Link from 'next/link';
import { AiOutlineLink } from 'react-icons/ai';

import ImageList from './ImageList';
import { media } from '../../../../lib/styled';

const PageSection = ({
  title, to, img, description, list,
}) => (
  <Container>
    <Link href={to} passHref>
      <a>
        <h2>{title}</h2>
        <span><AiOutlineLink /></span>
      </a>
    </Link>
    <Screen>
      <img src={img} alt="페이지 전체 이미지" />
    </Screen>
    <Desc>
      <p>{description}</p>
    </Desc>
    <ImageList data={list} />
  </Container>
);

const Container = styled.div`
  background: rgba(40, 40, 40, 0.55);
  padding: 100px 120px 100px 200px;
  border-top-left-radius: 60px;
  border-bottom-left-radius: 60px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  a {
    display: flex;
    align-items: center;
    margin-bottom: 30px;
    cursor: pointer;
    h2 {
      font-size: 20px;
      font-weight: 600;
      border-bottom: 1px solid rgba(255, 255, 255, 0.73);
      line-height: 2.1;
    }
    span {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-left: 15px;
      font-size: 24px;
    }
    &:hover {
      color: rgba(255, 255, 255, 0.8);
    }
    ${media.sm(css`
      justify-content: center;
    `)}
  }
  ${media.sm(css`
    padding: 0;
    margin: 0 30px;
    border-radius: 0;
  `)}
`;

const Screen = styled.div`
  img {
    width: 100%;
    height: 100%;
    max-width: 820px;
    object-fit: cover;
    margin-bottom: 20px;
    ${media.sm(css`
      justify-content: center;
  `)}
  }
`;

const Desc = styled.div`
  margin: 10px 0;
  color: rgba(255, 255, 255, 0.7);
  p {
    white-space: pre-line;
    line-height: 1.8;
  }
  ${media.sm(css`
    padding: 0 12px;
  `)}
`;

export default PageSection;
