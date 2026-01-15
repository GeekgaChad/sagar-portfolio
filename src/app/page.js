import Image from "next/image";

export default function Home() {
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      
      {/* 1. The SVG Background (The "Stage") */}
      <div className="absolute inset-0 z-0 opacity-40">
        <Image
          src="/hero-bg.svg" 
          alt="Architecture Pattern"
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* 2. The Hero Content (The "Identity") */}
      <div className="relative z-10 flex flex-col items-center text-center px-6">
        
        {/* Logo and Tagline */}
        <div className="mb-6 flex flex-col items-center animate-fade-in">
          <Image 
            src="/web-logo.svg" 
            alt="Sagar Murgan Logo" 
            width={50} 
            height={50} 
            className="mb-2"
          />
          <p className="tracking-[0.5em] uppercase text-[10px] text-gray-400 font-light">
            Portfolio
          </p>
        </div>

        {/* Name - Using the Serif font from Layout */}
        <h1 className="text-6xl md:text-9xl font-serif text-white mb-16 tracking-tighter">
          Sagar Murgan
        </h1>

        {/* 3. Action Buttons (The "Pathways") */}
        <div className="flex flex-col md:flex-row gap-8">
          <a 
            href="#about" 
            className="w-48 py-3 border border-white/30 rounded-full hover:bg-white hover:text-black transition-all duration-500 backdrop-blur-sm text-sm tracking-wide"
          >
            About
          </a>
          <a 
            href="#projects" 
            className="w-48 py-3 border border-white/30 rounded-full hover:bg-white hover:text-black transition-all duration-500 backdrop-blur-sm text-sm tracking-wide"
          >
            Projects
          </a>
          <a 
            href="#contact" 
            className="w-48 py-3 border border-white/30 rounded-full hover:bg-white hover:text-black transition-all duration-500 backdrop-blur-sm text-sm tracking-wide"
          >
            Reach me
          </a>
        </div>
      </div>
    </main>
  );
}

