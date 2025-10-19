import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import TextLink from '../components/TextLink';
import GridContainer from '../components/GridContainer';
import ProjectHero from '../components/projects/ProjectHero';
import ProjectBody from '../components/projects/ProjectBody';
import ProjectMedia from '../components/projects/ProjectMedia';
import ProjectTitle from '../components/projects/ProjectTitle';
import ProjectDetails from '../components/projects/ProjectDetails';
import LinkCard from '../components/projects/LinkCard';
import Spacer from '../components/projects/Spacer';
import Divider from '../components/projects/Divider';

// images
import slide1 from '../public/work/reframe/slide1.png';
import slide2 from '../public/work/reframe/slide2.png';
import slide3 from '../public/work/reframe/slide3.png';
import slide4 from '../public/work/reframe/slide4.png';
import slide5 from '../public/work/reframe/slide5.png';
import slide6 from '../public/work/reframe/slide6.png';
import slide7 from '../public/work/reframe/slide7.png';
import slide8 from '../public/work/reframe/slide8.png';
import slide9 from '../public/work/reframe/slide9.png';
import slide10 from '../public/work/reframe/slide10.png';
import slide11 from '../public/work/reframe/slide11.png';
import slide12 from '../public/work/reframe/slide12.png';



const item = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
  },
};

export default function Brain() {
  return (
    <motion.main className="min-h-[70vh]">
      <GridContainer>
        <ProjectHero content="/project-covers/cobot.png" />
        <ProjectTitle role="Interaction design, Multimodal, Prototyping">Collaborative robot for visually impaired chemistry students</ProjectTitle>
        <ProjectBody col={2}>
        Current laboratory approaches often pair blind students with sighted demonstrators, where the demonstrator handles tasks requiring observation or equipment use, unintentionally reinforcing the idea that blind or low vision students cannot complete experiments independently. 
        Our solution is cobot that empowers blind and low-vision students to take full control of their experiments, fostering true autonomy and inclusion both intellectually and practically.
        </ProjectBody>
        <ProjectDetails
          role={['Design Engineer']}
          collaborators={['Marshall Fan', 'Monica Pham', 'Kristen Zhou']}
          duration={['Spring 2025']}
          tools={['Python', 'Figjam', 'Figma']}
        />
      </GridContainer>
    </motion.main>
  );
}
