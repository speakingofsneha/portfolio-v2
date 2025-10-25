import GridContainer from './GridContainer';
import React, { useState, useEffect } from 'react';
import TextLink from './TextLink';
import { useRouter } from 'next/router';
const GLOBAL_SPACING = 'pb-16 pt-10';
const BREAKPOINT = 'col-start-1 col-end-13';

export default function Footer() {



  return (
    <footer
      className={` flex flex-col items-center body bg-[#FFFFFF] dot-grid z-[1] w-full sticky bottom-0 text-[#4B4A4A]`}
    >
      <GridContainer className="px-3 gap-y-8" footerSpacing={GLOBAL_SPACING}>
        <div className={`flex-col space-y-2 ${BREAKPOINT} md:col-start-1 md:col-end-6`}>
        <p className="self-center px-2 pt-1 pb-[2px]">
              {`Hand-coded with 💌`}
            </p>
        </div>

        <span className={`flex flex-col space-y-1 ${BREAKPOINT} md:col-start-7 md:col-end-9`}>
          <p>
          </p>
          <p>
            <TextLink super={2} link="https://www.linkedin.com/in/sneha-kumar-a06275327/">
              Linkedin
            </TextLink>
          </p>
          <p>
            <TextLink super={3} link="https://github.com/speakingofsneha">
              Github
            </TextLink>
          </p>
          <p>
            <TextLink super={4} link="https://www.are.na/sneha-vembu/channels">
              Are.na
            </TextLink>
          </p>
        </span>
        <div className={`flex flex-col space-y-1 ${BREAKPOINT} md:col-start-9`}>
          <p>{`I love emails`}</p>
          <span>
            <TextLink super={5} link="mailto:jxsephz@gmail.com">{`snku6524@uni.sydney.edu.au`}</TextLink>
          </span>
        </div>
      </GridContainer>
    </footer>
  );
}
