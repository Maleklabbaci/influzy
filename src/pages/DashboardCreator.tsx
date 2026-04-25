import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function DashboardCreator() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'overview' | 'campaigns' | 'earnings' | 'profile'>('overview');
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState<'all' | 'active' | 'pending' | 'completed'>('all');
  const [showWithdrawModal, setShowWithdrawModal] = useState(false);
  const [notification, setNotification] = useState<string | null>(null);

  const handleLogout = () => {
    localStorage.clear();
    navigate('/');
  };

  const showNotification = (message: string) => {
    setNotification(message);
    setTimeout(() => setNotification(null), 3000);
  };

  const campaigns = [
    {
      id: 1,
      brand: 'TechStore DZ',
      brandLogo: '🏪',
      title: 'Campagne Smartphones Galaxy',
      status: 'active',
      budget: '50,000 DZD',
      deadline: '15 Fév 2025',
      type: 'Instagram Reel',
      description: 'Créer un Reel de 30-60s présentant les nouvelles fonctionnalités du Samsung Galaxy S24',
      requirements: ['Montrer l\'appareil photo', 'Utiliser trending sound', 'Hashtags fournis'],
      progress: 60,
      submitted: false,
    },
    {
      id: 2,
      brand: 'BeautyLine',
      brandLogo: '💄',
      title: 'Nouveaux Produits Skincare',
      status: 'pending',
      budget: '35,000 DZD',
      deadline: '20 Fév 2025',
      type: 'Story + Post',
      description: 'Story montrant la routine + Post avec avant/après',
      requirements: ['Photo naturelle', 'Mention @beautylinedz', 'Stories 24h minimum'],
      progress: 0,
      submitted: false,
    },
    {
      id: 3,
      brand: 'FitGear Pro',
      brandLogo: '💪',
      title: 'Collection Sport Ramadan',
      status: 'completed',
      budget: '45,000 DZD',
      deadline: '10 Jan 2025',
      type: 'TikTok',
      description: 'Vidéo motivation pour le sport pendant Ramadan',
      requirements: ['Tenue FitGear visible', 'Musique motivante', 'Call to action'],
      progress: 100,
      submitted: true,
    },
    {
      id: 4,
      brand: 'FoodHub',
      brandLogo: '🍕',
      title: 'Menu Spécial Famille',
      status: 'active',
      budget: '30,000 DZD',
      deadline: '25 Fév 2025',
      type: 'Reel + Story',
      description: 'Dégustation en famille avec réaction authentique',
      requirements: ['Montrer le packaging', 'Réaction famille', 'Code promo à partager'],
      progress: 30,
      submitted: false,
    },
    {
      id: 5,
      brand: 'TravelDZ',
      brandLogo: '✈️',
      title: 'Destination Taghit',
      status: 'pending',
      budget: '80,000 DZD',
      deadline: '05 Mar 2025',
      type: 'YouTube Vlog',
      description: 'Vlog complet du voyage à Taghit avec TravelDZ',
      requirements: ['Minimum 10 minutes', 'Montrer les services', 'Drone shots'],
      progress: 0,
      submitted: false,
    },
  ];

  const earnings = {
    total: '280,000 DZD',
    thisMonth: '95,000 DZD',
    pending: '50,000 DZD',
    available: '45,000 DZD',
    nextPayment: '15 Fév 2025',
  };

  const stats = {
    totalCampaigns: 12,
    activeCampaigns: 3,
    completedCampaigns: 7,
    totalReach: '245K',
    avgEngagement: '8.4%',
    totalEarnings: '280K DZD',
  };

  const transactions = [
    { id: 1, type: 'gain', campaign: 'TechStore DZ - Smartphones', amount: '+45,000 DZD', date: '10 Jan 2025', status: 'completed' },
    { id: 2, type: 'retrait', method: 'CCP', amount: '-30,000 DZD', date: '05 Jan 2025', status: 'completed' },
    { id: 3, type: 'gain', campaign: 'BeautyLine - Produits', amount: '+35,000 DZD', date: '28 Déc 2024', status: 'pending' },
    { id: 4, type: 'retrait', method: 'BaridiMob', amount: '-25,000 DZD', date: '20 Déc 2024', status: 'completed' },
    { id: 5, type: 'gain', campaign: 'FitGear - Collection Sport', amount: '+40,000 DZD', date: '15 Déc 2024', status: 'completed' },
  ];

  const filteredCampaigns = campaigns.filter(campaign => {
    const matchesSearch = campaign.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         campaign.brand.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterStatus === 'all' || campaign.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  const handleWithdraw = (e: React.FormEvent) => {
    e.preventDefault();
    setShowWithdrawModal(false);
    showNotification('✅ Demande de retrait envoyée avec succès!');
  };

  const handleSubmitContent = (campaignId: number) => {
    showNotification('✅ Contenu soumis pour validation!');
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      {/* Notification Toast */}
      {notification && (
        <div className="fixed top-4 right-4 z-50 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg animate-fade-in">
          {notification}
        </div>
      )}

      {/* Sidebar */}
      <aside className="fixed top-0 left-0 h-full w-64 bg-[#1A1A1A] border-r border-[rgba(255,255,255,0.08)] z-40">
        <div className="p-6">
          <a href="/" className="font-['Bebas_Neue'] text-3xl tracking-[2px] text-white">
            INFLU<span className="text-[#D42B2B]">ZY</span>
          </a>
          <div className="mt-2 text-xs text-[#888] uppercase tracking-wider">Créateur</div>
          <div className="mt-3 flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#D42B2B] to-[#FF3D3D] flex items-center justify-center text-white text-sm font-bold">
              A
            </div>
            <div>
              <div className="text-white text-sm font-semibold">Amina Beauty</div>
              <div className="text-[#888] text-xs">@amina.beautydz</div>
            </div>
          </div>
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
            {campaigns.filter(c => c.status === 'active').length > 0 && (
              <span className="ml-auto bg-[#D42B2B] text-white text-xs px-2 py-0.5 rounded-full">
                {campaigns.filter(c => c.status === 'active').length}
              </span>
            )}
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
          <h1 className="font-['Bebas_Neue'] text-5xl text-white mb-2">
            {activeTab === 'overview' && 'Tableau de Bord'}
            {activeTab === 'campaigns' && 'Mes Campagnes'}
            {activeTab === 'earnings' && 'Mes Gains'}
            {activeTab === 'profile' && 'Mon Profil'}
          </h1>
          <p className="text-[#888]">Bienvenue, {localStorage.getItem('userName') || 'Amina Beauty'}</p>
        </div>

        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-6">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-[#1A1A1A] border border-[rgba(255,255,255,0.08)] rounded-xl p-6 hover:border-[#D42B2B] transition">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-[#888] text-xs uppercase tracking-wider">Campagnes Totales</div>
                  <span className="text-2xl">📊</span>
                </div>
                <div className="font-['Bebas_Neue'] text-5xl text-white mb-1">{stats.totalCampaigns}</div>
                <div className="text-sm text-green-400">+2 ce mois</div>
              </div>

              <div className="bg-[#1A1A1A] border border-[rgba(255,255,255,0.08)] rounded-xl p-6 hover:border-[#D42B2B] transition">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-[#888] text-xs uppercase tracking-wider">Actives</div>
                  <span className="text-2xl">🎯</span>
                </div>
                <div className="font-['Bebas_Neue'] text-5xl text-[#D42B2B] mb-1">{stats.activeCampaigns}</div>
                <div className="text-sm text-[#888]">En cours</div>
              </div>

              <div className="bg-[#1A1A1A] border border-[rgba(255,255,255,0.08)] rounded-xl p-6 hover:border-[#D42B2B] transition">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-[#888] text-xs uppercase tracking-wider">Terminées</div>
                  <span className="text-2xl">✅</span>
                </div>
                <div className="font-['Bebas_Neue'] text-5xl text-white mb-1">{stats.completedCampaigns}</div>
                <div className="text-sm text-[#888]">Validées</div>
              </div>

              <div className="bg-[#1A1A1A] border border-[rgba(255,255,255,0.08)] rounded-xl p-6 hover:border-[#D42B2B] transition">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-[#888] text-xs uppercase tracking-wider">Portée Totale</div>
                  <span className="text-2xl">👥</span>
                </div>
                <div className="font-['Bebas_Neue'] text-5xl text-white mb-1">{stats.totalReach}</div>
                <div className="text-sm text-[#888]">Impressions</div>
              </div>

              <div className="bg-[#1A1A1A] border border-[rgba(255,255,255,0.08)] rounded-xl p-6 hover:border-[#D42B2B] transition">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-[#888] text-xs uppercase tracking-wider">Engagement</div>
                  <span className="text-2xl">❤️</span>
                </div>
                <div className="font-['Bebas_Neue'] text-5xl text-white mb-1">{stats.avgEngagement}</div>
                <div className="text-sm text-green-400">+1.2% vs dernier mois</div>
              </div>

              <div className="bg-[#1A1A1A] border border-[rgba(255,255,255,0.08)] rounded-xl p-6 hover:border-[#D42B2B] transition">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-[#888] text-xs uppercase tracking-wider">Gains Totaux</div>
                  <span className="text-2xl">💰</span>
                </div>
                <div className="font-['Bebas_Neue'] text-5xl text-white mb-1">{stats.totalEarnings}</div>
                <div className="text-sm text-[#888]">Tout temps</div>
              </div>
            </div>

            {/* Earnings Card */}
            <div className="bg-gradient-to-br from-[#D42B2B] to-[#FF3D3D] rounded-xl p-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-['Bebas_Neue'] text-3xl text-white">Gains Disponibles</h3>
                <button
                  onClick={() => setShowWithdrawModal(true)}
                  className="px-6 py-3 bg-white text-[#D42B2B] font-bold text-sm uppercase tracking-wider rounded-lg hover:bg-[#0A0A0A] hover:text-white transition"
                >
                  Retirer
                </button>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div>
                  <div className="text-white/70 text-xs uppercase tracking-wider mb-2">Disponible</div>
                  <div className="font-['Bebas_Neue'] text-4xl text-white">{earnings.available}</div>
                </div>
                <div>
                  <div className="text-white/70 text-xs uppercase tracking-wider mb-2">En Attente</div>
                  <div className="font-['Bebas_Neue'] text-4xl text-white">{earnings.pending}</div>
                </div>
                <div>
                  <div className="text-white/70 text-xs uppercase tracking-wider mb-2">Ce Mois</div>
                  <div className="font-['Bebas_Neue'] text-4xl text-white">{earnings.thisMonth}</div>
                </div>
                <div>
                  <div className="text-white/70 text-xs uppercase tracking-wider mb-2">Prochain Paiement</div>
                  <div className="font-['Bebas_Neue'] text-2xl text-white">{earnings.nextPayment}</div>
                </div>
              </div>
            </div>

            {/* Active Campaigns Preview */}
            <div className="bg-[#1A1A1A] border border-[rgba(255,255,255,0.08)] rounded-xl p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-['Bebas_Neue'] text-2xl text-white">Campagnes Actives</h3>
                <button onClick={() => setActiveTab('campaigns')} className="text-[#D42B2B] text-sm font-semibold hover:underline">
                  Voir tout →
                </button>
              </div>
              <div className="space-y-3">
                {campaigns.filter(c => c.status === 'active').slice(0, 3).map((campaign) => (
                  <div key={campaign.id} className="bg-[#0A0A0A] p-4 rounded-lg border border-[rgba(255,255,255,0.08)] hover:border-[#D42B2B] transition">
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <span className="text-3xl">{campaign.brandLogo}</span>
                        <div>
                          <h4 className="text-white font-semibold">{campaign.title}</h4>
                          <p className="text-[#888] text-sm">{campaign.brand}</p>
                        </div>
                      </div>
                      <span className="px-3 py-1 bg-green-500/20 text-green-400 text-xs font-semibold uppercase rounded-full">
                        Active
                      </span>
                    </div>
                    <div className="mb-3">
                      <div className="flex items-center justify-between text-xs text-[#888] mb-1">
                        <span>Progression</span>
                        <span>{campaign.progress}%</span>
                      </div>
                      <div className="w-full h-2 bg-[#1A1A1A] rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-[#D42B2B] to-[#FF3D3D] transition-all duration-500"
                          style={{ width: `${campaign.progress}%` }}
                        ></div>
                      </div>
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
          <div className="space-y-6">
            {/* Search & Filters */}
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <input
                  type="text"
                  placeholder="Rechercher une campagne..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-3 bg-[#1A1A1A] border border-[rgba(255,255,255,0.1)] rounded-lg text-white placeholder-[#888] focus:border-[#D42B2B] focus:outline-none transition"
                />
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => setFilterStatus('all')}
                  className={`px-4 py-2 text-xs font-semibold uppercase rounded-lg transition ${
                    filterStatus === 'all' ? 'bg-[#D42B2B] text-white' : 'bg-[#1A1A1A] text-[#888] hover:text-white'
                  }`}
                >
                  Toutes ({campaigns.length})
                </button>
                <button
                  onClick={() => setFilterStatus('active')}
                  className={`px-4 py-2 text-xs font-semibold uppercase rounded-lg transition ${
                    filterStatus === 'active' ? 'bg-[#D42B2B] text-white' : 'bg-[#1A1A1A] text-[#888] hover:text-white'
                  }`}
                >
                  Actives ({campaigns.filter(c => c.status === 'active').length})
                </button>
                <button
                  onClick={() => setFilterStatus('pending')}
                  className={`px-4 py-2 text-xs font-semibold uppercase rounded-lg transition ${
                    filterStatus === 'pending' ? 'bg-[#D42B2B] text-white' : 'bg-[#1A1A1A] text-[#888] hover:text-white'
                  }`}
                >
                  En attente ({campaigns.filter(c => c.status === 'pending').length})
                </button>
                <button
                  onClick={() => setFilterStatus('completed')}
                  className={`px-4 py-2 text-xs font-semibold uppercase rounded-lg transition ${
                    filterStatus === 'completed' ? 'bg-[#D42B2B] text-white' : 'bg-[#1A1A1A] text-[#888] hover:text-white'
                  }`}
                >
                  Terminées ({campaigns.filter(c => c.status === 'completed').length})
                </button>
              </div>
            </div>

            {/* Campaigns List */}
            <div className="space-y-4">
              {filteredCampaigns.map((campaign) => (
                <div key={campaign.id} className="bg-[#1A1A1A] border border-[rgba(255,255,255,0.08)] rounded-xl p-6 hover:border-[#D42B2B] transition">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-4">
                      <span className="text-5xl">{campaign.brandLogo}</span>
                      <div>
                        <h3 className="font-['Syne'] text-xl font-bold text-white mb-1">{campaign.title}</h3>
                        <p className="text-[#888]">{campaign.brand}</p>
                      </div>
                    </div>
                    <span className={`px-4 py-2 rounded-lg text-xs font-semibold uppercase ${
                      campaign.status === 'active' ? 'bg-green-500/20 text-green-400' :
                      campaign.status === 'pending' ? 'bg-yellow-500/20 text-yellow-400' :
                      'bg-gray-500/20 text-gray-400'
                    }`}>
                      {campaign.status === 'active' ? 'Active' : campaign.status === 'pending' ? 'En attente' : 'Terminée'}
                    </span>
                  </div>

                  <p className="text-[#888] text-sm mb-4">{campaign.description}</p>

                  <div className="mb-4">
                    <div className="text-xs text-[#888] mb-2">Exigences:</div>
                    <div className="flex flex-wrap gap-2">
                      {campaign.requirements.map((req, i) => (
                        <span key={i} className="px-3 py-1 bg-[#0A0A0A] text-white text-xs rounded-full border border-[rgba(255,255,255,0.1)]">
                          ✓ {req}
                        </span>
                      ))}
                    </div>
                  </div>

                  {campaign.status === 'active' && (
                    <div className="mb-4">
                      <div className="flex items-center justify-between text-xs text-[#888] mb-2">
                        <span>Progression</span>
                        <span>{campaign.progress}%</span>
                      </div>
                      <div className="w-full h-3 bg-[#0A0A0A] rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-[#D42B2B] to-[#FF3D3D] transition-all duration-500"
                          style={{ width: `${campaign.progress}%` }}
                        ></div>
                      </div>
                    </div>
                  )}

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
                    {campaign.status === 'active' && !campaign.submitted && (
                      <button
                        onClick={() => handleSubmitContent(campaign.id)}
                        className="px-6 py-2 bg-[#0A0A0A] text-white text-sm font-semibold uppercase rounded-lg border border-[rgba(255,255,255,0.1)] hover:border-white transition"
                      >
                        Soumettre contenu
                      </button>
                    )}
                    {campaign.status === 'pending' && (
                      <button className="px-6 py-2 bg-green-500/20 text-green-400 text-sm font-semibold uppercase rounded-lg hover:bg-green-500/30 transition">
                        Accepter
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {filteredCampaigns.length === 0 && (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">🔍</div>
                <div className="text-white text-xl mb-2">Aucune campagne trouvée</div>
                <div className="text-[#888]">Essayez de modifier vos filtres</div>
              </div>
            )}
          </div>
        )}

        {/* Earnings Tab */}
        {activeTab === 'earnings' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-[#D42B2B] to-[#FF3D3D] rounded-xl p-8">
                <div className="text-white/70 text-xs uppercase tracking-wider mb-2">Total des Gains</div>
                <div className="font-['Bebas_Neue'] text-6xl text-white mb-6">{earnings.total}</div>
                <div className="h-px bg-white/20 my-6"></div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-white/70 text-xs mb-1">Ce mois</div>
                    <div className="text-white font-bold text-xl">{earnings.thisMonth}</div>
                  </div>
                  <div>
                    <div className="text-white/70 text-xs mb-1">En attente</div>
                    <div className="text-white font-bold text-xl">{earnings.pending}</div>
                  </div>
                  <div>
                    <div className="text-white/70 text-xs mb-1">Disponible</div>
                    <div className="text-white font-bold text-xl">{earnings.available}</div>
                  </div>
                  <div>
                    <div className="text-white/70 text-xs mb-1">Prochain</div>
                    <div className="text-white font-bold text-sm">{earnings.nextPayment}</div>
                  </div>
                </div>
                <button
                  onClick={() => setShowWithdrawModal(true)}
                  className="mt-6 w-full py-3 bg-white text-[#D42B2B] font-bold text-sm uppercase tracking-wider rounded-lg hover:bg-[#0A0A0A] hover:text-white transition"
                >
                  Retirer mes gains
                </button>
              </div>

              <div className="bg-[#1A1A1A] border border-[rgba(255,255,255,0.08)] rounded-xl p-8">
                <h3 className="font-['Bebas_Neue'] text-3xl text-white mb-6">Répartition des Gains</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-white text-sm">Campagnes terminées</span>
                      <span className="text-white font-bold">235,000 DZD</span>
                    </div>
                    <div className="w-full h-2 bg-[#0A0A0A] rounded-full overflow-hidden">
                      <div className="h-full bg-green-500" style={{ width: '84%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-white text-sm">En cours de validation</span>
                      <span className="text-white font-bold">45,000 DZD</span>
                    </div>
                    <div className="w-full h-2 bg-[#0A0A0A] rounded-full overflow-hidden">
                      <div className="h-full bg-yellow-500" style={{ width: '16%' }}></div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-[rgba(255,255,255,0.08)]">
                  <h4 className="text-white font-semibold mb-4">Moyens de paiement</h4>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 p-3 bg-[#0A0A0A] rounded-lg">
                      <span className="text-2xl">🏦</span>
                      <div className="flex-1">
                        <div className="text-white text-sm font-semibold">CCP</div>
                        <div className="text-[#888] text-xs">Compte Courant Postal</div>
                      </div>
                      <span className="text-green-400 text-xs">✓ Configuré</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-[#0A0A0A] rounded-lg">
                      <span className="text-2xl">📱</span>
                      <div className="flex-1">
                        <div className="text-white text-sm font-semibold">BaridiMob</div>
                        <div className="text-[#888] text-xs">Paiement mobile</div>
                      </div>
                      <span className="text-green-400 text-xs">✓ Configuré</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-[#0A0A0A] rounded-lg opacity-50">
                      <span className="text-2xl">💳</span>
                      <div className="flex-1">
                        <div className="text-white text-sm font-semibold">Virement</div>
                        <div className="text-[#888] text-xs">Compte bancaire</div>
                      </div>
                      <button className="text-[#D42B2B] text-xs font-semibold">Ajouter</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Transaction History */}
            <div className="bg-[#1A1A1A] border border-[rgba(255,255,255,0.08)] rounded-xl p-6">
              <h3 className="font-['Bebas_Neue'] text-2xl text-white mb-4">Historique des Transactions</h3>
              <div className="space-y-3">
                {transactions.map((transaction) => (
                  <div key={transaction.id} className="flex items-center justify-between py-3 border-b border-[rgba(255,255,255,0.08)] hover:bg-[#0A0A0A] px-4 rounded-lg transition">
                    <div className="flex items-center gap-4">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        transaction.type === 'gain' ? 'bg-green-500/20' : 'bg-red-500/20'
                      }`}>
                        <span className="text-xl">{transaction.type === 'gain' ? '💰' : '🏦'}</span>
                      </div>
                      <div>
                        <div className="text-white font-semibold text-sm">
                          {transaction.type === 'gain' ? transaction.campaign : `Retrait ${transaction.method}`}
                        </div>
                        <div className="text-[#888] text-xs">{transaction.date}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className={`font-bold text-lg ${
                        transaction.type === 'gain' ? 'text-green-400' : 'text-red-400'
                      }`}>
                        {transaction.amount}
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        transaction.status === 'completed' ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/20 text-yellow-400'
                      }`}>
                        {transaction.status === 'completed' ? 'Terminé' : 'En attente'}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Profile Tab */}
        {activeTab === 'profile' && (
          <div className="max-w-4xl space-y-6">
            <div className="bg-[#1A1A1A] border border-[rgba(255,255,255,0.08)] rounded-xl p-8">
              <div className="flex items-center gap-6 mb-8">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#D42B2B] to-[#FF3D3D] flex items-center justify-center text-white text-5xl font-['Bebas_Neue'] relative">
                  A
                  <button className="absolute bottom-0 right-0 w-8 h-8 bg-[#0A0A0A] border-2 border-[#1A1A1A] rounded-full flex items-center justify-center hover:bg-[#D42B2B] transition">
                    <span className="text-sm">📷</span>
                  </button>
                </div>
                <div>
                  <h3 className="font-['Syne'] text-3xl font-bold text-white mb-1">Amina Beauty</h3>
                  <p className="text-[#888] mb-2">@amina.beautydz</p>
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center gap-1 px-3 py-1 bg-green-500/20 text-green-400 text-xs font-semibold uppercase rounded-full">
                      <span>✓</span> Vérifié
                    </span>
                    <span className="inline-flex items-center gap-1 px-3 py-1 bg-[#D42B2B]/20 text-[#D42B2B] text-xs font-semibold uppercase rounded-full">
                      <span>⭐</span> Pro
                    </span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <div>
                  <label className="block text-xs font-semibold tracking-wider uppercase text-[#888] mb-2">
                    Nom complet
                  </label>
                  <input
                    type="text"
                    defaultValue="Amina Benali"
                    className="w-full px-4 py-3 bg-[#0A0A0A] border border-[rgba(255,255,255,0.1)] rounded-lg text-white focus:border-[#D42B2B] focus:outline-none transition"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold tracking-wider uppercase text-[#888] mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    defaultValue="amina@example.com"
                    className="w-full px-4 py-3 bg-[#0A0A0A] border border-[rgba(255,255,255,0.1)] rounded-lg text-white focus:border-[#D42B2B] focus:outline-none transition"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold tracking-wider uppercase text-[#888] mb-2">
                    Téléphone
                  </label>
                  <input
                    type="tel"
                    defaultValue="0555 12 34 56"
                    className="w-full px-4 py-3 bg-[#0A0A0A] border border-[rgba(255,255,255,0.1)] rounded-lg text-white focus:border-[#D42B2B] focus:outline-none transition"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold tracking-wider uppercase text-[#888] mb-2">
                    Wilaya
                  </label>
                  <select className="w-full px-4 py-3 bg-[#0A0A0A] border border-[rgba(255,255,255,0.1)] rounded-lg text-white focus:border-[#D42B2B] focus:outline-none transition">
                    <option>Alger</option>
                    <option>Oran</option>
                    <option>Constantine</option>
                    <option>Annaba</option>
                    <option>Sétif</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold tracking-wider uppercase text-[#888] mb-2">
                    Niche principale
                  </label>
                  <select className="w-full px-4 py-3 bg-[#0A0A0A] border border-[rgba(255,255,255,0.1)] rounded-lg text-white focus:border-[#D42B2B] focus:outline-none transition">
                    <option>Beauté</option>
                    <option>Food</option>
                    <option>Tech</option>
                    <option>Lifestyle</option>
                    <option>Fitness</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold tracking-wider uppercase text-[#888] mb-2">
                    Niche secondaire
                  </label>
                  <select className="w-full px-4 py-3 bg-[#0A0A0A] border border-[rgba(255,255,255,0.1)] rounded-lg text-white focus:border-[#D42B2B] focus:outline-none transition">
                    <option>Aucune</option>
                    <option>Fashion</option>
                    <option>Lifestyle</option>
                    <option>Travel</option>
                  </select>
                </div>
              </div>

              <div className="mb-8">
                <label className="block text-xs font-semibold tracking-wider uppercase text-[#888] mb-2">
                  Bio
                </label>
                <textarea
                  rows={4}
                  defaultValue="Passionnée de beauté et skincare 💄 | Partage mes astuces et favoris | Based in Alger 🇩🇿"
                  className="w-full px-4 py-3 bg-[#0A0A0A] border border-[rgba(255,255,255,0.1)] rounded-lg text-white focus:border-[#D42B2B] focus:outline-none transition resize-none"
                />
              </div>

              <button
                onClick={() => showNotification('✅ Profil mis à jour avec succès!')}
                className="px-8 py-3 bg-[#D42B2B] text-white font-bold text-sm uppercase tracking-wider rounded-lg hover:bg-[#FF3D3D] transition"
              >
                Sauvegarder les modifications
              </button>
            </div>

            {/* Social Stats */}
            <div className="bg-[#1A1A1A] border border-[rgba(255,255,255,0.08)] rounded-xl p-8">
              <h3 className="font-['Bebas_Neue'] text-2xl text-white mb-6">Réseaux Sociaux</h3>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-4 p-4 bg-[#0A0A0A] rounded-lg">
                  <span className="text-3xl">📱</span>
                  <div className="flex-1">
                    <div className="text-white font-semibold mb-1">Instagram</div>
                    <input
                      type="text"
                      defaultValue="@amina.beautydz"
                      className="w-full px-3 py-2 bg-[#1A1A1A] border border-[rgba(255,255,255,0.1)] rounded text-white text-sm focus:border-[#D42B2B] focus:outline-none transition"
                    />
                  </div>
                  <div className="text-right">
                    <div className="font-['Bebas_Neue'] text-2xl text-white">14.2K</div>
                    <div className="text-[#888] text-xs">Abonnés</div>
                  </div>
                  <div className="text-right">
                    <div className="font-['Bebas_Neue'] text-2xl text-[#D42B2B]">8.3%</div>
                    <div className="text-[#888] text-xs">Engagement</div>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-[#0A0A0A] rounded-lg">
                  <span className="text-3xl">🎵</span>
                  <div className="flex-1">
                    <div className="text-white font-semibold mb-1">TikTok</div>
                    <input
                      type="text"
                      placeholder="@votre_tiktok"
                      className="w-full px-3 py-2 bg-[#1A1A1A] border border-[rgba(255,255,255,0.1)] rounded text-white text-sm focus:border-[#D42B2B] focus:outline-none transition"
                    />
                  </div>
                  <button className="text-[#D42B2B] text-sm font-semibold">Connecter</button>
                </div>

                <div className="flex items-center gap-4 p-4 bg-[#0A0A0A] rounded-lg">
                  <span className="text-3xl">📺</span>
                  <div className="flex-1">
                    <div className="text-white font-semibold mb-1">YouTube</div>
                    <input
                      type="text"
                      placeholder="@votre_chaine"
                      className="w-full px-3 py-2 bg-[#1A1A1A] border border-[rgba(255,255,255,0.1)] rounded text-white text-sm focus:border-[#D42B2B] focus:outline-none transition"
                    />
                  </div>
                  <button className="text-[#D42B2B] text-sm font-semibold">Connecter</button>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div className="text-center p-4 bg-[#0A0A0A] rounded-lg">
                  <div className="font-['Bebas_Neue'] text-4xl text-white mb-1">245K</div>
                  <div className="text-[#888] text-xs uppercase tracking-wider">Portée Moyenne</div>
                </div>
                <div className="text-center p-4 bg-[#0A0A0A] rounded-lg">
                  <div className="font-['Bebas_Neue'] text-4xl text-[#D42B2B] mb-1">8.4%</div>
                  <div className="text-[#888] text-xs uppercase tracking-wider">Engagement Global</div>
                </div>
                <div className="text-center p-4 bg-[#0A0A0A] rounded-lg">
                  <div className="font-['Bebas_Neue'] text-4xl text-white mb-1">94%</div>
                  <div className="text-[#888] text-xs uppercase tracking-wider">Taux de Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Withdraw Modal */}
      {showWithdrawModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-6">
          <div className="bg-[#1A1A1A] border border-[rgba(255,255,255,0.08)] rounded-2xl max-w-md w-full p-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-['Bebas_Neue'] text-3xl text-white">Retirer mes Gains</h2>
              <button onClick={() => setShowWithdrawModal(false)} className="text-[#888] hover:text-white text-2xl">✕</button>
            </div>

            <div className="mb-6 p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
              <div className="text-green-400 text-sm mb-1">Montant disponible</div>
              <div className="font-['Bebas_Neue'] text-4xl text-white">{earnings.available}</div>
            </div>

            <form onSubmit={handleWithdraw} className="space-y-5">
              <div>
                <label className="block text-xs font-semibold tracking-wider uppercase text-[#888] mb-2">
                  Méthode de Paiement
                </label>
                <select className="w-full px-4 py-3 bg-[#0A0A0A] border border-[rgba(255,255,255,0.1)] rounded-lg text-white focus:border-[#D42B2B] focus:outline-none transition">
                  <option>🏦 CCP - Compte Courant Postal</option>
                  <option>📱 BaridiMob - Paiement Mobile</option>
                  <option>💳 Virement Bancaire</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold tracking-wider uppercase text-[#888] mb-2">
                  Montant à retirer (DZD)
                </label>
                <input
                  type="number"
                  placeholder="Minimum 10,000 DZD"
                  min="10000"
                  max="45000"
                  className="w-full px-4 py-3 bg-[#0A0A0A] border border-[rgba(255,255,255,0.1)] rounded-lg text-white placeholder-[#888] focus:border-[#D42B2B] focus:outline-none transition"
                  required
                />
              </div>

              <div className="p-4 bg-[#0A0A0A] rounded-lg">
                <div className="flex items-center justify-between text-sm mb-2">
                  <span className="text-[#888]">Frais de traitement</span>
                  <span className="text-white">Gratuit</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-[#888]">Délai de traitement</span>
                  <span className="text-white">1-3 jours ouvrés</span>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-[#D42B2B] text-white font-bold text-sm uppercase tracking-wider rounded-lg hover:bg-[#FF3D3D] transition"
              >
                Confirmer le retrait
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
