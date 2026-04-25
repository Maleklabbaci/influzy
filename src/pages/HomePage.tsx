import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Ticker from '../components/Ticker';
import HowItWorks from '../components/HowItWorks';
import Why from '../components/Why';
import Creators from '../components/Creators';
import UGC from '../components/UGC';
import Pricing from '../components/Pricing';
import CTAFinal from '../components/CTAFinal';
import Footer from '../components/Footer';

export default function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileMenuOpen]);

  return (
    <div className="bg-[#0A0A0A] text-[#FAFAFA]">
      <Navbar mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
      <Hero />
      <Ticker />
      <HowItWorks />
      <Why />
      <Creators />
      <UGC />
      <Pricing />
      <CTAFinal />
      <Footer />
    </div>
  );
}
