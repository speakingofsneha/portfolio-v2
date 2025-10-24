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
import slide1 from '../public/work/kolam/slide1.png';
import slide2 from '../public/work/kolam/slide2.png';
import slide3 from '../public/work/kolam/slide3.png';
import slide4 from '../public/work/kolam/slide4.png';
import slide5 from '../public/work/kolam/slide5.png';
import slide6 from '../public/work/kolam/slide6.png';
import slide7 from '../public/work/kolam/slide7.png';



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
        <ProjectHero content="/project-covers/kolam.png" />
        <ProjectTitle role="Creative coding in p5js">Mornings in Chidam</ProjectTitle>
        <ProjectBody col={2}>
        Inspired by childhood memories and village life, this project turns traditional South Indian Kolam patterns into code. 
        Pulli Kolam, a South Indian art form, serves as a rich foundation for studying fractals, geometry, and recursive patterns. <br></br>By approaching Kolam through code, we not only preserve its intricate logic but also challenge the colonial narratives that have long dismissed such indigenous knowledge systems as ‘primitive’. 
        </ProjectBody>
        <ProjectDetails
          role={['Concept direction, creative coding']}
          collaborators={['just me :(']}
          duration={['Spring 2023']}
          tools={['P5js', 'Good ol\' pen & paper']}
        />

        <ProjectMedia noShadow src={slide1}></ProjectMedia>
        <ProjectMedia noShadow src={slide2}></ProjectMedia>
        <ProjectMedia noShadow src={slide3}></ProjectMedia>
        <ProjectMedia noShadow src={slide4}></ProjectMedia>
        <ProjectMedia noShadow src={slide5}></ProjectMedia>
        <ProjectMedia noShadow src={slide6}></ProjectMedia>
        <ProjectMedia noShadow src={slide7}></ProjectMedia>
 


      </GridContainer>
    </motion.main>
  );
}
