import React from 'react';
import { motion } from 'framer-motion';
import GridContainer from '../components/GridContainer';
import Image from 'next/image';

export default function About() {
  return (
    <motion.main className="w-screen h-screen flex items-center justify-center">
      <div className="w-full max-w-6xl mx-auto px-8 flex items-center gap-12">
        {/* Image on the left */}
        <div className="flex-1 flex justify-center">
          <Image
            src="/aboutme.png"
            alt="Sneha with two dogs"
            width={600}
            height={600}
            className="object-contain"
            priority
          />
        </div>

        {/* Text on the right */}
        <div className="flex-1 flex flex-col justify-center">
          <div className="text-[#4B4A4A] body leading-relaxed">
            <p className="mb-4">
              Hi, I'm Sneha (s-nay-huh)
            </p>
            
            <p className="mb-4">
              A penultimate year Interaction Design & Psychological Science student based in Sydney
              (but madras has my 🤍). The best part about being 20 is undergoing a character metamorphosis every month. The worst part however, is how hard it is to write a bio because I'm constantly changing,
              but I think I know who I am... 
            </p>
        
            
            <p className="mb-4">
              an artist, designer, writer, developer and a very cool person trust me on this!!!! I've worn many hats but to me, the label isn't what matters.
              Pixels, "words", &lt;code&gt;, and their interactions are mediums through which we stumble across new perspectives; essentially if I had to explain myself and the work I do to a 10, 30 and 70 year old collectively, I draw from life and try to make things that change our stories for the better.
            </p>
        
          </div>
        </div>
      </div>
    </motion.main>
  );
}
