import { useEffect, useState } from 'react';

interface NavbarProps {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
}

export default function Navbar({ mobileMenuOpen, setMobileMenuOpen }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 px-6 md:px-12 h-18 flex items-center justify-between transition-all duration-300 ${
          scrolled ? 'bg-[rgba(10,10,10,0.92)] backdrop-blur-xl border-b border-[rgba(255,255,255,0.08)]' : ''
        }`}
      >
        <div className="flex items-center">
          <a href="#" className="font-['Bebas_Neue'] text-[28px] tracking-[2px] text-[#FAFAFA]">
            INFLU<span className="text-[#D42B2B]">ZY</span>
          </a>
        </div>

        <div className="hidden md:flex items-center gap-9">
          <a href="#how" className="text-xs font-medium tracking-wider uppercase text-[rgba(255,255,255,0.6)] hover:text-white transition">
            Comment ça marche
          </a>
          <a href="#creators" className="text-xs font-medium tracking-wider uppercase text-[rgba(255,255,255,0.6)] hover:text-white transition">
            Créateurs
          </a>
          <a href="#ugc" className="text-xs font-medium tracking-wider uppercase text-[rgba(255,255,255,0.6)] hover:text-white transition">
            UGC
          </a>
          <a href="#pricing" className="text-xs font-medium tracking-wider uppercase text-[rgba(255,255,255,0.6)] hover:text-white transition">
            Tarifs
          </a>
        </div>

        <div className="flex items-center gap-5">
          <a
            href="/auth"
            className="hidden md:block px-6 py-2.5 bg-[#D42B2B] text-white text-xs font-bold tracking-wider uppercase rounded hover:bg-[#FF3D3D] hover:-translate-y-0.5 transition"
          >
            Commencer
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden flex flex-col gap-[5px] cursor-pointer z-[1000]"
          >
            <span className={`w-[22px] h-[2px] bg-white transition-all ${mobileMenuOpen ? 'rotate-45 translate-y-[7px]' : ''}`}></span>
            <span className={`w-[22px] h-[2px] bg-white transition-all ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-[22px] h-[2px] bg-white transition-all ${mobileMenuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`}></span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 bg-[#0A0A0A] flex flex-col items-center justify-center gap-8 transition-all duration-300 ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <a href="#how" onClick={() => setMobileMenuOpen(false)} className="font-['Bebas_Neue'] text-5xl tracking-[2px] text-white hover:text-[#D42B2B] transition">
          Comment ça marche
        </a>
        <a href="#creators" onClick={() => setMobileMenuOpen(false)} className="font-['Bebas_Neue'] text-5xl tracking-[2px] text-white hover:text-[#D42B2B] transition">
          Créateurs
        </a>
        <a href="#ugc" onClick={() => setMobileMenuOpen(false)} className="font-['Bebas_Neue'] text-5xl tracking-[2px] text-white hover:text-[#D42B2B] transition">
          UGC
        </a>
        <a href="#pricing" onClick={() => setMobileMenuOpen(false)} className="font-['Bebas_Neue'] text-5xl tracking-[2px] text-white hover:text-[#D42B2B] transition">
          Tarifs
        </a>
        <a href="/auth" onClick={() => setMobileMenuOpen(false)} className="font-['Bebas_Neue'] text-5xl tracking-[2px] text-[#D42B2B] hover:text-white transition">
          Commencer →
        </a>
      </div>
    </>
  );
}
