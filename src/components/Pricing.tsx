export default function Pricing() {
  const plans = [
    {
      name: 'Gratuit',
      price: '0',
      currency: 'DZD',
      period: 'Pour commencer',
      features: [
        { text: 'Accès au catalogue', included: true },
        { text: 'Création de campagne', included: true },
        { text: 'Statistiques avancées', included: false },
        { text: 'Rapport de campagne', included: false },
        { text: 'Manager dédié', included: false },
      ],
      popular: false,
    },
    {
      name: 'Basic',
      price: '5K',
      currency: 'DZD/an',
      period: 'Pour les PMEs',
      features: [
        { text: 'Tout Gratuit inclus', included: true },
        { text: 'Outils de campagne', included: true },
        { text: 'Études de cas', included: true },
        { text: 'Rapport complet', included: false },
        { text: 'Manager dédié', included: false },
      ],
      popular: false,
    },
    {
      name: 'VIP',
      price: '50K',
      currency: 'DZD/an',
      period: 'Le plus populaire',
      features: [
        { text: 'Tout Basic inclus', included: true },
        { text: 'Stats pré-campagne', included: true },
        { text: 'Rapport complet', included: true },
        { text: 'Emails de relance', included: true },
        { text: 'Manager dédié', included: false },
      ],
      popular: true,
    },
    {
      name: 'VIP+',
      price: '150K',
      currency: 'DZD/an',
      period: 'Pour les grandes marques',
      features: [
        { text: 'Tout VIP inclus', included: true },
        { text: 'Manager dédié', included: true },
        { text: 'Sélection créateurs', included: true },
        { text: 'Analytics avancés', included: true },
        { text: 'Boost ×3 emails', included: true },
      ],
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="bg-[#0A0A0A] py-20 md:py-25">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex items-center gap-2.5 text-[10px] font-bold tracking-[3px] uppercase text-[#D42B2B] mb-4 fade-in">
          Tarifs
          <span className="flex-1 max-w-[40px] h-[1px] bg-[#D42B2B]"></span>
        </div>
        <h2 className="font-['Bebas_Neue'] text-[clamp(48px,5vw,72px)] leading-[0.95] tracking-[1px] mb-2 fade-in">
          TRANSPARENT.<br />SANS SURPRISES.
        </h2>
        <p className="text-[#888] text-sm mt-2.5 fade-in">Pour les marques. Toujours gratuit pour les créateurs.</p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-16">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`bg-[#1A1A1A] rounded-lg p-8 md:p-6 border relative overflow-hidden transition-all hover:-translate-y-1 hover:border-[rgba(212,43,43,0.3)] fade-in delay-${index}00 ${
                plan.popular ? 'border-[#D42B2B] bg-[#2A2A2A]' : 'border-[rgba(255,255,255,0.08)]'
              }`}
            >
              {plan.popular && (
                <div className="absolute top-4 -right-6 bg-[#D42B2B] text-white text-[8px] font-extrabold tracking-[2px] px-8 py-1 transform rotate-45 origin-center">
                  POPULAIRE
                </div>
              )}
              <div className="font-['Syne'] text-sm font-bold uppercase tracking-wider text-[#888] mb-5">
                {plan.name}
              </div>
              <div className="font-['Bebas_Neue'] text-[52px] tracking-[1px] leading-none text-white mb-1">
                {plan.price} <span className="text-lg text-[#888]">{plan.currency}</span>
              </div>
              <div className="text-[11px] text-[#888] mb-7">{plan.period}</div>
              <ul className="mb-7">
                {plan.features.map((feature, i) => (
                  <li
                    key={i}
                    className={`py-2 border-b border-[rgba(255,255,255,0.08)] text-xs flex items-center gap-2 ${
                      feature.included ? 'text-[rgba(255,255,255,0.65)]' : 'opacity-25 line-through'
                    }`}
                  >
                    <span className="text-[#D42B2B] text-[10px]">→</span>
                    {feature.text}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`block w-full py-3 text-center rounded text-xs font-bold tracking-wider uppercase transition ${
                  plan.popular
                    ? 'bg-[#D42B2B] text-white border border-[#D42B2B] hover:bg-[#FF3D3D]'
                    : 'bg-transparent text-white border border-[rgba(255,255,255,0.15)] hover:bg-[#D42B2B] hover:border-[#D42B2B]'
                }`}
              >
                {plan.name === 'VIP+' ? 'Nous contacter' : `Choisir ${plan.name}`}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
