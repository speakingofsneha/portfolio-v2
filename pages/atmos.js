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
import slide1 from '../public/work/atmos/slide1.png';
import slide2 from '../public/work/atmos/slide2.png';
import slide3 from '../public/work/atmos/slide3.png';
import slide4 from '../public/work/atmos/slide4.png';
import slide5 from '../public/work/atmos/slide5.png';
import slide6 from '../public/work/atmos/slide6.png';
import slide7 from '../public/work/atmos/slide7.png';
import slide8 from '../public/work/atmos/slide8.png';
import slide9 from '../public/work/atmos/slide9.png';
import slide10 from '../public/work/atmos/slide10.png';
import slide11 from '../public/work/atmos/slide11.png';
import slide12 from '../public/work/atmos/slide12.png';
import slide13 from '../public/work/atmos/slide13.png';



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
        <ProjectHero content="/project-covers/atmos.png" />
        <ProjectTitle role="Information visualisation">Equitable indoor environments</ProjectTitle>
        <ProjectBody col={2}>
        We like to think of office buildings as neutral spaces- but comfort and safety, like everything else, are not equally distributed. 
        From crash test dummies modeled soley after men to algorithms that reinforce 
        racial biases, design has historically upheld systems of oppression as the world works  <u> exactly as we designed it.</u>
        </ProjectBody>
        <ProjectDetails
          role={['Design Engineer']}
          collaborators={['just me :(']}
          duration={['Fall 2025']}
          tools={['Figma', 'React', 'Plotly', 'Pandas']}
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
        <ProjectMedia noShadow src={slide13}></ProjectMedia>
      </GridContainer>
    </motion.main>
  );
}
