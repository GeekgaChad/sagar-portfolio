export default function ReachMe() {
  return (
    <section id="contact" className="py-24 px-6 md:px-20 bg-black text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-16">
        
        {/* Left Side: Big CTA */}
        <div className="space-y-12">
          <h2 className="text-7xl md:text-[10rem] font-serif tracking-tighter leading-none">
            Reach me
          </h2>
          <a 
            href="mailto:msagar2606@gmail.com"
            className="inline-block px-12 py-5 border border-white/40 rounded-full hover:bg-white hover:text-black transition-all duration-500 text-sm uppercase tracking-[0.3em] backdrop-blur-md bg-white/5"
          >
            Send an Email
          </a>
        </div>

        {/* Right Side: Contact Details & Socials */}
        <div className="flex flex-col items-start md:items-end space-y-12 text-left md:text-right w-full md:w-auto">
          <div className="space-y-4">
            <p className="text-2xl md:text-4xl font-light tracking-tight text-white/90">msagar2606@gmail.com</p>
            <p className="text-2xl md:text-4xl font-light tracking-tight text-white/90"> + 1 (780) 965-0000</p>
          </div>

          <div className="flex flex-col md:flex-row gap-6 md:gap-12 text-gray-400 uppercase text-xs tracking-[0.4em] font-medium">
            <a href="https://github.com/GeekgaChad" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Github</a>
            <a href="https://www.linkedin.com/in/sagar-murgan-357756286/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
            <a href="/SagarResume.pdf" download className="hover:text-white transition-colors underline decoration-white/20 underline-offset-8">Download CV</a>
          </div>
        </div>
      </div>

      {/* Footer Branding */}
      <div className="max-w-7xl mx-auto mt-32 pt-8 border-t border-white/5 flex justify-between items-center text-[10px] uppercase tracking-[0.5em] text-gray-600">
        <p>© 2026 Sagar Murgan</p>
        <p>Built with Next.js & Tailwind</p>
      </div>
    </section>
  );
}