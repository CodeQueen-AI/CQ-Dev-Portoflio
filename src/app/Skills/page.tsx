import React from "react";
import {FaHtml5,FaCss3Alt,FaJsSquare,FaPython,FaReact,FaBootstrap,} from "react-icons/fa";
import {SiTypescript,SiRedux,SiFramer,SiDaisyui,SiNextdotjs,SiStreamlit,SiTailwindcss,SiNetlify,SiVercel,} from "react-icons/si";
import { TbBrandTailwind } from "react-icons/tb";

export default function Home() {
  return (
    <>
        <div
        className="min-h-screen bg-gradient-to-tr from-pink-100 via-white to-[#FFF0F3] p-8">
        {/* My Skills*/}
        <div className="flex flex-col items-center mb-12 text-center">
          <h1 className="text-5xl text-[#FF0B55] font-bold uppercase tracking-wider">
            My Skills
          </h1>
          <div className="relative mt-3">
            <div className="h-1 w-24 bg-[#FF0B55] rounded-full mb-1 mx-auto"></div>
            <div className="h-1 w-16 bg-[#FF0B55] rounded-full ml-4 mx-auto"></div>
          </div>
        </div>

        {/* Languages */}
        <h1 className="text-3xl text-[#FF0B55] font-semibold mb-6 text-center sm:text-left">
          1-Languages
        </h1>
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          <div className="w-40 flex items-center gap-2 p-4 border border-gray-300 rounded-lg shadow hover:shadow-md transition-all duration-300">
            <FaHtml5 className="text-3xl text-orange-600" />
            <span className="font-medium">HTML</span>
          </div>
          <div className="w-40 flex items-center gap-2 p-4 border border-gray-300 rounded-lg shadow hover:shadow-md transition-all duration-300">
            <FaCss3Alt className="text-3xl text-blue-600" />
            <span className="font-medium">CSS</span>
          </div>
          <div className="w-40 flex items-center gap-2 p-4 border border-gray-300 rounded-lg shadow hover:shadow-md transition-all duration-300">
            <FaJsSquare className="text-3xl text-yellow-400" />
            <span className="font-medium">JavaScript</span>
          </div>
          <div className="w-40 flex items-center gap-2 p-4 border border-gray-300 rounded-lg shadow hover:shadow-md transition-all duration-300">
            <SiTypescript className="text-3xl text-blue-500" />
            <span className="font-medium">TypeScript</span>
          </div>
          <div className="w-40 flex items-center gap-2 p-4 border border-gray-300 rounded-lg shadow hover:shadow-md transition-all duration-300">
            <FaPython className="text-3xl text-yellow-500" />
            <span className="font-medium">Python</span>
          </div>
        </div>

        {/* Libraries */}
        <h1 className="text-3xl text-[#FF0B55] font-semibold mb-6 text-center sm:text-left">
          2-Libraries
        </h1>
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          <div className="w-40 flex items-center gap-2 p-4 border border-gray-300 rounded-lg shadow hover:shadow-md transition-all duration-300">
            <SiRedux className="text-3xl text-purple-500" />
            <span className="font-medium">Redux</span>
          </div>
          <div className="w-52 flex items-center gap-2 p-4 border border-gray-300 rounded-lg shadow hover:shadow-md transition-all duration-300">
            <SiFramer className="text-3xl text-pink-600" />
            <span className="font-medium">Framer Motion</span>
          </div>
          <div className="w-40 flex items-center gap-2 p-4 border border-gray-300 rounded-lg shadow hover:shadow-md transition-all duration-300">
            <SiDaisyui className="text-3xl text-pink-400" />
            <span className="font-medium">DaisyUI</span>
          </div>
          <div className="w-40 flex items-center gap-2 p-4 border border-gray-300 rounded-lg shadow hover:shadow-md transition-all duration-300">
            <TbBrandTailwind className="text-3xl text-teal-400" />
            <span className="font-medium">Tailblocks</span>
          </div>
        </div>

        {/* Frameworks */}
        <h1 className="text-3xl text-[#FF0B55] font-semibold mb-6 text-center sm:text-left">
          3-Frameworks
        </h1>
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          <div className="w-40 flex items-center gap-2 p-4 border border-gray-300 rounded-lg shadow hover:shadow-md transition-all duration-300">
            <FaReact className="text-3xl text-cyan-500" />
            <span className="font-medium">React.js</span>
          </div>
          <div className="w-40 flex items-center gap-2 p-4 border border-gray-300 rounded-lg shadow hover:shadow-md transition-all duration-300">
            <SiNextdotjs className="text-3xl text-black" />
            <span className="font-medium">Next.js</span>
          </div>
          <div className="w-40 flex items-center gap-2 p-4 border border-gray-300 rounded-lg shadow hover:shadow-md transition-all duration-300">
            <SiStreamlit className="text-3xl text-red-500" />
            <span className="font-medium">Streamlit</span>
          </div>
          <div className="w-44 flex items-center gap-2 p-4 border border-gray-300 rounded-lg shadow hover:shadow-md transition-all duration-300">
            <SiTailwindcss className="text-3xl text-teal-400" />
            <span className="font-medium">Tailwind CSS</span>
          </div>
          <div className="w-40 flex items-center gap-2 p-4 border border-gray-300 rounded-lg shadow hover:shadow-md transition-all duration-300">
            <FaBootstrap className="text-3xl text-purple-600" />
            <span className="font-medium">Bootstrap</span>
          </div>
        </div>

        {/* Deployment Tools */}
        <h1 className="text-3xl text-[#FF0B55] font-semibold mb-6 text-center sm:text-left">
          4-Deployment Tools
        </h1>
        <div className="flex flex-wrap justify-center gap-4">
          <div className="w-40 flex items-center gap-2 p-4 border border-gray-300 rounded-lg shadow hover:shadow-md transition-all duration-300">
            <SiVercel className="text-3xl text-black" />
            <span className="font-medium">Vercel</span>
          </div>
          <div className="w-40 flex items-center gap-2 p-4 border border-gray-300 rounded-lg shadow hover:shadow-md transition-all duration-300">
            <SiNetlify className="text-3xl text-green-500" />
            <span className="font-medium">Netlify</span>
          </div>
        </div>
      </div>
    </>
  );
}
