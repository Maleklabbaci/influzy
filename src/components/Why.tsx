export default function Why() {
  const features = [
    {
      icon: '🎯',
      title: 'Matching Intelligent',
      desc: 'Algorithme qui filtre par niche, démographie, taux d\'engagement, wilaya. Le bon créateur pour votre marque, en secondes.',
    },
    {
      icon: '✅',
      title: 'Créateurs Vérifiés',
      desc: 'Audit manuel de chaque profil. Détection des faux abonnés. Contrôle qualité du contenu. Que du réel, du vrai.',
    },
    {
      icon: '📊',
      title: 'Analytics Temps Réel',
      desc: 'Suivez vos campagnes en direct. Portée, engagement, conversions — tout dans un seul dashboard clair.',
    },
    {
      icon: '💳',
      title: 'Paiements 100% Locaux',
      desc: 'CCP, BaridiMob, virement bancaire. Paiements sécurisés et libérés après validation du contenu.',
    },
    {
      icon: '🎬',
      title: 'UGC sur Demande',
      desc: 'Commandez du contenu UGC authentique pour vos ads, vos réseaux, votre site — sans shooting professionnel.',
    },
    {
      icon: '🇩🇿',
      title: '69 Wilayas Couvertes',
      desc: 'Créateurs présents dans toute l\'Algérie. Campagnes nationales ou hyper-locales selon vos besoins.',
    },
  ];

  return (
    <section id="why" className="bg-[#0A0A0A] py-20 md:py-25">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex items-center gap-2.5 text-[10px] font-bold tracking-[3px] uppercase text-[#D42B2B] mb-4 fade-in">
          Pourquoi Influzy
          <span className="flex-1 max-w-[40px] h-[1px] bg-[#D42B2B]"></span>
        </div>
        <h2 className="font-['Bebas_Neue'] text-[clamp(48px,5vw,72px)] leading-[0.95] tracking-[1px] mb-4 fade-in">
          CONSTRUIT<br />POUR L'ALGÉRIE.
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-[1px] bg-[rgba(255,255,255,0.08)] mt-16 rounded-lg overflow-hidden">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`bg-[#0A0A0A] p-10 md:p-8 relative overflow-hidden transition-colors hover:bg-[#1A1A1A] group fade-in delay-${index}00`}
            >
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#D42B2B] transform scale-x-0 origin-left transition-transform duration-400 group-hover:scale-x-100"></div>
              <div className="w-11 h-11 rounded-lg bg-[rgba(212,43,43,0.12)] flex items-center justify-center text-xl mb-5">
                {feature.icon}
              </div>
              <h4 className="font-['Syne'] text-[17px] font-bold mb-2.5">{feature.title}</h4>
              <p className="text-[13px] text-[#888] leading-[1.7]">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
