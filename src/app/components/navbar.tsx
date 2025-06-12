'use client'
import { useState } from 'react';
import Link from 'next/link';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="bg-[#FFF0F3] shadow-md py-4 px-8 flex items-center justify-between relative z-20">
        <div className="text-4xl font-semibold font-serif text-[#FF0B55]">
          CQ Dev.
        </div>
        <div className="hidden md:flex space-x-6">
          <Link href="/">
            <span className="relative text-[#FF0B55] font-semibold uppercase tracking-wide cursor-pointer after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#FF0B55] after:transition-all after:duration-300 hover:after:w-full">
              Home
            </span>
          </Link>
          <Link href="/About">
            <span className="relative text-[#FF0B55] font-semibold uppercase tracking-wide cursor-pointer after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#FF0B55] after:transition-all after:duration-300 hover:after:w-full">
              About
            </span>
          </Link>
          <Link href="/Skills">
            <span className="relative text-[#FF0B55] font-semibold uppercase tracking-wide cursor-pointer after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#FF0B55] after:transition-all after:duration-300 hover:after:w-full">
              Skills
            </span>
          </Link>
          <Link href="/Service">
            <span className="relative text-[#FF0B55] font-semibold uppercase tracking-wide cursor-pointer after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#FF0B55] after:transition-all after:duration-300 hover:after:w-full">
              Services
            </span>
          </Link>
          <Link href="Projects">
            <span className="relative text-[#FF0B55] font-semibold uppercase tracking-wide cursor-pointer after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#FF0B55] after:transition-all after:duration-300 hover:after:w-full">
              Projects
            </span>
          </Link>
          <Link href="/Contact">
            <span className="relative text-[#FF0B55] font-semibold uppercase tracking-wide cursor-pointer after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#FF0B55] after:transition-all after:duration-300 hover:after:w-full">
              Contact
            </span>
          </Link>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-[#FF0B55] text-3xl focus:outline-none cursor-pointer">
            <FiMenu />
          </button>
        </div>
      </nav>
      {isOpen && (
        <div className="fixed inset-0 bg-[#FFF0F3]/70 backdrop-blur-md z-30 flex flex-col items-center justify-center font-poppins">
          <button
            onClick={toggleMenu}
            className="absolute top-4 right-4 text-[#FF0B55] text-4xl focus:outline-none cursor-pointer"
          >
            <FiX />
          </button>
          <div className="flex flex-col items-center space-y-8">
            <Link href="/">
              <span
                onClick={toggleMenu}
                className="relative text-3xl text-[#FF0B55] font-semibold uppercase tracking-wide cursor-pointer after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#FF0B55] after:transition-all after:duration-300 hover:after:w-full"
              >
                Home
              </span>
            </Link>
            <Link href="/about">
              <span
                onClick={toggleMenu}
                className="relative text-3xl text-[#FF0B55] font-semibold uppercase tracking-wide cursor-pointer after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#FF0B55] after:transition-all after:duration-300 hover:after:w-full"
              >
                About
              </span>
            </Link>
            <Link href="/skill">
              <span
                onClick={toggleMenu}
                className="relative text-3xl text-[#FF0B55] font-semibold uppercase tracking-wide cursor-pointer after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#FF0B55] after:transition-all after:duration-300 hover:after:w-full"
              >
                Skills
              </span>
            </Link>
            <Link href="/services">
              <span
                onClick={toggleMenu}
                className="relative text-3xl text-[#FF0B55] font-semibold uppercase tracking-wide cursor-pointer after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#FF0B55] after:transition-all after:duration-300 hover:after:w-full"
              >
                Services
              </span>
            </Link>
            <Link href="/projects">
              <span
                onClick={toggleMenu}
                className="relative text-3xl text-[#FF0B55] font-semibold uppercase tracking-wide cursor-pointer after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#FF0B55] after:transition-all after:duration-300 hover:after:w-full"
              >
                Projects
              </span>
            </Link>
            <Link href="/contact">
              <span
                onClick={toggleMenu}
                className="relative text-3xl text-[#FF0B55] font-semibold uppercase tracking-wide cursor-pointer after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#FF0B55] after:transition-all after:duration-300 hover:after:w-full"
              >
                Contact
              </span>
            </Link>
          </div>
        </div>
      )}
      <hr />
    </>
  );
};

export default Navbar;
