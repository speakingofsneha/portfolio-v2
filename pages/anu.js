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
import slide1 from '../public/work/anu/slide1.png';
import slide2 from '../public/work/anu/slide2.png';
import slide3 from '../public/work/anu/slide3.png';
import slide4 from '../public/work/anu/slide4.png';
import slide5 from '../public/work/anu/slide5.png';
import slide6 from '../public/work/anu/slide6.png';
import slide7 from '../public/work/anu/slide7.png';
import slide8 from '../public/work/anu/slide8.png';
import slide9 from '../public/work/anu/slide9.png';
import slide10 from '../public/work/anu/slide10.png';
import slide11 from '../public/work/anu/slide11.png';
import slide12 from '../public/work/anu/slide12.png';



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
        <ProjectHero content="/project-covers/anu.png" />
        <ProjectTitle role="Interaction design,<br>Front-end dev">Reframe</ProjectTitle>
        <ProjectBody col={2}>
        I’ve tried many task management apps over the years. At first, they all seemed impressive—sleek interfaces, shortcuts, tags, 
        subtasks, and plenty of integrations. But no matter how polished they looked, I never stuck with any of them for long. <br></br>
        For a while, I assumed the problem was me. After all, these apps get great reviews and are widely recommended.

        Then I read Norman's design of everyday things and something clicked..
        </ProjectBody>
        <ProjectDetails
          role={['Design Engineering']}
          collaborators={['just me :(']}
          duration={['Fall 2024']}
          tools={['Figma', 'Front-end dev']}
        />
        
        <ProjectMedia noShadow src={slide1}></ProjectMedia>
        <ProjectMedia noShadow src={slide2}></ProjectMedia>
        <ProjectMedia noShadow src={slide3}></ProjectMedia>
        <ProjectMedia noShadow src={slide4}></ProjectMedia>
        <ProjectMedia noShadow src={slide5}></ProjectMedia>
        <ProjectMedia noShadow src={slide6}></ProjectMedia>
        <ProjectMedia noShadow src={slide7}></ProjectMedia>
        <ProjectMedia noShadow src={slide8}></ProjectMedia>
        <ProjectMedia noShadow src={slide9}></ProjectMedia>
        <ProjectMedia noShadow src={slide10}></ProjectMedia>
        <ProjectMedia noShadow src={slide11}></ProjectMedia>
        <ProjectMedia noShadow src={slide12}></ProjectMedia>
        
      </GridContainer>
    </motion.main>
  );
}
