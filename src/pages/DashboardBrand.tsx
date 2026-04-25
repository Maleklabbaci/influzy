import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function DashboardBrand() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'overview' | 'campaigns' | 'creators' | 'analytics'>('overview');
  const [showCreateCampaign, setShowCreateCampaign] = useState(false);

  const handleLogout = () => {
    localStorage.clear();
    navigate('/');
  };

  const campaigns = [
    {
      id: 1,
      name: 'Campagne Smartphones',
      status: 'active',
      budget: '250,000 DZD',
      creators: 5,
      reach: '125K',
      engagement: '7.2%',
      startDate: '01 Fév 2025',
    },
    {
      id: 2,
      name: 'Collection Hiver',
      status: 'pending',
      budget: '180,000 DZD',
      creators: 3,
      reach: '0',
      engagement: '-',
      startDate: '15 Fév 2025',
    },
    {
      id: 3,
      name: 'Promo Ramadan',
      status: 'completed',
      budget: '300,000 DZD',
      creators: 8,
      reach: '320K',
      engagement: '9.1%',
      startDate: '15 Mar 2024',
    },
  ];

  const creators = [
    {
      id: 1,
      name: 'Amina Beauty',
      handle: '@amina.beautydz',
      niche: 'Beauté',
      followers: '14.2K',
      engagement: '8.3%',
      location: 'Alger',
      image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&q=80',
      verified: true,
    },
    {
      id: 2,
      name: 'Youcef Cuisine',
      handle: '@youcef.cuisine',
      niche: 'Food',
      followers: '9.8K',
      engagement: '11.2%',
      location: 'Oran',
      image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=400&q=80',
      verified: true,
    },
    {
      id: 3,
      name: 'Lina Lifestyle',
      handle: '@lina.lifestyle',
      niche: 'Lifestyle',
      followers: '7.5K',
      engagement: '9.6%',
      location: 'Sétif',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80',
      verified: true,
    },
    {
      id: 4,
      name: 'Tech Karim',
      handle: '@tech.karim',
      niche: 'Tech',
      followers: '11.1K',
      engagement: '6.4%',
      location: 'Annaba',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&q=80',
      verified: true,
    },
  ];

  const stats = {
    totalCampaigns: 15,
    activeCampaigns: 4,
    totalSpent: '2.5M DZD',
    avgROI: '320%',
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      {/* Sidebar */}
      <aside className="fixed top-0 left-0 h-full w-64 bg-[#1A1A1A] border-r border-[rgba(255,255,255,0.08)] z-40">
        <div className="p-6">
          <a href="/" className="font-['Bebas_Neue'] text-3xl tracking-[2px] text-white">
            INFLU<span className="text-[#D42B2B]">ZY</span>
          </a>
          <div className="mt-2 text-xs text-[#888] uppercase tracking-wider">Marque</div>
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
            onClick={() => setActiveTab('creators')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg mb-2 transition ${
              activeTab === 'creators' ? 'bg-[#D42B2B] text-white' : 'text-[#888] hover:bg-[#0A0A0A] hover:text-white'
            }`}
          >
            <span className="text-lg">👥</span>
            <span className="text-sm font-medium">Créateurs</span>
          </button>
          <button
            onClick={() => setActiveTab('analytics')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg mb-2 transition ${
              activeTab === 'analytics' ? 'bg-[#D42B2B] text-white' : 'text-[#888] hover:bg-[#0A0A0A] hover:text-white'
            }`}
          >
            <span className="text-lg">📈</span>
            <span className="text-sm font-medium">Analytics</span>
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
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="font-['Bebas_Neue'] text-5xl text-white mb-2">Tableau de Bord</h1>
            <p className="text-[#888]">Bienvenue, {localStorage.getItem('userName') || 'Marque'}</p>
          </div>
          <button
            onClick={() => setShowCreateCampaign(true)}
            className="px-6 py-3 bg-[#D42B2B] text-white font-bold text-sm uppercase tracking-wider rounded-lg hover:bg-[#FF3D3D] transition flex items-center gap-2"
          >
            <span>➕</span>
            Nouvelle Campagne
          </button>
        </div>

        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-6">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-[#1A1A1A] border border-[rgba(255,255,255,0.08)] rounded-xl p-6">
                <div className="text-[#888] text-xs uppercase tracking-wider mb-2">Total Campagnes</div>
                <div className="font-['Bebas_Neue'] text-4xl text-white">{stats.totalCampaigns}</div>
              </div>
              <div className="bg-[#1A1A1A] border border-[rgba(255,255,255,0.08)] rounded-xl p-6">
                <div className="text-[#888] text-xs uppercase tracking-wider mb-2">Actives</div>
                <div className="font-['Bebas_Neue'] text-4xl text-[#D42B2B]">{stats.activeCampaigns}</div>
              </div>
              <div className="bg-[#1A1A1A] border border-[rgba(255,255,255,0.08)] rounded-xl p-6">
                <div className="text-[#888] text-xs uppercase tracking-wider mb-2">Dépenses</div>
                <div className="font-['Bebas_Neue'] text-4xl text-white">{stats.totalSpent}</div>
              </div>
              <div className="bg-[#1A1A1A] border border-[rgba(255,255,255,0.08)] rounded-xl p-6">
                <div className="text-[#888] text-xs uppercase tracking-wider mb-2">ROI Moyen</div>
                <div className="font-['Bebas_Neue'] text-4xl text-white">{stats.avgROI}</div>
              </div>
            </div>

            {/* Active Campaigns */}
            <div className="bg-[#1A1A1A] border border-[rgba(255,255,255,0.08)] rounded-xl p-6">
              <h3 className="font-['Bebas_Neue'] text-2xl text-white mb-4">Campagnes Actives</h3>
              <div className="space-y-3">
                {campaigns.filter(c => c.status === 'active').map((campaign) => (
                  <div key={campaign.id} className="bg-[#0A0A0A] p-4 rounded-lg border border-[rgba(255,255,255,0.08)]">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h4 className="text-white font-semibold text-lg">{campaign.name}</h4>
                        <p className="text-[#888] text-sm">Budget: {campaign.budget}</p>
                      </div>
                      <span className="px-3 py-1 bg-green-500/20 text-green-400 text-xs font-semibold uppercase rounded-full">
                        Active
                      </span>
                    </div>
                    <div className="grid grid-cols-4 gap-4">
                      <div>
                        <div className="text-[#888] text-xs uppercase mb-1">Créateurs</div>
                        <div className="text-white font-semibold">{campaign.creators}</div>
                      </div>
                      <div>
                        <div className="text-[#888] text-xs uppercase mb-1">Portée</div>
                        <div className="text-white font-semibold">{campaign.reach}</div>
                      </div>
                      <div>
                        <div className="text-[#888] text-xs uppercase mb-1">Engagement</div>
                        <div className="text-white font-semibold">{campaign.engagement}</div>
                      </div>
                      <div>
                        <div className="text-[#888] text-xs uppercase mb-1">Début</div>
                        <div className="text-white font-semibold">{campaign.startDate}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Top Creators */}
            <div className="bg-[#1A1A1A] border border-[rgba(255,255,255,0.08)] rounded-xl p-6">
              <h3 className="font-['Bebas_Neue'] text-2xl text-white mb-4">Top Créateurs</h3>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {creators.slice(0, 4).map((creator) => (
                  <div key={creator.id} className="bg-[#0A0A0A] rounded-lg overflow-hidden">
                    <div className="h-32 bg-cover bg-center" style={{ backgroundImage: `url(${creator.image})` }}></div>
                    <div className="p-3">
                      <h4 className="text-white font-semibold text-sm">{creator.name}</h4>
                      <p className="text-[#888] text-xs">{creator.followers} • {creator.engagement}</p>
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
                    <h3 className="font-['Syne'] text-xl font-bold text-white mb-1">{campaign.name}</h3>
                    <p className="text-[#888]">Créée le {campaign.startDate}</p>
                  </div>
                  <span className={`px-4 py-2 rounded-lg text-xs font-semibold uppercase ${
                    campaign.status === 'active' ? 'bg-green-500/20 text-green-400' :
                    campaign.status === 'pending' ? 'bg-yellow-500/20 text-yellow-400' :
                    'bg-gray-500/20 text-gray-400'
                  }`}>
                    {campaign.status === 'active' ? 'Active' : campaign.status === 'pending' ? 'En attente' : 'Terminée'}
                  </span>
                </div>
                <div className="grid grid-cols-5 gap-4 mb-4">
                  <div>
                    <div className="text-[#888] text-xs uppercase tracking-wider mb-1">Budget</div>
                    <div className="text-white font-semibold">{campaign.budget}</div>
                  </div>
                  <div>
                    <div className="text-[#888] text-xs uppercase tracking-wider mb-1">Créateurs</div>
                    <div className="text-white font-semibold">{campaign.creators}</div>
                  </div>
                  <div>
                    <div className="text-[#888] text-xs uppercase tracking-wider mb-1">Portée</div>
                    <div className="text-white font-semibold">{campaign.reach}</div>
                  </div>
                  <div>
                    <div className="text-[#888] text-xs uppercase tracking-wider mb-1">Engagement</div>
                    <div className="text-white font-semibold">{campaign.engagement}</div>
                  </div>
                  <div>
                    <div className="text-[#888] text-xs uppercase tracking-wider mb-1">Début</div>
                    <div className="text-white font-semibold">{campaign.startDate}</div>
                  </div>
                </div>
                <div className="flex gap-3">
                  <button className="px-6 py-2 bg-[#D42B2B] text-white text-sm font-semibold uppercase rounded-lg hover:bg-[#FF3D3D] transition">
                    Voir détails
                  </button>
                  <button className="px-6 py-2 bg-[#0A0A0A] text-white text-sm font-semibold uppercase rounded-lg border border-[rgba(255,255,255,0.1)] hover:border-white transition">
                    Modifier
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Creators Tab */}
        {activeTab === 'creators' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-['Bebas_Neue'] text-3xl text-white">Catalogue Créateurs</h2>
              <div className="flex gap-2">
                <select className="px-4 py-2 bg-[#1A1A1A] text-white text-sm rounded-lg border border-[rgba(255,255,255,0.1)]">
                  <option>Toutes niches</option>
                  <option>Beauté</option>
                  <option>Food</option>
                  <option>Tech</option>
                </select>
                <select className="px-4 py-2 bg-[#1A1A1A] text-white text-sm rounded-lg border border-[rgba(255,255,255,0.1)]">
                  <option>Toutes wilayas</option>
                  <option>Alger</option>
                  <option>Oran</option>
                  <option>Constantine</option>
                </select>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {creators.map((creator) => (
                <div key={creator.id} className="bg-[#1A1A1A] border border-[rgba(255,255,255,0.08)] rounded-xl overflow-hidden hover:border-[#D42B2B] transition group">
                  <div className="h-48 bg-cover bg-center relative" style={{ backgroundImage: `url(${creator.image})` }}>
                    {creator.verified && (
                      <div className="absolute top-3 left-3 bg-[#D42B2B] px-2 py-1 rounded text-xs font-bold text-white uppercase tracking-wider">
                        Vérifié
                      </div>
                    )}
                  </div>
                  <div className="p-4">
                    <h4 className="font-['Syne'] text-base font-bold text-white mb-1">{creator.name}</h4>
                    <p className="text-[#888] text-xs mb-3">{creator.handle} • {creator.location}</p>
                    <div className="flex gap-3 mb-3">
                      <div>
                        <div className="text-white font-semibold text-sm">{creator.followers}</div>
                        <div className="text-[#888] text-xs">Abonnés</div>
                      </div>
                      <div>
                        <div className="text-white font-semibold text-sm">{creator.engagement}</div>
                        <div className="text-[#888] text-xs">Engage.</div>
                      </div>
                    </div>
                    <span className="inline-block px-2 py-1 bg-[rgba(212,43,43,0.1)] border border-[rgba(212,43,43,0.2)] text-[#D42B2B] text-xs font-semibold uppercase rounded">
                      {creator.niche}
                    </span>
                    <button className="w-full mt-3 py-2 bg-[#D42B2B] text-white text-xs font-bold uppercase rounded hover:bg-[#FF3D3D] transition">
                      Inviter
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Analytics Tab */}
        {activeTab === 'analytics' && (
          <div className="space-y-6">
            <h2 className="font-['Bebas_Neue'] text-3xl text-white mb-6">Analytics & Rapports</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-[#D42B2B] to-[#FF3D3D] rounded-xl p-8">
                <h3 className="font-['Bebas_Neue'] text-3xl text-white mb-4">Performance Globale</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-white/80">Portée Totale</span>
                    <span className="font-['Bebas_Neue'] text-2xl text-white">445K</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white/80">Impressions</span>
                    <span className="font-['Bebas_Neue'] text-2xl text-white">1.2M</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white/80">Engagement Moyen</span>
                    <span className="font-['Bebas_Neue'] text-2xl text-white">8.2%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white/80">ROI Global</span>
                    <span className="font-['Bebas_Neue'] text-2xl text-white">320%</span>
                  </div>
                </div>
              </div>

              <div className="bg-[#1A1A1A] border border-[rgba(255,255,255,0.08)] rounded-xl p-8">
                <h3 className="font-['Bebas_Neue'] text-2xl text-white mb-4">Top Campagnes</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2 border-b border-[rgba(255,255,255,0.08)]">
                    <div>
                      <div className="text-white font-semibold text-sm">Promo Ramadan</div>
                      <div className="text-[#888] text-xs">ROI: 450%</div>
                    </div>
                    <div className="text-green-400 font-bold">320K</div>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-[rgba(255,255,255,0.08)]">
                    <div>
                      <div className="text-white font-semibold text-sm">Smartphones</div>
                      <div className="text-[#888] text-xs">ROI: 280%</div>
                    </div>
                    <div className="text-green-400 font-bold">125K</div>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <div>
                      <div className="text-white font-semibold text-sm">Collection Hiver</div>
                      <div className="text-[#888] text-xs">En cours...</div>
                    </div>
                    <div className="text-[#888] font-bold">-</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#1A1A1A] border border-[rgba(255,255,255,0.08)] rounded-xl p-6">
              <h3 className="font-['Bebas_Neue'] text-2xl text-white mb-4">Engagement par Plateforme</h3>
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center p-6 bg-[#0A0A0A] rounded-lg">
                  <div className="text-3xl mb-2">📱</div>
                  <div className="font-['Bebas_Neue'] text-3xl text-white">Instagram</div>
                  <div className="text-[#D42B2B] font-bold text-xl mt-2">45%</div>
                </div>
                <div className="text-center p-6 bg-[#0A0A0A] rounded-lg">
                  <div className="text-3xl mb-2">🎵</div>
                  <div className="font-['Bebas_Neue'] text-3xl text-white">TikTok</div>
                  <div className="text-[#D42B2B] font-bold text-xl mt-2">35%</div>
                </div>
                <div className="text-center p-6 bg-[#0A0A0A] rounded-lg">
                  <div className="text-3xl mb-2">📘</div>
                  <div className="font-['Bebas_Neue'] text-3xl text-white">Facebook</div>
                  <div className="text-[#D42B2B] font-bold text-xl mt-2">20%</div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Create Campaign Modal */}
      {showCreateCampaign && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-6">
          <div className="bg-[#1A1A1A] border border-[rgba(255,255,255,0.08)] rounded-2xl max-w-2xl w-full p-8 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-['Bebas_Neue'] text-3xl text-white">Nouvelle Campagne</h2>
              <button onClick={() => setShowCreateCampaign(false)} className="text-[#888] hover:text-white text-2xl">✕</button>
            </div>

            <form className="space-y-5">
              <div>
                <label className="block text-xs font-semibold tracking-wider uppercase text-[#888] mb-2">
                  Nom de la campagne
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-[#0A0A0A] border border-[rgba(255,255,255,0.1)] rounded-lg text-white placeholder-[#888] focus:border-[#D42B2B] focus:outline-none transition"
                  placeholder="Ex: Lancement Nouveau Produit"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold tracking-wider uppercase text-[#888] mb-2">
                    Budget (DZD)
                  </label>
                  <input
                    type="number"
                    className="w-full px-4 py-3 bg-[#0A0A0A] border border-[rgba(255,255,255,0.1)] rounded-lg text-white placeholder-[#888] focus:border-[#D42B2B] focus:outline-none transition"
                    placeholder="100000"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold tracking-wider uppercase text-[#888] mb-2">
                    Date de début
                  </label>
                  <input
                    type="date"
                    className="w-full px-4 py-3 bg-[#0A0A0A] border border-[rgba(255,255,255,0.1)] rounded-lg text-white focus:border-[#D42B2B] focus:outline-none transition"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold tracking-wider uppercase text-[#888] mb-2">
                  Plateforme
                </label>
                <select className="w-full px-4 py-3 bg-[#0A0A0A] border border-[rgba(255,255,255,0.1)] rounded-lg text-white focus:border-[#D42B2B] focus:outline-none transition">
                  <option>Instagram</option>
                  <option>TikTok</option>
                  <option>Facebook</option>
                  <option>YouTube</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold tracking-wider uppercase text-[#888] mb-2">
                  Type de contenu
                </label>
                <select className="w-full px-4 py-3 bg-[#0A0A0A] border border-[rgba(255,255,255,0.1)] rounded-lg text-white focus:border-[#D42B2B] focus:outline-none transition">
                  <option>Reel / TikTok</option>
                  <option>Story</option>
                  <option>Post</option>
                  <option>Vidéo longue</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold tracking-wider uppercase text-[#888] mb-2">
                  Description
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 bg-[#0A0A0A] border border-[rgba(255,255,255,0.1)] rounded-lg text-white placeholder-[#888] focus:border-[#D42B2B] focus:outline-none transition resize-none"
                  placeholder="Décrivez votre campagne..."
                />
              </div>

              <div className="flex gap-3 pt-4">
                <button
                  type="submit"
                  className="flex-1 py-3 bg-[#D42B2B] text-white font-bold text-sm uppercase tracking-wider rounded-lg hover:bg-[#FF3D3D] transition"
                >
                  Créer la campagne
                </button>
                <button
                  type="button"
                  onClick={() => setShowCreateCampaign(false)}
                  className="px-6 py-3 bg-[#0A0A0A] text-white font-bold text-sm uppercase tracking-wider rounded-lg border border-[rgba(255,255,255,0.1)] hover:border-white transition"
                >
                  Annuler
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
