import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { cn } from '../lib/utils';

export default function Navbar(props) {
  const router = useRouter();
  const pageName = useRouter().asPath;

  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  // Calculate opacity based on scroll position
  const getNavbarOpacity = () => {
    if (router.pathname === '/') {
      // On home page, start at 0.9 opacity and fade to 1 as user scrolls
      return Math.min(0.9 + (scrollY / 100) * 0.7, 1);
    } else {
      // On other pages, always visible
      return 1;
    }
  };

  const navbarOpacity = getNavbarOpacity();

  // For non-index pages, just render a simple back button
  if (pageName !== '/') {
    return (
      <div className="fixed top-6 right-6 z-[100]">
        <button 
          onClick={() => router.back()}
          className="back-button hover:text-[#98A6D2] flex items-center justify-center w-8 h-8 rounded-sm"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path
              fillRule="evenodd"
              d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    );
  }

  // Full navbar only for index page
  return (
    <nav
      className={cn(
        'sticky top-0 text-[#4B4A4A] body grid-layout z-[100] main-bg py-4 border-solid border-b transition-all duration-500 ease-out border-white/[.06]'
      )}
      style={{
        opacity: navbarOpacity,
        backdropFilter: navbarOpacity > 0.5 ? 'blur(10px)' : 'none',
        backgroundColor: navbarOpacity > 0.5 ? 'rgba(255, 255, 255, 0.9)' : 'transparent'
      }}
    >
      {/* logo */}
      <Link className="col-span-4 col-start-1 hover:text-[#98A6D2]" passHref href="/">
        <p className="font-display leading-none text-[14px] md:text-[18px] mt-2 ml-4"> ✿</p>
      </Link>

      <div className="absolute right-0 flex items-center gap-4 col-start-12 top-[50%] translate-y-[-50%] ">
        <Link className="hover:text-[#98A6D2] mt-2 mr-4" passHref href="/about">About</Link>
      </div>
    </nav>
  );
}
