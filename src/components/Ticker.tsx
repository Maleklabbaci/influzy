export default function Ticker() {
  const items = [
    'INFLUENCE MARKETING',
    'UGC AUTHENTIQUE',
    '69 WILAYAS',
    'CRÉATEURS VÉRIFIÉS',
    'ROI MESURABLE',
    'ALGÉRIE',
  ];

  return (
    <div className="bg-[#D42B2B] py-3.5 overflow-hidden border-t border-b border-[rgba(255,255,255,0.1)]">
      <div className="flex gap-0 w-max animate-ticker">
        {[...items, ...items].map((item, index) => (
          <span key={index} className="font-['Bebas_Neue'] text-lg tracking-[3px] whitespace-nowrap px-8 opacity-90">
            {item}
            {index < items.length * 2 - 1 && <span className="text-[rgba(255,255,255,0.4)] ml-8">✦</span>}
          </span>
        ))}
      </div>
    </div>
  );
}
