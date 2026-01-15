import Image from "next/image";

export default function Home() {
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-black">
      
      {/* High-Contrast Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-bg.svg" 
          alt="Architecture Pattern"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-radial-gradient from-black/50 via-black/10 to-transparent" />
      </div>

      {/* Content Layer - Vertical Spacing Tightened */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 w-full max-w-7xl">
        
        {/* Massive Logo - Dominant Central Anchor */}
        <div className="flex flex-col items-center animate-fade-in w-full">
          <div className="relative w-56 h-56 sm:w-72 sm:h-72 md:w-[32rem] md:h-[32rem] lg:w-[38rem] lg:h-[38rem] transition-all duration-700">
            <Image 
              src="/web-logo.svg" 
              alt="Sagar Murgan Logo" 
              fill
              priority
              className="object-contain drop-shadow-[0_0_30px_rgba(255,255,255,0.25)]"
            />
          </div>
        </div>

        {/* Name - Brought closer to logo using negative margin */}
        <h1 className="text-6xl sm:text-8xl md:text-[12rem] font-serif text-white tracking-tighter leading-none drop-shadow-2xl mt-[-6rem] sm:mt-[-8rem] md:mt-[-12rem] mb-12">
          Sagar Murgan
        </h1>

        {/* Action Buttons - High-end Glassmorphism */}
        <div className="flex flex-col sm:flex-row gap-4 md:gap-8 w-full justify-center items-center">
          <a 
            href="#about" 
            className="w-60 py-4 border border-white/40 rounded-full hover:bg-white hover:text-black transition-all duration-500 backdrop-blur-2xl text-sm tracking-[0.2em] uppercase bg-white/10"
          >
            About
          </a>
          <a 
            href="#projects" 
            className="w-60 py-4 border border-white/40 rounded-full hover:bg-white hover:text-black transition-all duration-500 backdrop-blur-2xl text-sm tracking-[0.2em] uppercase bg-white/10"
          >
            Projects
          </a>
          <a 
            href="#contact" 
            className="w-60 py-4 border border-white/40 rounded-full hover:bg-white hover:text-black transition-all duration-500 backdrop-blur-2xl text-sm tracking-[0.2em] uppercase bg-white/10"
          >
            Reach me
          </a>
        </div>
      </div>
    </main>
  );
}