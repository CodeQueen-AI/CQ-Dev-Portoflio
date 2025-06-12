import React from "react";
import { IoLogoGithub } from "react-icons/io";
import { SiVercel } from "react-icons/si";
import Image from "next/image";

export default function MyProjects() {
  return (
    <>
      <div
        className="min-h-screen bg-gradient-to-b from-white via-pink-100 to-white py-16 px-6">
         <div className="flex flex-col items-center mb-12">
          <h1 className="text-5xl text-[#FF0B55] font-bold uppercase tracking-wider">
            My Projects
          </h1>
          <div className="relative mt-3">
            <div className="h-1 w-24 bg-[#FF0B55] rounded-full mb-1"></div>
            <div className="h-1 w-16 bg-[#FF0B55] rounded-full ml-4"></div>
          </div>
        </div>
        
        {/* Boxes Section */}
        <div className= "max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Project 1 */}
          <div className="relative border border-black overflow-hidden group">
            <Image
              src="/Project1.PNG"
              alt="Project 1"
              className="w-full h-64 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-bl from-pink-400 via-pink-200 to-[#efc1ca]  bg-opacity-80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-center px-4">
              <h2 className="text-2xl font-bold text-black mb-2">
                E-Commerce Website
              </h2>
              <p className="text-black mb-4">
                A makeup site with easy features and a stylish design
              </p>
              <div className="flex gap-4">
                <a
                  href="https://e-commerce-website-project-hazel.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-black"
                >
                  <SiVercel size={20} />
                  Vercel
                </a>
                <a
                  href="https://github.com/CodeQueen-AI/E-Commerce-Website-Project"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-black"
                >
                  <IoLogoGithub  size={20} />
                  GitHub
                </a>
              </div>
            </div>
          </div>

          {/* Project 2 */}
          <div className="relative border border-black overflow-hidden group">
            <Image
              src="/Project2.PNG"
              alt="Project 2"
              className="w-full h-64 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-bl from-pink-400 via-pink-200 to-[#efc1ca] bg-opacity-80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-center px-4">
              <h2 className="text-2xl font-bold text-black mb-2">
                Agentia World
              </h2>
              <p className="text-black mb-4">
                A creative, user-friendly design for AI solutions and technology
              </p>
              <div className="flex gap-4">
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-black"
                >
                  <SiVercel size={20} />
                  Vercel
                </a>
                <a
                  href="https://github.com/CodeQueen-AI/Agentia-World"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-black"
                >
                  <IoLogoGithub  size={20} />
                  GitHub
                </a>
              </div>
            </div>
          </div>

          {/* Project 3 */}
          <div className="relative border border-black overflow-hidden group">
            <Image
              src="/Project3.PNG"
              alt="Project 3"
              className="w-full h-64 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-bl from-pink-400 via-pink-200 to-[#efc1ca] bg-opacity-80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-center px-4">
              <h2 className="text-2xl font-bold text-back mb-2">
                Blog Website
              </h2>
              <p className="text-black mb-4">
                A modern, easy-to-navigate blog with an attractive layout
              </p>
              <div className="flex gap-4">
                <a
                  href="https://blog-website-seven-alpha.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-black"
                >
                  <SiVercel size={20} />
                  Vercel
                </a>
                <a
                  href="https://github.com/CodeQueen-AI/Blog-Website"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-black"
                >
                  <IoLogoGithub  size={20} />
                  GitHub
                </a>
              </div>
            </div>
          </div>

           {/* Project 4 */}
          <div className="relative border border-black overflow-hidden group">
            <Image
              src="/Project4.PNG"
              alt="Project 4"
              className="w-full h-64 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-bl from-pink-400 via-pink-200 to-[#efc1ca] bg-opacity-80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-center px-4">
              <h2 className="text-2xl font-bold text-black mb-2">
                Medical Tourism
              </h2>
              <p className="text-black mb-4">
                Combining healthcare and travel for top-quality treatment abroad
              </p>
              <div className="flex gap-4">
                <a
                  href="https://medical-tourism-seven.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-black"
                >
                  <SiVercel size={20} />
                  Vercel
                </a>
                <a
                  href="https://github.com/CodeQueen-AI/Medical-Tourism"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-black"
                >
                  <IoLogoGithub  size={20} />
                  GitHub
                </a>
              </div>
            </div>
          </div>

           {/* Project 5 */}
          <div className="relative border border-black overflow-hidden group">
            <Image
              src="Project5.PNG"
              alt="Project 5"
              className="w-full h-64 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-bl from-pink-400 via-pink-200 to-[#efc1ca] bg-opacity-80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-center px-4">
              <h2 className="text-2xl font-bold text-black mb-2">
                Learner Platform
              </h2>
              <p className="text-black mb-4">
                An engaging, interactive space for learning new skills
              </p>
              <div className="flex gap-4">
                <a
                  href="https://github.com/CodeQueen-AI"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-black"
                >
                  <SiVercel size={20} />
                  Vercel
                </a>
                <a
                  href="https://learner-platform-beta.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-black"
                >
                  <IoLogoGithub  size={20} />
                  GitHub
                </a>
              </div>
            </div>
          </div>

           {/* Project 6 */}
          <div className="relative border border-black overflow-hidden group">
            <Image
              src="project6.PNG"
              alt="Project 6"
              className="w-full h-64 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-bl from-pink-400 via-pink-200 to-[#efc1ca] bg-opacity-80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-center px-4">
              <h2 className="text-2xl font-bold text-black mb-2">
                Watch E-Commerce Website
              </h2>
              <p className="text-black mb-4">
                A sleek, user-friendly site for shopping stylish watches
              </p>
              <div className="flex gap-4">
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-black"
                >
                  <SiVercel size={20} />
                  Vercel
                </a>
                <a
                  href="https://github.com/CodeQueen-AI/Watch-E-Commerce-Website"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-black"
                >
                  <IoLogoGithub  size={20} />
                  GitHub
                </a>
              </div>
            </div>
          </div>

           {/* Project 7 */}
          <div className="relative border border-black overflow-hidden group">
            <Image
              src="/Project7.PNG"
              alt="Project 7"
              className="w-full h-64 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-bl from-pink-400 via-pink-200 to-[#efc1ca] bg-opacity-80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-center px-4">
              <h2 className="text-2xl font-bold text-black mb-2">
                Restaurant Website
              </h2>
              <p className="text-black mb-4">
                A welcoming site for browsing menus, booking tables, and exploring flavors
              </p>
              <div className="flex gap-4">
                <a
                  href="https://restaurant-website-pied.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-black"
                >
                  <SiVercel size={20} />
                  Vercel
                </a>
                <a
                  href="https://github.com/CodeQueen-AI/Restaurant-Website"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-black"
                >
                  <IoLogoGithub size={20} />
                  GitHub
                </a>
              </div>
            </div>
          </div>

           {/* Project 8 */}
          <div className="relative border border-black overflow-hidden group">
            <Image
              src="/Project9.PNG"
              alt="Project 8"
              className="w-full h-64 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-bl from-pink-400 via-pink-200 to-[#efc1ca] bg-opacity-80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-center px-4">
              <h2 className="text-2xl font-bold text-black mb-2">
                IceCream Website
              </h2>
              <p className="text-black mb-4">
                A fun, colorful site to explore and order your favorite ice creams
              </p>
              <div className="flex gap-4">
                <a
                  href="https://codequeen-ice-cream-website.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-black"
                >
                  <SiVercel size={20} />
                  Vercel
                </a>
                <a
                  href="https://github.com/CodeQueen-AI/IceCream-Website"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-black"
                >
                  <IoLogoGithub size={20} />
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
