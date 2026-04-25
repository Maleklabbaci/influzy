export default function Creators() {
  const creators = [
    {
      name: 'Amina Beauty',
      handle: '@amina.beautydz',
      location: 'Alger',
      followers: '14.2K',
      engagement: '8.3%',
      niche: 'Beauté',
      image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&q=80',
    },
    {
      name: 'Youcef Cuisine',
      handle: '@youcef.cuisine',
      location: 'Oran',
      followers: '9.8K',
      engagement: '11.2%',
      niche: 'Food',
      image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=400&q=80',
    },
    {
      name: 'Lina Lifestyle',
      handle: '@lina.lifestyle',
      location: 'Sétif',
      followers: '7.5K',
      engagement: '9.6%',
      niche: 'Lifestyle',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80',
    },
    {
      name: 'Tech Karim',
      handle: '@tech.karim',
      location: 'Annaba',
      followers: '11.1K',
      engagement: '6.4%',
      niche: 'Tech',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&q=80',
    },
  ];

  return (
    <section id="creators" className="bg-[#1A1A1A] py-20 md:py-25">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex items-end justify-between mb-11">
          <div>
            <div className="flex items-center gap-2.5 text-[10px] font-bold tracking-[3px] uppercase text-[#D42B2B] mb-4 fade-in">
              Créateurs
              <span className="flex-1 max-w-[40px] h-[1px] bg-[#D42B2B]"></span>
            </div>
            <h2 className="font-['Bebas_Neue'] text-[clamp(48px,5vw,72px)] leading-[0.95] tracking-[1px] fade-in">
              ILS CRÉENT.<br />VOUS VENDEZ.
            </h2>
          </div>
          <a
            href="#contact"
            className="hidden md:block text-xs font-medium tracking-wider uppercase text-[#D42B2B] border-b border-[#D42B2B] pb-0.5 hover:opacity-70 transition fade-in"
          >
            Voir tout le catalogue →
          </a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {creators.map((creator, index) => (
            <div
              key={index}
              className={`bg-[#0A0A0A] rounded-lg overflow-hidden relative cursor-pointer transition-transform hover:-translate-y-1.5 group fade-in delay-${index}00`}
            >
              <div className="h-64 overflow-hidden relative">
                <img
                  src={creator.image}
                  alt={creator.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-3 left-3 bg-[#D42B2B] text-[8px] font-bold tracking-[1.5px] uppercase px-2 py-1 rounded">
                  Vérifié
                </div>
              </div>
              <div className="p-4">
                <h4 className="font-['Syne'] text-[15px] font-bold mb-0.5">{creator.name}</h4>
                <div className="text-[11px] text-[#888] mb-3.5">
                  {creator.handle} · {creator.location}
                </div>
                <div className="flex gap-5 mb-3">
                  <div>
                    <strong className="text-base font-bold block">{creator.followers}</strong>
                    <span className="text-[9px] text-[#888] uppercase tracking-[0.5px]">Abonnés</span>
                  </div>
                  <div>
                    <strong className="text-base font-bold block">{creator.engagement}</strong>
                    <span className="text-[9px] text-[#888] uppercase tracking-[0.5px]">Engage.</span>
                  </div>
                </div>
                <span className="inline-block px-2.5 py-0.5 rounded bg-[rgba(212,43,43,0.1)] border border-[rgba(212,43,43,0.2)] text-[9px] font-semibold text-[#D42B2B] tracking-[0.5px] uppercase">
                  {creator.niche}
                </span>
              </div>
              <div className="absolute inset-0 bg-[rgba(212,43,43,0.85)] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="font-['Bebas_Neue'] text-[22px] tracking-[2px] text-white">COLLABORER →</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
