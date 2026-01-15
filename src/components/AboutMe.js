import Image from "next/image";

export default function AboutMe() {
  return (
    <section id="about" className="py-24 px-6 md:px-20 bg-sagar-dark text-white min-h-screen flex items-center overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
        
        {/* Left Column: Narrative & Logo Signature */}
        <div className="flex flex-col h-full justify-between">
          
          <div className="space-y-8">
            <h2 className="text-6xl md:text-9xl font-serif tracking-tight leading-none">
              About me
            </h2>
            
            <div className="space-y-6 text-gray-400 text-lg md:text-2xl leading-relaxed font-light max-w-xl">
              <p>
                I am a <span className="text-white font-medium">B.Sc. CompSci Specialization NewGrad</span> from UAlberta with a business minor. 
                I am fascinated by how lines of code can solve complex real-world problems.
              </p>
              
              <p>
                When I&apos;m not architecting backends, you&apos;ll find me at the <span className="text-white font-semibold">Gym</span> or playing <span className="text-white font-semibold">Basketball</span>. 
                I&apos;m a self-proclaimed <span className="text-white font-serif italic font-normal">Chef ^^</span> and I love capturing the world through my lens.
              </p>
            </div>
          </div>

          {/* Clean Logo Signature - No extra text, perfectly aligned */}
          <div className="pt-12 md:pt-20 opacity-70 hover:opacity-100 transition-opacity duration-500">
             <div className="relative w-32 h-32 md:w-56 md:h-56">
                <Image 
                  src="/web-logo.svg" 
                  alt="Sagar Murgan Signature" 
                  fill 
                  className="object-contain grayscale" 
                />
             </div>
          </div>
        </div>

        {/* Right Column: The Scenic Click */}
        <div className="relative aspect-[3/4] w-full max-w-lg mx-auto rounded-lg overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.9)] border border-white/10 group">
          <Image 
            src="/SCENE.png" 
            alt="Photography by Sagar"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover transition-transform duration-[2000ms] ease-out group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-700" />
        </div>

      </div>
    </section>
  );
}