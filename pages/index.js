import ProjectCard from '../components/home/ProjectCard';
import React, { useEffect, useState } from 'react';
import GridContainer from '../components/GridContainer';
import TextLink from '../components/TextLink';
import dynamic from 'next/dynamic';
import Sapasa from '../public/project-covers/sapasa.png';
import olympal from '../public/project-covers/olympal.png'; 
import Litbox from '../public/project-covers/litbox.png';
import Anu from '../public/project-covers/anu.png';
import Reframe from '../public/project-covers/reframe.png';
import Atmos from '../public/project-covers/atmos.png';
import Kolam from '../public/project-covers/kolam.png';
import Misc from '../public/project-covers/misc.png'; 
import Cobot from '../public/project-covers/cobot.png';

const KolamSketch = dynamic(() => import('../components/KolamSketch'), { ssr: false });

const gapValue = 'gap-6';

export default function Home() {
  return (
    <main>
      <GridContainer>
        {/* ABOUT SECTION */}
        <section className="my-6 grid-layout">
          <div className="flex flex-col col-start-1 col-end-13 gap-3 md:col-end-6">
            <p className={`mb-4 text-[#4B4A4A] body z-1000 ml-24 w-full`}>
              <br></br> <br></br><br></br>
              Hi I'm Sneha (சினேகா) <br></br> <br></br>
              I figure out new ways to solve un-met problems through cyclical research, intuitive systems and clean design.
              You can find me on <TextLink link="https://www.are.na/sneha-vembu/channels">Are.na</TextLink>, 
              <TextLink link="https://github.com/speakingofsneha">Github</TextLink>, and 
              (unfortunately) <TextLink link="https://www.linkedin.com/in/sneha-kumar-a06275327/">Linkedin</TextLink>. 

            </p>
          </div>
        {/* Kolam gif here */}
        <div className="col-start-8 col-end-13 md:col-start-7 md:col-end-13 flex justify-center ml-[-24px] mt-[-50px]">
          <KolamSketch />
        </div>
        </section>


        <div className="grid relative z-10 col-start-1 col-end-13 md:grid-cols-3 grid-gap">
          {/* COLUMN 1 */}

          <div className={`flex flex-col ${gapValue}`}>
            <ProjectCard
              title="Turning messy into meaning"
              description="Interaction Design, AI/ML"
              link="/reframe"
              content={Reframe}
              wip={true}
            />
            <ProjectCard
              title="No-nonsense task management"
              description="Web dev"
              link="https://speakingofsneha.github.io/anu/#/"
              content={Anu}
              isExternal={true}
            />
            <ProjectCard
              title="Miscellaneous art/design pieces"
              description="Misc"
              link="https://drive.google.com/file/d/14gcp8m8lWvuO_4qe6-o3Xhba0AqyaDDB/view?usp=sharing"
              content={Misc}
              isExternal={true}
            />
          </div>
          {/* COLUMN 2 */}
          <div className={`flex flex-col ${gapValue}`}>
            <ProjectCard
              title="Shared sporting experiences for AR"
              description="Interaction design, multimodal, Ar"
              link="/olympal"
              content={olympal}
            />
            <ProjectCard
              title="Collaborative robot for visually impaired chemistry students"
              description="Interaction Design, Multimodal, Prototyping"
              link="/cobot"
              content={Cobot}
              wip={true}
            />
             <ProjectCard
              title="Democratising carnatic music education"
              description="Interface design"
              link="https://www.figma.com/proto/yfEMxnncnoibR83KhucQjp/sapasa?node-id=424-647&node-type=canvas&t=ALDmbUS532bnPMbz-0&scaling=scale-down&content-scaling=fixed&page-id=414:616"
              content={Sapasa}
              isExternal={true}
            />

          </div>

          {/* COLUMN 3 */}
          <div className={`flex flex-col ${gapValue}`}>
          <ProjectCard
              title="Equitable indoor environments"
              description="Information visualisation"
              link="/atmos"
              content={Atmos}
            />
            <ProjectCard
              title="Adressing the literacy crisis in australia"
              description="Interaction Design, Multimodal, Physical Prototyping"
              link="/litbox"
              content={Litbox}
              wip={true}
            />

            <ProjectCard
              title="Mornings in chidam"
              description="Creative coding in p5js"
              link="https://www.behance.net/gallery/223935267/Mornings-in-Chidam-Creative-Coding-in-p5js"
              content={Kolam}
              isExternal={true}
            />
          </div>
        </div>
      </GridContainer>
    </main>
  );
}

function WorkExperience(props) {
  return (
    <>
      <h1 className="col-span-2 col-start-1 col-end-3 text-[#4B4A4A] body">
        {props.title}
        <br />
        {props.date}
      </h1>
      <p className="col-span-4 col-start-3 text-[#4B4A4A] body">{props.children}</p>
    </>
  );
}

