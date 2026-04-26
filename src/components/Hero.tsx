export default function Hero() {
  return (
    <section className="min-h-screen grid md:grid-cols-2 relative overflow-hidden">
      {/* Left side - content */}
      <div className="flex flex-col justify-center px-6 md:px-12 lg:px-16 py-20 md:py-20 relative z-10">
        <div className="inline-flex items-center gap-2 text-[11px] font-medium tracking-[2px] uppercase text-[#D42B2B] mb-7">
          <span className="w-6 h-[1px] bg-[#D42B2B]"></span>
          Algérie · Influence · UGC
        </div>
        
        <h1 className="font-['Bebas_Neue'] text-[clamp(72px,8vw,110px)] leading-[0.92] tracking-[1px] text-white mb-7">
          LA PLATEFORME
          <em className="text-[#D42B2B] not-italic block">D'INFLUENCE</em>
          <span className="[-webkit-text-stroke:2px_white] text-transparent">ALGÉRIENNE</span>
        </h1>
        
        <p className="text-[15px] font-light leading-[1.8] text-[rgba(255,255,255,0.55)] max-w-md mb-11">
          Connectez votre marque aux créateurs vérifiés dans les 69 wilayas.
          Campagnes d'influence et contenu UGC authentique — zéro budget gaspillé.
        </p>
        
        <div className="flex flex-wrap gap-3.5 mb-14">
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
        
        <div className="flex gap-10">
          <div>
            <h3 className="font-['Bebas_Neue'] text-[42px] tracking-[1px] text-white">
              500<span className="text-[#D42B2B]">+</span>
            </h3>
            <p className="text-[10px] tracking-[2px] uppercase text-[#888] mt-0.5">Créateurs</p>
          </div>
          <div>
            <h3 className="font-['Bebas_Neue'] text-[42px] tracking-[1px] text-white">69</h3>
            <p className="text-[10px] tracking-[2px] uppercase text-[#888] mt-0.5">Wilayas</p>
          </div>
          <div>
            <h3 className="font-['Bebas_Neue'] text-[42px] tracking-[1px] text-white">
              98<span className="text-[#D42B2B]">%</span>
            </h3>
            <p className="text-[10px] tracking-[2px] uppercase text-[#888] mt-0.5">Satisfaction</p>
          </div>
        </div>
      </div>

      {/* Right side - image */}
      <div className="relative overflow-hidden hidden md:block">
        <div
          className="w-full h-full bg-cover bg-center saturate-110 brightness-75"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/33827652/pexels-photo-33827652.jpeg?_gl=1*dbf8wd*_ga*NjA0NjgzODgzLjE3NzUzODUyNzc.*_ga_8JE65Q40S6*czE3NzcxNjQ4MjQkbzYkZzEkdDE3NzcxNjQ5OTIkajU5JGwwJGgw)'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-transparent to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent"></div>
        </div>
        
        {/* Floating badge */}
        <div className="absolute bottom-16 right-10 z-10 bg-[#D42B2B] px-5 py-4 rounded-lg text-center">
          <strong className="font-['Bebas_Neue'] text-4xl block tracking-[1px]">DZ</strong>
          <span className="text-[10px] tracking-[2px] uppercase opacity-80">MADE IN ALGÉRIE</span>
        </div>
      </div>
    </section>
  );
}
