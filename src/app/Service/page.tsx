import React from "react";
import {FaPencilRuler,FaEdit,FaLaptopCode,FaBrush,} from "react-icons/fa";

export default function OurServices() {
  return (
    <>
      <section
        className="text-[#FF0B55] py-16 px-6 md:px-20 bg-gradient-to-r from-pink-100 via-white to-[#FFF0F3]">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 items-start">
          <div className="lg:w-1/2 -ml-2 md:-ml-4 lg:-ml-8 xl:-ml-10 mt-6">
            <h3 className="text-sm tracking-widest mb-2">OUR SERVICES</h3>
            <h1 className="text-5xl font-extrabold mb-4 text-center lg:text-left">
              WHAT WE DO?
            </h1>
            <div className="flex flex-col items-center mb-6">
              <div className="w-24 h-1 bg-[#FF0B55] rounded-full"></div>
              <div className="w-16 h-1 bg-[#FF0B55] rounded-full mt-1"></div>
            </div>
            <p className="mb-6">
              We design and build fully responsive websites for your business, ensuring they look great and work perfectly on all devices
            </p>
            <button
              className="mt-6 px-6 py-2 border-l-4 border-r-4 border-[#FF0B55] text-[#FF0B55] bg-white font-semibold uppercase tracking-wide transition-all duration-300 hover:border-4 hover:border-[#FF0B55] hover:shadow-md">
              VIEW ALL SERVICES
            </button>
          </div>
          <div className="grid md:grid-cols-2 gap-8 lg:w-1/2">
            {/* Service 1 */}
            <div className="flex flex-col items-start bg-transparent p-6">
              <div className="mb-4 p-4 border border-[#FF0B55] transition-transform duration-500 ease-in-out hover:rotate-180 hover:rounded-full">
                <FaPencilRuler className="text-4xl" />
              </div>
              <h2 className="text-2xl font-bold mb-2">UI/UX Design</h2>
              <p className="text-sm">
                Whether you’re halfway through designing your interface or just getting started, our UI/UX design services can bring your vision to life and ensure a seamless user experience
              </p>
            </div>

            {/* Service 2 */}
            <div className="flex flex-col items-start bg-transparent p-6">
              <div className="mb-4 p-4 border border-[#FF0B55] transition-transform duration-500 ease-in-out hover:rotate-180 hover:rounded-full">
                <FaEdit className="text-4xl" />
              </div>
              <h2 className="text-2xl font-bold mb-2">Video Editing</h2>
              <p className="text-sm">
                Whether you’re halfway through or just getting started, our post-production services can give your videos the professional finishing touch they deserve
              </p>
            </div>

            {/* Service 3 */}
            <div className="flex flex-col items-start bg-transparent p-6">
              <div className="mb-4 p-4 border border-[#FF0B55] transition-transform duration-500 ease-in-out hover:rotate-180 hover:rounded-full">
                <FaLaptopCode className="text-4xl" />
              </div>
              <h2 className="text-2xl font-bold mb-2">Web Development</h2>
              <p className="text-sm">
                From concept to launch, we build responsive, high-performance websites tailored to your brand’s needs
              </p>
            </div>

            {/* Service 4 */}
            <div className="flex flex-col items-start bg-transparent p-6">
              <div className="mb-4 p-4 border border-[#FF0B55] transition-transform duration-500 ease-in-out hover:rotate-180 hover:rounded-full">
                <FaBrush className="text-4xl" />
              </div>
              <h2 className="text-2xl font-bold mb-2">Canvas</h2>
              <p className="text-sm">
               Unleash creativity with custom canvas-based design solutions for interactive and dynamic user experiences
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
