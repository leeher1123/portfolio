import React from 'react';
import styled, { css } from 'styled-components';

import { CommunicationImages, FrontEndImages } from './images';
import SkillDesc from './SkillDesc';
import { appData } from '../../../appData';
import SectionTitle from '../../../shared/title/SectionTitle';
import SkillList from './SkillList';
import { media } from '../../../lib/styled';

const Skills = () => (
  <Container name="skills">
    <SectionTitle title={appData.skills.menu} />
    <SkillSection>
      <SkillList title="Front End" data={FrontEndImages} />
      <SkillDesc
        title={appData.skills.frontTitle}
        description={appData.skills.frontDescription}
      />
    </SkillSection>
    <SkillSection>
      <SkillList title="Communication" data={CommunicationImages} />
      <SkillDesc
        title={appData.skills.communicationTitle}
        description={appData.skills.communicationDesc}
      />
    </SkillSection>
  </Container>
);

const Container = styled.div`
  background-color: #4B4B4B;
  padding-bottom: 40px;
`;

const SkillSection = styled.div`
  max-width: 700px;
  margin: 40px auto;
  padding: 20px 0;
  background-color: #373737;
  border-top-right-radius: 20px;
  border-bottom-left-radius: 20px;
  ${media.sm(css`
    border-radius: 0;
  `)}
`;
export default Skills;
