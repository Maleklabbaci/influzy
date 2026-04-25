export default function UGC() {
  const ugcTypes = [
    {
      icon: '🎬',
      title: 'Vidéos Produits',
      desc: 'Reviews authentiques, unboxings, démonstrations — du contenu qui convertit.',
    },
    {
      icon: '📱',
      title: 'Reels & TikToks',
      desc: 'Formats courts viraux adaptés aux algorithmes actuels.',
    },
    {
      icon: '📸',
      title: 'Photos Lifestyle',
      desc: 'Visuels authentiques pour vos réseaux sociaux et votre site e-commerce.',
    },
    {
      icon: '⭐',
      title: 'Témoignages',
      desc: 'Avis clients filmés — la preuve sociale la plus puissante.',
    },
  ];

  return (
    <section id="ugc" className="bg-[#D42B2B] py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-10 md:gap-20 items-center">
          <div className="fade-left">
            <div className="flex items-center gap-2.5 text-[10px] font-bold tracking-[3px] uppercase text-[rgba(255,255,255,0.7)] mb-4">
              Contenu UGC
              <span className="flex-1 max-w-[40px] h-[1px] bg-[rgba(255,255,255,0.4)]"></span>
            </div>
            <h2 className="font-['Bebas_Neue'] text-[clamp(42px,4vw,60px)] leading-[0.95] tracking-[1px] text-white mb-7">
              LE CONTENU<br />QUI VEND.
            </h2>
            <p className="text-sm text-[rgba(255,255,255,0.75)] leading-[1.8] mb-8">
              Le User Generated Content c'est le format le plus performant en 2025.
              Commanditez du contenu authentique créé par de vrais Algériens —
              pour vos publicités Meta, TikTok, Instagram.
            </p>
            <a
              href="#contact"
              className="inline-block px-9 py-4 bg-white text-[#D42B2B] text-[13px] font-bold tracking-wider uppercase rounded hover:bg-[#0A0A0A] hover:text-white transition"
            >
              Commander du UGC
            </a>
          </div>

          <div className="grid grid-cols-2 gap-3 fade-in">
            {ugcTypes.map((type, index) => (
              <div
                key={index}
                className="bg-[rgba(0,0,0,0.2)] rounded-lg p-5 md:p-4 border border-[rgba(255,255,255,0.15)]"
              >
                <div className="text-2xl mb-3.5">{type.icon}</div>
                <h4 className="font-['Syne'] text-sm font-bold text-white mb-1.5">{type.title}</h4>
                <p className="text-xs text-[rgba(255,255,255,0.65)] leading-[1.6]">{type.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
