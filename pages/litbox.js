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
import slide1 from '../public/work/litbox/slide1.png';
import slide2 from '../public/work/litbox/slide2.png';
import slide3 from '../public/work/litbox/slide3.png';
import slide4 from '../public/work/litbox/slide4.png';
import slide5 from '../public/work/litbox/slide5.png';
import slide6 from '../public/work/litbox/slide6.png';
import slide7 from '../public/work/litbox/slide7.png';
import slide8 from '../public/work/litbox/slide8.png';
import slide9 from '../public/work/litbox/slide9.png';
import slide10 from '../public/work/litbox/slide10.png';
import slide11 from '../public/work/litbox/slide11.png';
import slide12 from '../public/work/litbox/slide12.png';
import slide13 from '../public/work/litbox/slide13.png';
import slide14 from '../public/work/litbox/slide8.png';
import slide15 from '../public/work/litbox/slide9.png';
import slide16 from '../public/work/litbox/slide10.png';
import slide17 from '../public/work/litbox/slide11.png';
import slide18 from '../public/work/litbox/slide12.png';
import slide19 from '../public/work/litbox/slide13.png';
import slide20 from '../public/work/litbox/slide10.png';
import slide21 from '../public/work/litbox/slide11.png';
import slide22 from '../public/work/litbox/slide12.png';
import slide23 from '../public/work/litbox/slide13.png';



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
        <ProjectHero content="/project-covers/litbox.png" />
        <ProjectTitle role="Interaction Design, Multimodal, Physical Prototyping">Adressing the literacy crisis in australia</ProjectTitle>
        <ProjectBody col={2}>
        As part of the <a href="https://www.sydney.edu.au/units/DECO2014" target="_blank" rel="noopener noreferrer">User Experience Design Studio</a>, our team explored the brief "relearn the learning" by focusing on Australia's literacy crisis. We used the double diamond framework to take a human-centred approach, especially given the sensitivity of the issue.
        </ProjectBody>
        <ProjectDetails
          role={['UX Designer']}
          collaborators={['Hannah Yuan', 'Nicole Chen']}
          duration={['fall 2024']}
          tools={['Figma', 'React', 'Cursor']}
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
        <ProjectMedia noShadow src={slide14}></ProjectMedia>
        <ProjectMedia noShadow src={slide15}></ProjectMedia>
        <ProjectMedia noShadow src={slide16}></ProjectMedia>
        <ProjectMedia noShadow src={slide17}></ProjectMedia>
        <ProjectMedia noShadow src={slide18}></ProjectMedia>
        <ProjectMedia noShadow src={slide19}></ProjectMedia>
        <ProjectMedia noShadow src={slide20}></ProjectMedia>
        <ProjectMedia noShadow src={slide21}></ProjectMedia>
        <ProjectMedia noShadow src={slide22}></ProjectMedia>
        <ProjectMedia noShadow src={slide23}></ProjectMedia>

      </GridContainer>
    </motion.main>
  );
}
