export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0A0A0A] py-16 md:py-20 border-t border-[rgba(255,255,255,0.08)]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <div className="font-['Bebas_Neue'] text-[32px] tracking-[2px] mb-3.5">
              INFLU<span className="text-[#D42B2B]">ZY</span>
            </div>
            <p className="text-xs text-[#888] leading-[1.8] max-w-[260px]">
              La première plateforme d'influence marketing et UGC dédiée au marché algérien.
            </p>
          </div>

          <div>
            <h5 className="text-[10px] font-bold tracking-[2px] uppercase text-[rgba(255,255,255,0.35)] mb-4.5">
              Plateforme
            </h5>
            <ul className="space-y-2.5">
              <li>
                <a href="#how" className="text-[13px] text-[#888] hover:text-white transition">
                  Comment ça marche
                </a>
              </li>
              <li>
                <a href="#creators" className="text-[13px] text-[#888] hover:text-white transition">
                  Créateurs
                </a>
              </li>
              <li>
                <a href="#ugc" className="text-[13px] text-[#888] hover:text-white transition">
                  UGC
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-[13px] text-[#888] hover:text-white transition">
                  Tarifs
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="text-[10px] font-bold tracking-[2px] uppercase text-[rgba(255,255,255,0.35)] mb-4.5">
              Compte
            </h5>
            <ul className="space-y-2.5">
              <li>
                <a href="#contact" className="text-[13px] text-[#888] hover:text-white transition">
                  Se connecter
                </a>
              </li>
              <li>
                <a href="#contact" className="text-[13px] text-[#888] hover:text-white transition">
                  Créer un compte
                </a>
              </li>
              <li>
                <a href="#creators" className="text-[13px] text-[#888] hover:text-white transition">
                  Devenir créateur
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="text-[10px] font-bold tracking-[2px] uppercase text-[rgba(255,255,255,0.35)] mb-4.5">
              Contact
            </h5>
            <ul className="space-y-2.5">
              <li>
                <a href="mailto:contact@influzy.dz" className="text-[13px] text-[#888] hover:text-white transition">
                  contact@influzy.dz
                </a>
              </li>
              <li>
                <a href="#" className="text-[13px] text-[#888] hover:text-white transition">
                  WhatsApp
                </a>
              </li>
              <li>
                <a href="#" className="text-[13px] text-[#888] hover:text-white transition">
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[rgba(255,255,255,0.08)] pt-6 flex flex-col sm:flex-row justify-between items-center gap-2 text-[11px] text-[#888]">
          <span>© {currentYear} Influzy. Tous droits réservés.</span>
          <span className="flex items-center gap-1.5">
            🇩🇿 Construit en Algérie
          </span>
        </div>
      </div>
    </footer>
  );
}
