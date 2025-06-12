import React from 'react';

const AboutUs = () => {
  return (
    <section className="bg-gradient-to-tl from-[#FFF0F3] via-white to-pink-200 py-16 px-8">
      <div className="max-w-5xl mx-auto">
        <h3 className="text-sm uppercase tracking-widest text-gray-400 mb-2">
          About Me
        </h3>
        <h2 className="text-4xl font-semibold mb-6">
          <span className="font-bold">Who am I?</span>
        </h2>
        <p className="text-lg leading-relaxed mb-4">
          <span className="font-semibold text-gray-800">
            Hi! I am Sumbal Naz
          </span>
           a passionate frontend developer and proud to be known as the CodeQueen I specialize in crafting clean modern and user-friendly web interfaces that blend creativity with functionality Every project I build is driven by my dedication to design and my commitment to delivering the best possible user experience
        </p>
        <p className="text-lg leading-relaxed mb-12">
          My journey in tech is fueled by a love for learning and exploring new technologies From responsive layouts to interactive components I believe in building websites that not only look great but also perform seamlessly Lets build something amazing together!
        </p>

        {/* Service Boxes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white shadow-md p-6 rounded-md text-center border-b-4 border-blue-500">
            <div className="text-4xl text-blue-500 mb-4">🎨</div>
            <h3 className="text-lg font-semibold">Creative Design</h3>
          </div>
          <div className="bg-white shadow-md p-6 rounded-md text-center border-b-4 border-red-500">
            <div className="text-4xl text-red-500 mb-4">💻</div>
            <h3 className="text-lg font-semibold">Web Development</h3>
          </div>
          <div className="bg-white shadow-md p-6 rounded-md text-center border-b-4 border-yellow-500">
            <div className="text-4xl text-yellow-500 mb-4">✨</div>
            <h3 className="text-lg font-semibold">UI/UX Design</h3>
          </div>
          <div className="bg-white shadow-md p-6 rounded-md text-center border-b-4 border-purple-500">
            <div className="text-4xl text-purple-500 mb-4">🤝</div>
            <h3 className="text-lg font-semibold">Communication</h3>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AboutUs;