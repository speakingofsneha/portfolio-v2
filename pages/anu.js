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
        <ProjectHero content="/project-covers/reframe.png" />
        <ProjectTitle role="Interaction design,<br>AI/ML">Reframe</ProjectTitle>
        <ProjectBody col={2}>
        Good case studies are a combination of narrative, information design and personality. But not everyone has the time, patience or skills to do that, especially after working on a long, gruelling project. <br></br>
        Introducing Reframe, an intelligent system that takes care of presentation, so you can focus on substance.
        </ProjectBody>
        <ProjectDetails
          role={['Design Engineering']}
          collaborators={['Alyssa Bui']}
          duration={['Spring 2025']}
          tools={['Figma', 'React', 'Cursor']}
        />
        
       {/* <ProjectMedia noShadow src={slide1}></ProjectMedia> */}
       <ProjectMedia noShadow src={slide1}></ProjectMedia>
        <Divider /> <Spacer /> <Spacer /> <Divider />

        <ProjectBody id="context" title="Design education prioritises obedience over critical thinking." col={1}>
          Like most design schools, usyd hands a template for writing case studies- a predictable recipe of surveys, interviews, 
          wireframes, and testing, ending in a “polished” mockup that pretends to solve the problem. But real design work isn’t linear; 
          it’s cyclical, messy, and full of small, thoughtful pivots. 
        </ProjectBody>
        
        <ProjectMedia noShadow src={slide2}></ProjectMedia>
        <ProjectMedia noShadow src={slide3}></ProjectMedia>
        <Divider /> <Spacer /> <Spacer /> 

   
        <ProjectBody id="problem" title="Depth and insight rarely matter as much as following the rubric" col={1}>
        Our rubrics reward steps, not thinking- four iterations? that’s an high disction. Three? distinction. So as students, we adapt- we reverse-engineer from an HD and stop                  designing for the problem, and start designing for the rubric. Then we graduate and find out this cookie cutter project lands nowhere because hiring managers have seen the exact thing hundreds of times that week.
        </ProjectBody>
        <ProjectMedia noShadow src={slide4}></ProjectMedia>
        
        <Divider />
        <Spacer />
        <Spacer />
        <Spacer />
        <Spacer />
        <Spacer />
        <Divider />
        <ProjectBody id="opportunity" title="So I started asking myself... how do I turn all this school work, these long, identical reports, into something that actually reflects how I think and design?" col={1}>
        </ProjectBody>


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
