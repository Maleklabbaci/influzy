import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function DashboardCreator() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'overview' | 'campaigns' | 'earnings' | 'profile'>('overview');

  const handleLogout = () => {
    localStorage.clear();
    navigate('/');
  };

  const campaigns = [
    {
      id: 1,
      brand: 'TechStore DZ',
      title: 'Campagne Smartphones',
      status: 'active',
      budget: '50,000 DZD',
      deadline: '15 Fév 2025',
      type: 'Instagram Reel',
    },
    {
      id: 2,
      brand: 'BeautyLine',
      title: 'Nouveaux Produits',
      status: 'pending',
      budget: '35,000 DZD',
      deadline: '20 Fév 2025',
      type: 'Story + Post',
    },
    {
      id: 3,
      brand: 'FitGear Pro',
      title: 'Collection Sport',
      status: 'completed',
      budget: '45,000 DZD',
      deadline: '10 Jan 2025',
      type: 'TikTok',
    },
  ];

  const earnings = {
    total: '280,000 DZD',
    thisMonth: '95,000 DZD',
    pending: '50,000 DZD',
    available: '45,000 DZD',
  };

  const stats = {
    totalCampaigns: 12,
    activeCampaigns: 3,
    totalReach: '245K',
    avgEngagement: '8.4%',
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      {/* Sidebar */}
      <aside className="fixed top-0 left-0 h-full w-64 bg-[#1A1A1A] border-r border-[rgba(255,255,255,0.08)] z-40">
        <div className="p-6">
          <a href="/" className="font-['Bebas_Neue'] text-3xl tracking-[2px] text-white">
            INFLU<span className="text-[#D42B2B]">ZY</span>
          </a>
          <div className="mt-2 text-xs text-[#888] uppercase tracking-wider">Créateur</div>
        </div>

        <nav className="px-3 mt-8">
          <button
            onClick={() => setActiveTab('overview')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg mb-2 transition ${
              activeTab === 'overview' ? 'bg-[#D42B2B] text-white' : 'text-[#888] hover:bg-[#0A0A0A] hover:text-white'
            }`}
          >
            <span className="text-lg">📊</span>
            <span className="text-sm font-medium">Vue d'ensemble</span>
          </button>
          <button
            onClick={() => setActiveTab('campaigns')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg mb-2 transition ${
              activeTab === 'campaigns' ? 'bg-[#D42B2B] text-white' : 'text-[#888] hover:bg-[#0A0A0A] hover:text-white'
            }`}
          >
            <span className="text-lg">🎯</span>
            <span className="text-sm font-medium">Campagnes</span>
          </button>
          <button
            onClick={() => setActiveTab('earnings')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg mb-2 transition ${
              activeTab === 'earnings' ? 'bg-[#D42B2B] text-white' : 'text-[#888] hover:bg-[#0A0A0A] hover:text-white'
            }`}
          >
            <span className="text-lg">💰</span>
            <span className="text-sm font-medium">Gains</span>
          </button>
          <button
            onClick={() => setActiveTab('profile')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg mb-2 transition ${
              activeTab === 'profile' ? 'bg-[#D42B2B] text-white' : 'text-[#888] hover:bg-[#0A0A0A] hover:text-white'
            }`}
          >
            <span className="text-lg">👤</span>
            <span className="text-sm font-medium">Profil</span>
          </button>
        </nav>

        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-[rgba(255,255,255,0.08)]">
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-4 py-3 text-[#888] hover:text-white transition"
          >
            <span className="text-lg">🚪</span>
            <span className="text-sm font-medium">Déconnexion</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="ml-64 p-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="font-['Bebas_Neue'] text-5xl text-white mb-2">Tableau de Bord</h1>
          <p className="text-[#888]">Bienvenue, {localStorage.getItem('userName') || 'Créateur'}</p>
        </div>

        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-6">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-[#1A1A1A] border border-[rgba(255,255,255,0.08)] rounded-xl p-6">
                <div className="text-[#888] text-xs uppercase tracking-wider mb-2">Campagnes Totales</div>
                <div className="font-['Bebas_Neue'] text-4xl text-white">{stats.totalCampaigns}</div>
              </div>
              <div className="bg-[#1A1A1A] border border-[rgba(255,255,255,0.08)] rounded-xl p-6">
                <div className="text-[#888] text-xs uppercase tracking-wider mb-2">Actives</div>
                <div className="font-['Bebas_Neue'] text-4xl text-[#D42B2B]">{stats.activeCampaigns}</div>
              </div>
              <div className="bg-[#1A1A1A] border border-[rgba(255,255,255,0.08)] rounded-xl p-6">
                <div className="text-[#888] text-xs uppercase tracking-wider mb-2">Portée Totale</div>
                <div className="font-['Bebas_Neue'] text-4xl text-white">{stats.totalReach}</div>
              </div>
              <div className="bg-[#1A1A1A] border border-[rgba(255,255,255,0.08)] rounded-xl p-6">
                <div className="text-[#888] text-xs uppercase tracking-wider mb-2">Engagement Moy.</div>
                <div className="font-['Bebas_Neue'] text-4xl text-white">{stats.avgEngagement}</div>
              </div>
            </div>

            {/* Earnings Card */}
            <div className="bg-gradient-to-br from-[#D42B2B] to-[#FF3D3D] rounded-xl p-8">
              <h3 className="font-['Bebas_Neue'] text-3xl text-white mb-6">Gains</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div>
                  <div className="text-white/70 text-xs uppercase tracking-wider mb-2">Total</div>
                  <div className="font-['Bebas_Neue'] text-3xl text-white">{earnings.total}</div>
                </div>
                <div>
                  <div className="text-white/70 text-xs uppercase tracking-wider mb-2">Ce Mois</div>
                  <div className="font-['Bebas_Neue'] text-3xl text-white">{earnings.thisMonth}</div>
                </div>
                <div>
                  <div className="text-white/70 text-xs uppercase tracking-wider mb-2">En Attente</div>
                  <div className="font-['Bebas_Neue'] text-3xl text-white">{earnings.pending}</div>
                </div>
                <div>
                  <div className="text-white/70 text-xs uppercase tracking-wider mb-2">Disponible</div>
                  <div className="font-['Bebas_Neue'] text-3xl text-white">{earnings.available}</div>
                </div>
              </div>
              <button className="mt-6 px-6 py-3 bg-white text-[#D42B2B] font-bold text-sm uppercase tracking-wider rounded-lg hover:bg-[#0A0A0A] hover:text-white transition">
                Retirer mes gains
              </button>
            </div>

            {/* Recent Campaigns */}
            <div className="bg-[#1A1A1A] border border-[rgba(255,255,255,0.08)] rounded-xl p-6">
              <h3 className="font-['Bebas_Neue'] text-2xl text-white mb-4">Campagnes Récentes</h3>
              <div className="space-y-3">
                {campaigns.slice(0, 3).map((campaign) => (
                  <div key={campaign.id} className="bg-[#0A0A0A] p-4 rounded-lg border border-[rgba(255,255,255,0.08)]">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h4 className="text-white font-semibold">{campaign.title}</h4>
                        <p className="text-[#888] text-sm">{campaign.brand}</p>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold uppercase ${
                        campaign.status === 'active' ? 'bg-green-500/20 text-green-400' :
                        campaign.status === 'pending' ? 'bg-yellow-500/20 text-yellow-400' :
                        'bg-gray-500/20 text-gray-400'
                      }`}>
                        {campaign.status === 'active' ? 'Active' : campaign.status === 'pending' ? 'En attente' : 'Terminée'}
                      </span>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-[#888]">
                      <span>💰 {campaign.budget}</span>
                      <span>📅 {campaign.deadline}</span>
                      <span>📱 {campaign.type}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Campaigns Tab */}
        {activeTab === 'campaigns' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-['Bebas_Neue'] text-3xl text-white">Mes Campagnes</h2>
              <div className="flex gap-2">
                <button className="px-4 py-2 bg-[#D42B2B] text-white text-xs font-semibold uppercase rounded-lg">Toutes</button>
                <button className="px-4 py-2 bg-[#1A1A1A] text-[#888] text-xs font-semibold uppercase rounded-lg">Actives</button>
                <button className="px-4 py-2 bg-[#1A1A1A] text-[#888] text-xs font-semibold uppercase rounded-lg">Terminées</button>
              </div>
            </div>

            {campaigns.map((campaign) => (
              <div key={campaign.id} className="bg-[#1A1A1A] border border-[rgba(255,255,255,0.08)] rounded-xl p-6 hover:border-[#D42B2B] transition">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-['Syne'] text-xl font-bold text-white mb-1">{campaign.title}</h3>
                    <p className="text-[#888]">{campaign.brand}</p>
                  </div>
                  <span className={`px-4 py-2 rounded-lg text-xs font-semibold uppercase ${
                    campaign.status === 'active' ? 'bg-green-500/20 text-green-400' :
                    campaign.status === 'pending' ? 'bg-yellow-500/20 text-yellow-400' :
                    'bg-gray-500/20 text-gray-400'
                  }`}>
                    {campaign.status === 'active' ? 'Active' : campaign.status === 'pending' ? 'En attente' : 'Terminée'}
                  </span>
                </div>
                <div className="grid grid-cols-3 gap-4 mb-4">
                  <div>
                    <div className="text-[#888] text-xs uppercase tracking-wider mb-1">Budget</div>
                    <div className="text-white font-semibold">{campaign.budget}</div>
                  </div>
                  <div>
                    <div className="text-[#888] text-xs uppercase tracking-wider mb-1">Deadline</div>
                    <div className="text-white font-semibold">{campaign.deadline}</div>
                  </div>
                  <div>
                    <div className="text-[#888] text-xs uppercase tracking-wider mb-1">Type</div>
                    <div className="text-white font-semibold">{campaign.type}</div>
                  </div>
                </div>
                <div className="flex gap-3">
                  <button className="px-6 py-2 bg-[#D42B2B] text-white text-sm font-semibold uppercase rounded-lg hover:bg-[#FF3D3D] transition">
                    Voir détails
                  </button>
                  {campaign.status === 'active' && (
                    <button className="px-6 py-2 bg-[#0A0A0A] text-white text-sm font-semibold uppercase rounded-lg border border-[rgba(255,255,255,0.1)] hover:border-white transition">
                      Soumettre contenu
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Earnings Tab */}
        {activeTab === 'earnings' && (
          <div className="space-y-6">
            <h2 className="font-['Bebas_Neue'] text-3xl text-white mb-6">Mes Gains</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-[#D42B2B] to-[#FF3D3D] rounded-xl p-8">
                <div className="text-white/70 text-xs uppercase tracking-wider mb-2">Total des Gains</div>
                <div className="font-['Bebas_Neue'] text-5xl text-white mb-4">{earnings.total}</div>
                <div className="h-px bg-white/20 my-4"></div>
                <div className="space-y-2">
                  <div className="flex justify-between text-white/90">
                    <span className="text-sm">Ce mois</span>
                    <span className="font-semibold">{earnings.thisMonth}</span>
                  </div>
                  <div className="flex justify-between text-white/90">
                    <span className="text-sm">En attente</span>
                    <span className="font-semibold">{earnings.pending}</span>
                  </div>
                  <div className="flex justify-between text-white/90">
                    <span className="text-sm">Disponible</span>
                    <span className="font-semibold">{earnings.available}</span>
                  </div>
                </div>
              </div>

              <div className="bg-[#1A1A1A] border border-[rgba(255,255,255,0.08)] rounded-xl p-8">
                <h3 className="font-['Bebas_Neue'] text-2xl text-white mb-4">Retirer mes Gains</h3>
                <p className="text-[#888] text-sm mb-6">Montant disponible: {earnings.available}</p>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold tracking-wider uppercase text-[#888] mb-2">
                      Méthode de Paiement
                    </label>
                    <select className="w-full px-4 py-3 bg-[#0A0A0A] border border-[rgba(255,255,255,0.1)] rounded-lg text-white">
                      <option>CCP</option>
                      <option>BaridiMob</option>
                      <option>Virement Bancaire</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold tracking-wider uppercase text-[#888] mb-2">
                      Montant
                    </label>
                    <input
                      type="number"
                      placeholder="Montant en DZD"
                      className="w-full px-4 py-3 bg-[#0A0A0A] border border-[rgba(255,255,255,0.1)] rounded-lg text-white placeholder-[#888]"
                    />
                  </div>
                  <button className="w-full py-3 bg-[#D42B2B] text-white font-bold text-sm uppercase tracking-wider rounded-lg hover:bg-[#FF3D3D] transition">
                    Demander un retrait
                  </button>
                </div>
              </div>
            </div>

            {/* Transaction History */}
            <div className="bg-[#1A1A1A] border border-[rgba(255,255,255,0.08)] rounded-xl p-6">
              <h3 className="font-['Bebas_Neue'] text-2xl text-white mb-4">Historique</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between py-3 border-b border-[rgba(255,255,255,0.08)]">
                  <div>
                    <div className="text-white font-semibold">Campagne TechStore DZ</div>
                    <div className="text-[#888] text-sm">10 Jan 2025</div>
                  </div>
                  <div className="text-green-400 font-bold">+45,000 DZD</div>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-[rgba(255,255,255,0.08)]">
                  <div>
                    <div className="text-white font-semibold">Retrait CCP</div>
                    <div className="text-[#888] text-sm">05 Jan 2025</div>
                  </div>
                  <div className="text-red-400 font-bold">-30,000 DZD</div>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-[rgba(255,255,255,0.08)]">
                  <div>
                    <div className="text-white font-semibold">Campagne BeautyLine</div>
                    <div className="text-[#888] text-sm">28 Déc 2024</div>
                  </div>
                  <div className="text-green-400 font-bold">+35,000 DZD</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Profile Tab */}
        {activeTab === 'profile' && (
          <div className="max-w-3xl space-y-6">
            <h2 className="font-['Bebas_Neue'] text-3xl text-white mb-6">Mon Profil</h2>
            
            <div className="bg-[#1A1A1A] border border-[rgba(255,255,255,0.08)] rounded-xl p-8">
              <div className="flex items-center gap-6 mb-8">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#D42B2B] to-[#FF3D3D] flex items-center justify-center text-white text-4xl font-['Bebas_Neue']">
                  A
                </div>
                <div>
                  <h3 className="font-['Syne'] text-2xl font-bold text-white">Amina Beauty</h3>
                  <p className="text-[#888]">@amina.beautydz</p>
                  <span className="inline-block mt-2 px-3 py-1 bg-green-500/20 text-green-400 text-xs font-semibold uppercase rounded-full">
                    Vérifié
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-semibold tracking-wider uppercase text-[#888] mb-2">
                    Nom complet
                  </label>
                  <input
                    type="text"
                    defaultValue="Amina Benali"
                    className="w-full px-4 py-3 bg-[#0A0A0A] border border-[rgba(255,255,255,0.1)] rounded-lg text-white"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold tracking-wider uppercase text-[#888] mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    defaultValue="amina@example.com"
                    className="w-full px-4 py-3 bg-[#0A0A0A] border border-[rgba(255,255,255,0.1)] rounded-lg text-white"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold tracking-wider uppercase text-[#888] mb-2">
                    Téléphone
                  </label>
                  <input
                    type="tel"
                    defaultValue="0555 12 34 56"
                    className="w-full px-4 py-3 bg-[#0A0A0A] border border-[rgba(255,255,255,0.1)] rounded-lg text-white"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold tracking-wider uppercase text-[#888] mb-2">
                    Wilaya
                  </label>
                  <select className="w-full px-4 py-3 bg-[#0A0A0A] border border-[rgba(255,255,255,0.1)] rounded-lg text-white">
                    <option>Alger</option>
                    <option>Oran</option>
                    <option>Constantine</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold tracking-wider uppercase text-[#888] mb-2">
                    Niche
                  </label>
                  <select className="w-full px-4 py-3 bg-[#0A0A0A] border border-[rgba(255,255,255,0.1)] rounded-lg text-white">
                    <option>Beauté</option>
                    <option>Food</option>
                    <option>Tech</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold tracking-wider uppercase text-[#888] mb-2">
                    Instagram
                  </label>
                  <input
                    type="text"
                    defaultValue="@amina.beautydz"
                    className="w-full px-4 py-3 bg-[#0A0A0A] border border-[rgba(255,255,255,0.1)] rounded-lg text-white"
                  />
                </div>
              </div>

              <button className="mt-6 px-6 py-3 bg-[#D42B2B] text-white font-bold text-sm uppercase tracking-wider rounded-lg hover:bg-[#FF3D3D] transition">
                Sauvegarder
              </button>
            </div>

            {/* Social Stats */}
            <div className="bg-[#1A1A1A] border border-[rgba(255,255,255,0.08)] rounded-xl p-8">
              <h3 className="font-['Bebas_Neue'] text-2xl text-white mb-4">Statistiques Sociales</h3>
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center p-4 bg-[#0A0A0A] rounded-lg">
                  <div className="font-['Bebas_Neue'] text-3xl text-white">14.2K</div>
                  <div className="text-[#888] text-xs uppercase tracking-wider">Abonnés</div>
                </div>
                <div className="text-center p-4 bg-[#0A0A0A] rounded-lg">
                  <div className="font-['Bebas_Neue'] text-3xl text-[#D42B2B]">8.3%</div>
                  <div className="text-[#888] text-xs uppercase tracking-wider">Engagement</div>
                </div>
                <div className="text-center p-4 bg-[#0A0A0A] rounded-lg">
                  <div className="font-['Bebas_Neue'] text-3xl text-white">245K</div>
                  <div className="text-[#888] text-xs uppercase tracking-wider">Portée Moy.</div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
