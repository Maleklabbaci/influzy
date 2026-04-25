export default function CTAFinal() {
  return (
    <section className="bg-[#1A1A1A] py-32 md:py-36 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-['Bebas_Neue'] text-[280px] tracking-[10px] text-[rgba(255,255,255,0.02)] whitespace-nowrap pointer-events-none">
        INFLUZY
      </div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center relative z-10">
        <div className="flex items-center justify-center gap-2.5 text-[10px] font-bold tracking-[3px] uppercase text-[#D42B2B] mb-4 fade-in">
          Prêt ?
          <span className="flex-1 max-w-[40px] h-[1px] bg-[#D42B2B]"></span>
        </div>
        <h2 className="font-['Bebas_Neue'] text-[clamp(52px,7vw,100px)] leading-[0.95] tracking-[1px] max-w-4xl mx-auto mb-7 fade-in">
          VOTRE PROCHAINE<br />CAMPAGNE COMMENCE<br />ICI.
        </h2>
        <p className="text-[15px] text-[#888] max-w-md mx-auto mb-11 leading-[1.8] fade-in">
          Rejoignez les marques algériennes qui font confiance à Influzy pour atteindre leurs audiences.
        </p>
        <div className="flex flex-wrap justify-center gap-3.5 fade-in">
          <a
            href="/auth"
            className="inline-flex items-center gap-2.5 px-9 py-4 bg-[#D42B2B] text-white text-[13px] font-bold tracking-wider uppercase rounded hover:bg-[#FF3D3D] hover:-translate-y-0.5 transition-all"
          >
            Lancer une campagne
            <span className="w-5 h-5 rounded-full bg-[rgba(255,255,255,0.2)] flex items-center justify-center text-xs">→</span>
          </a>
          <a
            href="/auth"
            className="px-9 py-4 bg-transparent text-white text-[13px] font-medium tracking-wider uppercase border border-[rgba(255,255,255,0.2)] rounded hover:border-white transition"
          >
            Devenir créateur
          </a>
        </div>
      </div>
    </section>
  );
}
