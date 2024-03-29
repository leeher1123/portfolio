import styled, { css } from 'styled-components';

import { ContentContainer } from '../../../shared/components/layout/Layout.Styled';
import SectionTitle from '../../../shared/title/SectionTitle';
import { appData } from '../../../appData';
import { media } from '../../../lib/styled';

const Profile = () => (
  <Container name="profile">
    <SectionTitle title={appData.profile.menu} />
    <ContentContainer>
      <Contents>
        <Img>
          <img src="https://firebasestorage.googleapis.com/v0/b/portfolio-87f6a.appspot.com/o/images%2Fprofile_images%2Fprofile.png?alt=media&token=e46f5d28-bdbb-4259-9647-70cad49212ad" alt="내 사진" />
        </Img>
        <Desc>
          <h1>{appData.profile.title}</h1>
          <p>{appData.profile.description}</p>
        </Desc>
      </Contents>
    </ContentContainer>
  </Container>
);

const Container = styled.div`
  background-color: #252525;
  border-top: 1px solid rgba(255, 255, 255, 0.7);
  padding: 40px 0;
`;

const Contents = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px 12px;
  width: 100%;
  ${media.md(css`
    flex-direction: column;
  `)}
`;

const Img = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgb(209, 156, 162);
  border-radius: 50%;
  margin-right: 80px;
  img {
    width: 300px;
    height: 300px;
  }
  ${media.md(css`
    margin: 0 auto;
  `)}
`;

const Desc = styled.div`
  color: #fff;
  white-space: pre-line;
  line-height: 1.6;
  h1 {
    font-size: 56px;
    font-weight: bold;
    ${media.sm(css`
      text-align: center;
  `)}
  }
  p {
    font-size: 16px;
    font-weight: 400;
    color: rgba(255, 255, 255, 0.7);
  }
  ${media.sm(css`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 40px;
  `)}
`;

export default Profile;
