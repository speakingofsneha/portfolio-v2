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
import slide1 from '../public/work/olympal/slide1.png';
import slide2 from '../public/work/olympal/slide2.png';
import slide3 from '../public/work/olympal/slide3.png';
import slide4 from '../public/work/olympal/slide4.png';
import slide5 from '../public/work/olympal/slide5.png';
import slide6 from '../public/work/olympal/slide6.png';
import slide7 from '../public/work/olympal/slide7.png';
import slide8 from '../public/work/olympal/slide8.png';
import slide9 from '../public/work/olympal/slide9.png';
import slide10 from '../public/work/olympal/slide10.png';
import slide11 from '../public/work/olympal/slide11.png';



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
        <ProjectHero content="/project-covers/olympal.png" />
        <ProjectTitle role="Interaction design, multimodal">Shared sporting experiences <br></br>for AR</ProjectTitle>
        <ProjectBody col={2}>
        Traditional broadcasts of the Olympics no longer meet the evolving expectations of an audience that values control, connection, and immersive participation.  <br></br><br></br>
        To address this, we designed an augmented reality viewing experience that adapts to a user’s unique preferences to replicate the real time atmosphere, energy and shared experiences they create when watching the games in person. 
        </ProjectBody>
        <ProjectDetails
          role={['Interaction Designer']}
          collaborators={['Alyssa Bui', 'Eusra Mohammad' ]}
          duration={['Spring 2024']}
          tools={['Figjam', 'Figma']}
        />
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
      </GridContainer>
    </motion.main>
  );
}
