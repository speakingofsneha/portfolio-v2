import React from 'react';
import { motion } from 'framer-motion';
import GridContainer from '../components/GridContainer';
import Image from 'next/image';

export default function About() {
  return (
    <motion.main className="min-h-screen flex items-center justify-center py-8">
      <div className="w-full max-w-md lg:max-w-6xl mx-auto px-4 lg:px-8">
        {/* Mobile: Stacked layout, Desktop: Side by side */}
        <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-12">
          {/* Image */}
          <div className="flex justify-center lg:flex-1 lg:justify-center order-1 lg:order-1">
            <div className="relative w-full max-w-xs lg:max-w-lg">
              <Image
                src="/aboutme.png"
                alt="Sneha with two dogs"
                width={600}
                height={600}
                className="object-contain w-full h-auto"
                priority
              />
            </div>
          </div>

          {/* Text */}
          <div className="flex flex-col justify-center lg:flex-1 order-2 lg:order-2 w-full">
            <div className="text-[#4B4A4A] body leading-relaxed text-left">
              <p className="mb-2">
                The best part about being 21 is undergoing a character metamorphosis every month. 
                The worst part, however, is how hard it is to write a bio because I&apos;m constantly changing, but I think I know who I am... 
                <br></br><br></br>
                an artist, designer, writer, developer, entrepreneur, and a very cool person trust me on this!!!! I&apos;ve worn many hats but to me, the label isn&apos;t what matters.
                Pixels, &quot;words&quot;, &lt;code&gt;, and their interactions are mediums through which we stumble across new perspectives; essentially if I had to explain myself and the work I do to a 10, 30 and 70 year old collectively, I draw from life and try to make things that change our lives for the better.
              </p>
        
          
            </div>
          </div>
        </div>
      </div>
    </motion.main>
  );
}
