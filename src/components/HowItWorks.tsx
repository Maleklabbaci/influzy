export default function HowItWorks() {
  const steps = [
    {
      num: '01',
      title: 'Créez votre campagne',
      desc: 'Remplissez votre brief en 3 minutes — objectif, budget, plateforme, cible. On s\'occupe du reste.',
    },
    {
      num: '02',
      title: 'Choisissez vos créateurs',
      desc: 'Parcourez notre catalogue de créateurs vérifiés. Filtrez par niche, wilaya, taux d\'engagement.',
    },
    {
      num: '03',
      title: 'Le contenu est publié',
      desc: 'Les créateurs produisent le contenu selon votre brief. Vous validez avant publication.',
    },
    {
      num: '04',
      title: 'Mesurez les résultats',
      desc: 'Rapport complet : portée, engagement, conversions, ROI. En temps réel sur votre dashboard.',
    },
  ];

  return (
    <section id="how" className="bg-[#1A1A1A] py-20 md:py-25">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex items-center gap-2.5 text-[10px] font-bold tracking-[3px] uppercase text-[#D42B2B] mb-4 fade-in">
          Comment ça marche
          <span className="flex-1 max-w-[40px] h-[1px] bg-[#D42B2B]"></span>
        </div>
        <h2 className="font-['Bebas_Neue'] text-[clamp(48px,5vw,72px)] leading-[0.95] tracking-[1px] mb-4 fade-in">
          SIMPLE.<br />RAPIDE.<br />EFFICACE.
        </h2>

        <div className="grid md:grid-cols-2 gap-10 md:gap-20 items-center mt-16">
          <div className="hidden md:block relative fade-left">
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80"
              alt="Équipe"
              className="rounded-lg w-full aspect-[3/4] object-cover saturate-120 brightness-85"
            />
            <div className="absolute inset-0 rounded-lg bg-gradient-to-t from-[#1A1A1A] via-transparent to-transparent"></div>
            <div className="absolute bottom-7 left-7 right-7 font-['Bebas_Neue'] text-[32px] tracking-[1px] leading-none text-white">
              De l'idée<br />au résultat.
            </div>
          </div>

          <div className="flex flex-col gap-0">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`py-7 border-b border-[rgba(255,255,255,0.08)] flex gap-6 items-start cursor-default transition-all hover:pl-2 fade-in delay-${index}00`}
              >
                <div className="font-['Bebas_Neue'] text-5xl leading-none text-[rgba(255,255,255,0.08)] min-w-[52px] transition-colors group-hover:text-[#D42B2B]">
                  {step.num}
                </div>
                <div>
                  <h4 className="font-['Syne'] text-lg font-bold mb-1.5">{step.title}</h4>
                  <p className="text-[13px] text-[#888] leading-[1.7]">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
