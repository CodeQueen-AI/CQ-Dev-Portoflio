import { FaGithub, FaLinkedin, FaXTwitter } from 'react-icons/fa6';

export default function Home() {
  return (
    <div
      className="min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-28 py-10 text-[#FF0B55] bg-gradient-to-br from-pink-100 via-[#FFF0F3] to-pink-200"
    >
      <div className="space-y-4 text-center md:text-left max-w-lg">
        <h2 className="text-3xl uppercase font-semibold">I AM</h2>
        <div className="inline-block">
          <h1 className="text-4xl md:text-6xl font-semibold font-serif">Sumbal Naz</h1>
          <div className="h-1 bg-[#FF0B55] rounded-full mt-2" />
        </div>
        <p className="text-2xl md:text-4xl font-semibold">And proudly known as CodeQueen</p>
        <p className="text-lg md:text-2xl">
          Frontend Developer crafting clean, responsive <br />
          and user-first web designs
        </p>

        <button className="relative group px-8 md:px-12 py-4 text-lg font-semibold bg-transparent translate-x-2">
          <span className="absolute top-0 left-0 w-6 h-1 bg-[#FF0B55] group-hover:w-full transition-all duration-300"></span>
          <span className="absolute top-0 left-0 w-1 h-6 bg-[#FF0B55] group-hover:h-full transition-all duration-300"></span>
          <span className="absolute bottom-0 right-0 w-6 h-1 bg-[#FF0B55] group-hover:w-full transition-all duration-300"></span>
          <span className="absolute bottom-0 right-0 w-1 h-6 bg-[#FF0B55] group-hover:h-full transition-all duration-300"></span>

          <span className="relative z-10">Explore More</span>
        </button>
      </div>

      <div className="flex flex-row md:flex-col items-center gap-2 md:gap-8 mt-10 md:mt-0">
        <a
          href="https://github.com/CodeQueen-AI"
          target="_blank"
          className="w-10 h-10 md:w-16 md:h-16 rounded-full border-4 border-[#FF0B55] flex items-center justify-center hover:scale-110 transition-transform cursor-pointer"
        >
          <FaGithub className="text-xl md:text-3xl" />
        </a>
        <div className="hidden md:block w-1 h-12 bg-[#FF0B55]" />
        <div className="block md:hidden h-1 w-12 bg-[#FF0B55]" />

        <a
          href="https://www.linkedin.com/in/sumbal-naz-712464347/"
          target="_blank"
          className="w-10 h-10 md:w-16 md:h-16 rounded-full border-4 border-[#FF0B55] flex items-center justify-center hover:scale-110 transition-transform cursor-pointer"
        >
          <FaLinkedin className="text-xl md:text-3xl" />
        </a>
        <div className="hidden md:block w-1 h-12 bg-[#FF0B55]" />
        <div className="block md:hidden h-1 w-12 bg-[#FF0B55]" />
        <a
          href="https://x.com/CodeQueen23"
          target="_blank"
          className="w-10 h-10 md:w-16 md:h-16 rounded-full border-4 border-[#FF0B55] flex items-center justify-center hover:scale-110 transition-transform cursor-pointer"
        >
          <FaXTwitter className="text-xl md:text-3xl" />
        </a>
      </div>
    </div>
  );
}
