import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function DashboardAdmin() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'overview' | 'users' | 'campaigns' | 'payments' | 'revenue' | 'settings'>('overview');

  const handleLogout = () => {
    localStorage.clear();
    navigate('/');
  };

  // 💰 REVENUS PLATEFORME
  const platformRevenue = {
    totalRevenue: '2,850,000 DZD',      // Total tout temps
    thisMonth: '485,000 DZD',           // Ce mois
    lastMonth: '420,000 DZD',           // Mois dernier
    growth: '+15.5%',                   // Croissance
    
    // Breakdown par source
    commissionRevenue: '1,920,000 DZD', // 67% - Commissions campagnes
    subscriptionRevenue: '780,000 DZD', // 27% - Abonnements marques
    serviceRevenue: '150,000 DZD',      // 6% - Services additionnels
    
    // Ce mois détaillé
    monthlyCommissions: '325,000 DZD',  // Commissions ce mois
    monthlySubscriptions: '140,000 DZD', // Abonnements ce mois
    monthlyServices: '20,000 DZD',      // Services ce mois
  };

  // 📊 STATS COMMISSIONS
  const commissionStats = {
    totalCampaigns: 48,                 // Campagnes actives
    avgCampaignValue: '180,000 DZD',    // Valeur moyenne campagne
    avgCommission: '27,000 DZD',        // Commission moyenne (15%)
    commissionRate: '15%',              // Taux de commission
    totalCommissionsCollected: '1,920,000 DZD', // Total commissions
  };

  // 💳 ABONNEMENTS ACTIFS
  const subscriptions = [
    { id: 1, brand: 'TechStore DZ', plan: 'VIP+', price: '150,000 DZD/an', status: 'active', renewDate: '15 Mar 2025', campaigns: 12 },
    { id: 2, brand: 'BeautyLine', plan: 'VIP', price: '50,000 DZD/an', status: 'active', renewDate: '20 Fév 2025', campaigns: 8 },
    { id: 3, brand: 'FitGear Pro', plan: 'VIP', price: '50,000 DZD/an', status: 'active', renewDate: '10 Mar 2025', campaigns: 6 },
    { id: 4, brand: 'FoodHub', plan: 'Basic', price: '5,000 DZD/an', status: 'active', renewDate: '25 Fév 2025', campaigns: 2 },
    { id: 5, brand: 'TravelDZ', plan: 'VIP+', price: '150,000 DZD/an', status: 'pending', renewDate: '05 Mar 2025', campaigns: 0 },
  ];

  // 💰 TRANSACTIONS RÉCENTES (avec commissions)
  const recentTransactions = [
    {
      id: 1,
      type: 'campaign_commission',
      campaign: 'TechStore - Smartphones',
      brand: 'TechStore DZ',
      amount: '250,000 DZD',
      commission: '37,500 DZD',
      date: '10 Fév 2025',
      status: 'collected',
    },
    {
      id: 2,
      type: 'subscription',
      brand: 'BeautyLine',
      plan: 'VIP',
      amount: '50,000 DZD',
      commission: '50,000 DZD',
      date: '08 Fév 2025',
      status: 'collected',
    },
    {
      id: 3,
      type: 'campaign_commission',
      campaign: 'FitGear - Collection',
      brand: 'FitGear Pro',
      amount: '180,000 DZD',
      commission: '27,000 DZD',
      date: '05 Fév 2025',
      status: 'collected',
    },
    {
      id: 4,
      type: 'ugc_service',
      brand: 'FoodHub',
      service: 'Pack 5 vidéos UGC',
      amount: '120,000 DZD',
      commission: '18,000 DZD',
      date: '03 Fév 2025',
      status: 'pending',
    },
  ];

  // 💸 PAIEMENTS À EFFECTUER (vers créateurs)
  const pendingPayments = [
    { id: 1, creator: 'Amina Beauty', campaign: 'TechStore Campaign', amount: '45,000 DZD', platformKeeps: '6,750 DZD', method: 'CCP', date: '10 Fév' },
    { id: 2, creator: 'Youcef Cuisine', campaign: 'Food Promo', amount: '35,000 DZD', platformKeeps: '5,250 DZD', method: 'BaridiMob', date: '10 Fév' },
    { id: 3, creator: 'Lina Lifestyle', campaign: 'Fashion Week', amount: '28,000 DZD', platformKeeps: '4,200 DZD', method: 'Virement', date: '09 Fév' },
  ];

  const stats = {
    totalUsers: 1245,
    brands: 245,
    creators: 1000,
    activeCampaigns: 48,
    totalRevenue: platformRevenue.totalRevenue,
    monthlyRevenue: platformRevenue.thisMonth,
    pendingPayments: pendingPayments.length,
  };

  const recentUsers = [
    { id: 1, name: 'Sarah Tech Store', type: 'brand', email: 'sarah@techstore.dz', date: '10 Fév 2025', status: 'active', plan: 'VIP+' },
    { id: 2, name: 'Amina Beauty', type: 'creator', email: 'amina@example.com', date: '10 Fév 2025', status: 'pending', plan: 'Free' },
    { id: 3, name: 'Mohamed Food', type: 'creator', email: 'mohamed@example.com', date: '09 Fév 2025', status: 'active', plan: 'Free' },
    { id: 4, name: 'FitGear Pro', type: 'brand', email: 'contact@fitgear.dz', date: '09 Fév 2025', status: 'active', plan: 'VIP' },
  ];

  const recentCampaigns = [
    { id: 1, name: 'Campagne Smartphones', brand: 'TechStore DZ', budget: '250,000 DZD', commission: '37,500 DZD', status: 'active', creators: 5 },
    { id: 2, name: 'Collection Hiver', brand: 'Fashion House', budget: '180,000 DZD', commission: '27,000 DZD', status: 'pending', creators: 3 },
    { id: 3, name: 'Promo Ramadan', brand: 'BeautyLine', budget: '300,000 DZD', commission: '45,000 DZD', status: 'completed', creators: 8 },
  ];

  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      {/* Sidebar */}
      <aside className="fixed top-0 left-0 h-full w-64 bg-[#1A1A1A] border-r border-[rgba(255,255,255,0.08)] z-40">
        <div className="p-6">
          <a href="/" className="font-['Bebas_Neue'] text-3xl tracking-[2px] text-white">
            INFLU<span className="text-[#D42B2B]">ZY</span>
          </a>
          <div className="mt-2 text-xs text-[#888] uppercase tracking-wider">Admin Panel</div>
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
            onClick={() => setActiveTab('revenue')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg mb-2 transition ${
              activeTab === 'revenue' ? 'bg-[#D42B2B] text-white' : 'text-[#888] hover:bg-[#0A0A0A] hover:text-white'
            }`}
          >
            <span className="text-lg">💰</span>
            <span className="text-sm font-medium">Revenus</span>
          </button>
          <button
            onClick={() => setActiveTab('users')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg mb-2 transition ${
              activeTab === 'users' ? 'bg-[#D42B2B] text-white' : 'text-[#888] hover:bg-[#0A0A0A] hover:text-white'
            }`}
          >
            <span className="text-lg">👥</span>
            <span className="text-sm font-medium">Utilisateurs</span>
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
            onClick={() => setActiveTab('payments')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg mb-2 transition ${
              activeTab === 'payments' ? 'bg-[#D42B2B] text-white' : 'text-[#888] hover:bg-[#0A0A0A] hover:text-white'
            }`}
          >
            <span className="text-lg">💳</span>
            <span className="text-sm font-medium">Paiements</span>
            {pendingPayments.length > 0 && (
              <span className="ml-auto bg-[#D42B2B] text-white text-xs px-2 py-0.5 rounded-full">
                {pendingPayments.length}
              </span>
            )}
          </button>
          <button
            onClick={() => setActiveTab('settings')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg mb-2 transition ${
              activeTab === 'settings' ? 'bg-[#D42B2B] text-white' : 'text-[#888] hover:bg-[#0A0A0A] hover:text-white'
            }`}
          >
            <span className="text-lg">⚙️</span>
            <span className="text-sm font-medium">Paramètres</span>
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
        <div className="mb-8">
          <h1 className="font-['Bebas_Neue'] text-5xl text-white mb-2">Admin Dashboard</h1>
          <p className="text-[#888]">Gestion complète de la plateforme Influzy</p>
        </div>

        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-6">
            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-[#1A1A1A] border border-[rgba(255,255,255,0.08)] rounded-xl p-6">
                <div className="text-[#888] text-xs uppercase tracking-wider mb-2">Total Utilisateurs</div>
                <div className="font-['Bebas_Neue'] text-4xl text-white mb-1">{stats.totalUsers}</div>
                <div className="text-xs text-green-400">+12% ce mois</div>
              </div>
              <div className="bg-[#1A1A1A] border border-[rgba(255,255,255,0.08)] rounded-xl p-6">
                <div className="text-[#888] text-xs uppercase tracking-wider mb-2">Marques</div>
                <div className="font-['Bebas_Neue'] text-4xl text-white mb-1">{stats.brands}</div>
                <div className="text-xs text-green-400">+8% ce mois</div>
              </div>
              <div className="bg-[#1A1A1A] border border-[rgba(255,255,255,0.08)] rounded-xl p-6">
                <div className="text-[#888] text-xs uppercase tracking-wider mb-2">Créateurs</div>
                <div className="font-['Bebas_Neue'] text-4xl text-white mb-1">{stats.creators}</div>
                <div className="text-xs text-green-400">+15% ce mois</div>
              </div>
              <div className="bg-[#1A1A1A] border border-[rgba(255,255,255,0.08)] rounded-xl p-6">
                <div className="text-[#888] text-xs uppercase tracking-wider mb-2">Campagnes Actives</div>
                <div className="font-['Bebas_Neue'] text-4xl text-[#D42B2B] mb-1">{stats.activeCampaigns}</div>
                <div className="text-xs text-[#888]">En cours</div>
              </div>
            </div>

            {/* Revenue Card */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-[#D42B2B] to-[#FF3D3D] rounded-xl p-8">
                <h3 className="font-['Bebas_Neue'] text-3xl text-white mb-6">💰 Revenus Plateforme</h3>
                <div className="space-y-4">
                  <div>
                    <div className="text-white/70 text-xs uppercase tracking-wider mb-1">Total (Tout temps)</div>
                    <div className="font-['Bebas_Neue'] text-5xl text-white">{platformRevenue.totalRevenue}</div>
                  </div>
                  <div className="h-px bg-white/20"></div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-white/70 text-xs mb-1">Ce mois</div>
                      <div className="text-white font-bold text-xl">{platformRevenue.thisMonth}</div>
                    </div>
                    <div>
                      <div className="text-white/70 text-xs mb-1">Croissance</div>
                      <div className="text-white font-bold text-xl">{platformRevenue.growth}</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-[#1A1A1A] border border-[rgba(255,255,255,0.08)] rounded-xl p-8">
                <h3 className="font-['Bebas_Neue'] text-3xl text-white mb-6">Paiements en Attente</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-[#888]">Nombre de demandes</span>
                    <span className="font-['Bebas_Neue'] text-3xl text-[#D42B2B]">{stats.pendingPayments}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[#888]">Montant total</span>
                    <span className="font-['Bebas_Neue'] text-2xl text-white">
                      {pendingPayments.reduce((sum, p) => sum + parseInt(p.amount.replace(/[^\d]/g, '')), 0).toLocaleString()} DZD
                    </span>
                  </div>
                  <button
                    onClick={() => setActiveTab('payments')}
                    className="w-full py-3 bg-[#D42B2B] text-white font-bold text-sm uppercase tracking-wider rounded-lg hover:bg-[#FF3D3D] transition"
                  >
                    Gérer les paiements
                  </button>
                </div>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-[#1A1A1A] border border-[rgba(255,255,255,0.08)] rounded-xl p-6">
                <h3 className="font-['Bebas_Neue'] text-2xl text-white mb-4">Nouveaux Utilisateurs</h3>
                <div className="space-y-3">
                  {recentUsers.slice(0, 4).map((user) => (
                    <div key={user.id} className="flex items-center justify-between py-2 border-b border-[rgba(255,255,255,0.08)]">
                      <div>
                        <div className="text-white font-semibold text-sm">{user.name}</div>
                        <div className="text-[#888] text-xs">{user.email}</div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className={`px-2 py-1 rounded text-xs font-semibold ${
                          user.type === 'brand' ? 'bg-blue-500/20 text-blue-400' : 'bg-purple-500/20 text-purple-400'
                        }`}>
                          {user.type === 'brand' ? 'Marque' : 'Créateur'}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-[#1A1A1A] border border-[rgba(255,255,255,0.08)] rounded-xl p-6">
                <h3 className="font-['Bebas_Neue'] text-2xl text-white mb-4">Campagnes Récentes</h3>
                <div className="space-y-3">
                  {recentCampaigns.map((campaign) => (
                    <div key={campaign.id} className="flex items-center justify-between py-2 border-b border-[rgba(255,255,255,0.08)]">
                      <div>
                        <div className="text-white font-semibold text-sm">{campaign.name}</div>
                        <div className="text-[#888] text-xs">{campaign.brand} • {campaign.creators} créateurs</div>
                      </div>
                      <div className="text-right">
                        <div className="text-green-400 text-sm font-bold">+{campaign.commission}</div>
                        <div className="text-[#888] text-xs">Commission</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Revenue Tab - NOUVELLE SECTION! */}
        {activeTab === 'revenue' && (
          <div className="space-y-6">
            <h2 className="font-['Bebas_Neue'] text-3xl text-white">💰 Gestion des Revenus</h2>

            {/* Revenue Overview */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-gradient-to-br from-green-600 to-green-700 rounded-xl p-6">
                <div className="text-white/70 text-xs uppercase tracking-wider mb-2">Commissions Campagnes</div>
                <div className="font-['Bebas_Neue'] text-4xl text-white mb-2">{platformRevenue.commissionRevenue}</div>
                <div className="text-white/80 text-sm">67% du revenu total</div>
                <div className="mt-4 text-green-200 text-sm">+{platformRevenue.monthlyCommissions} ce mois</div>
              </div>

              <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl p-6">
                <div className="text-white/70 text-xs uppercase tracking-wider mb-2">Abonnements</div>
                <div className="font-['Bebas_Neue'] text-4xl text-white mb-2">{platformRevenue.subscriptionRevenue}</div>
                <div className="text-white/80 text-sm">27% du revenu total</div>
                <div className="mt-4 text-blue-200 text-sm">+{platformRevenue.monthlySubscriptions} ce mois</div>
              </div>

              <div className="bg-gradient-to-br from-purple-600 to-purple-700 rounded-xl p-6">
                <div className="text-white/70 text-xs uppercase tracking-wider mb-2">Services (UGC, etc.)</div>
                <div className="font-['Bebas_Neue'] text-4xl text-white mb-2">{platformRevenue.serviceRevenue}</div>
                <div className="text-white/80 text-sm">6% du revenu total</div>
                <div className="mt-4 text-purple-200 text-sm">+{platformRevenue.monthlyServices} ce mois</div>
              </div>
            </div>

            {/* Commission Details */}
            <div className="bg-[#1A1A1A] border border-[rgba(255,255,255,0.08)] rounded-xl p-6">
              <h3 className="font-['Bebas_Neue'] text-2xl text-white mb-6">📊 Détails Commissions</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center p-4 bg-[#0A0A0A] rounded-lg">
                  <div className="text-[#888] text-xs uppercase mb-2">Taux Commission</div>
                  <div className="font-['Bebas_Neue'] text-3xl text-[#D42B2B]">{commissionStats.commissionRate}</div>
                </div>
                <div className="text-center p-4 bg-[#0A0A0A] rounded-lg">
                  <div className="text-[#888] text-xs uppercase mb-2">Commission Moyenne</div>
                  <div className="font-['Bebas_Neue'] text-2xl text-white">{commissionStats.avgCommission}</div>
                </div>
                <div className="text-center p-4 bg-[#0A0A0A] rounded-lg">
                  <div className="text-[#888] text-xs uppercase mb-2">Valeur Moy. Campagne</div>
                  <div className="font-['Bebas_Neue'] text-2xl text-white">{commissionStats.avgCampaignValue}</div>
                </div>
                <div className="text-center p-4 bg-[#0A0A0A] rounded-lg">
                  <div className="text-[#888] text-xs uppercase mb-2">Total Collecté</div>
                  <div className="font-['Bebas_Neue'] text-2xl text-white">{commissionStats.totalCommissionsCollected}</div>
                </div>
              </div>
            </div>

            {/* Active Subscriptions */}
            <div className="bg-[#1A1A1A] border border-[rgba(255,255,255,0.08)] rounded-xl p-6">
              <h3 className="font-['Bebas_Neue'] text-2xl text-white mb-4">💳 Abonnements Actifs</h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-[#0A0A0A]">
                    <tr>
                      <th className="text-left p-4 text-xs font-semibold uppercase tracking-wider text-[#888]">Marque</th>
                      <th className="text-left p-4 text-xs font-semibold uppercase tracking-wider text-[#888]">Plan</th>
                      <th className="text-left p-4 text-xs font-semibold uppercase tracking-wider text-[#888]">Prix</th>
                      <th className="text-left p-4 text-xs font-semibold uppercase tracking-wider text-[#888]">Renouvellement</th>
                      <th className="text-left p-4 text-xs font-semibold uppercase tracking-wider text-[#888]">Campagnes</th>
                      <th className="text-left p-4 text-xs font-semibold uppercase tracking-wider text-[#888]">Statut</th>
                    </tr>
                  </thead>
                  <tbody>
                    {subscriptions.map((sub) => (
                      <tr key={sub.id} className="border-t border-[rgba(255,255,255,0.08)] hover:bg-[#0A0A0A] transition">
                        <td className="p-4 text-white font-semibold">{sub.brand}</td>
                        <td className="p-4">
                          <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                            sub.plan === 'VIP+' ? 'bg-[#D42B2B]/20 text-[#D42B2B]' :
                            sub.plan === 'VIP' ? 'bg-purple-500/20 text-purple-400' :
                            'bg-gray-500/20 text-gray-400'
                          }`}>
                            {sub.plan}
                          </span>
                        </td>
                        <td className="p-4 text-white font-bold">{sub.price}</td>
                        <td className="p-4 text-[#888]">{sub.renewDate}</td>
                        <td className="p-4 text-white">{sub.campaigns}</td>
                        <td className="p-4">
                          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                            sub.status === 'active' ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/20 text-yellow-400'
                          }`}>
                            {sub.status === 'active' ? 'Actif' : 'En attente'}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="mt-4 p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
                <div className="flex items-center justify-between">
                  <span className="text-green-400 text-sm font-semibold">Revenu mensuel récurrent (MRR)</span>
                  <span className="font-['Bebas_Neue'] text-2xl text-green-400">25,000 DZD/mois</span>
                </div>
              </div>
            </div>

            {/* Recent Transactions avec Commissions */}
            <div className="bg-[#1A1A1A] border border-[rgba(255,255,255,0.08)] rounded-xl p-6">
              <h3 className="font-['Bebas_Neue'] text-2xl text-white mb-4">💸 Transactions Récentes</h3>
              <div className="space-y-3">
                {recentTransactions.map((tx) => (
                  <div key={tx.id} className="flex items-center justify-between p-4 bg-[#0A0A0A] rounded-lg hover:bg-[#1A1A1A] transition">
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                        tx.type === 'campaign_commission' ? 'bg-green-500/20' :
                        tx.type === 'subscription' ? 'bg-blue-500/20' :
                        'bg-purple-500/20'
                      }`}>
                        <span className="text-2xl">
                          {tx.type === 'campaign_commission' ? '💰' :
                           tx.type === 'subscription' ? '💳' : '🎬'}
                        </span>
                      </div>
                      <div>
                        <div className="text-white font-semibold text-sm">
                          {tx.type === 'campaign_commission' && tx.campaign}
                          {tx.type === 'subscription' && `Abonnement ${tx.plan}`}
                          {tx.type === 'ugc_service' && tx.service}
                        </div>
                        <div className="text-[#888] text-xs">{tx.brand} • {tx.date}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-white font-bold text-lg">{tx.amount}</div>
                      <div className="text-green-400 font-bold text-sm">Influzy: +{tx.commission}</div>
                      <span className={`inline-block mt-1 px-2 py-0.5 rounded text-xs font-semibold ${
                        tx.status === 'collected' ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/20 text-yellow-400'
                      }`}>
                        {tx.status === 'collected' ? 'Collecté' : 'En attente'}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Users Tab - Keep existing */}
        {activeTab === 'users' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="font-['Bebas_Neue'] text-3xl text-white">Gestion Utilisateurs</h2>
              <div className="flex gap-2">
                <button className="px-4 py-2 bg-[#D42B2B] text-white text-xs font-semibold uppercase rounded-lg">Tous</button>
                <button className="px-4 py-2 bg-[#1A1A1A] text-[#888] text-xs font-semibold uppercase rounded-lg">Marques</button>
                <button className="px-4 py-2 bg-[#1A1A1A] text-[#888] text-xs font-semibold uppercase rounded-lg">Créateurs</button>
              </div>
            </div>

            <div className="bg-[#1A1A1A] border border-[rgba(255,255,255,0.08)] rounded-xl overflow-hidden">
              <table className="w-full">
                <thead className="bg-[#0A0A0A]">
                  <tr>
                    <th className="text-left p-4 text-xs font-semibold uppercase tracking-wider text-[#888]">Utilisateur</th>
                    <th className="text-left p-4 text-xs font-semibold uppercase tracking-wider text-[#888]">Type</th>
                    <th className="text-left p-4 text-xs font-semibold uppercase tracking-wider text-[#888]">Plan</th>
                    <th className="text-left p-4 text-xs font-semibold uppercase tracking-wider text-[#888]">Email</th>
                    <th className="text-left p-4 text-xs font-semibold uppercase tracking-wider text-[#888]">Date</th>
                    <th className="text-left p-4 text-xs font-semibold uppercase tracking-wider text-[#888]">Statut</th>
                    <th className="text-left p-4 text-xs font-semibold uppercase tracking-wider text-[#888]">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {recentUsers.map((user) => (
                    <tr key={user.id} className="border-t border-[rgba(255,255,255,0.08)] hover:bg-[#0A0A0A] transition">
                      <td className="p-4">
                        <div className="font-semibold text-white">{user.name}</div>
                      </td>
                      <td className="p-4">
                        <span className={`px-2 py-1 rounded text-xs font-semibold ${
                          user.type === 'brand' ? 'bg-blue-500/20 text-blue-400' : 'bg-purple-500/20 text-purple-400'
                        }`}>
                          {user.type === 'brand' ? 'Marque' : 'Créateur'}
                        </span>
                      </td>
                      <td className="p-4">
                        <span className={`px-2 py-1 rounded text-xs font-semibold ${
                          user.plan === 'VIP+' ? 'bg-[#D42B2B]/20 text-[#D42B2B]' :
                          user.plan === 'VIP' ? 'bg-purple-500/20 text-purple-400' :
                          user.plan === 'Basic' ? 'bg-blue-500/20 text-blue-400' :
                          'bg-gray-500/20 text-gray-400'
                        }`}>
                          {user.plan}
                        </span>
                      </td>
                      <td className="p-4 text-[#888] text-sm">{user.email}</td>
                      <td className="p-4 text-[#888] text-sm">{user.date}</td>
                      <td className="p-4">
                        <span className={`px-2 py-1 rounded text-xs font-semibold ${
                          user.status === 'active' ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/20 text-yellow-400'
                        }`}>
                          {user.status === 'active' ? 'Actif' : 'En attente'}
                        </span>
                      </td>
                      <td className="p-4">
                        <div className="flex gap-2">
                          <button className="px-3 py-1 bg-[#0A0A0A] text-white text-xs rounded hover:bg-[#D42B2B] transition">
                            Voir
                          </button>
                          {user.status === 'pending' && (
                            <button className="px-3 py-1 bg-green-500/20 text-green-400 text-xs rounded hover:bg-green-500/30 transition">
                              Approuver
                            </button>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Campaigns Tab - With Commission Info */}
        {activeTab === 'campaigns' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="font-['Bebas_Neue'] text-3xl text-white">Toutes les Campagnes</h2>
              <div className="flex gap-2">
                <button className="px-4 py-2 bg-[#D42B2B] text-white text-xs font-semibold uppercase rounded-lg">Toutes</button>
                <button className="px-4 py-2 bg-[#1A1A1A] text-[#888] text-xs font-semibold uppercase rounded-lg">Actives</button>
                <button className="px-4 py-2 bg-[#1A1A1A] text-[#888] text-xs font-semibold uppercase rounded-lg">En attente</button>
              </div>
            </div>

            {recentCampaigns.map((campaign) => (
              <div key={campaign.id} className="bg-[#1A1A1A] border border-[rgba(255,255,255,0.08)] rounded-xl p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-['Syne'] text-xl font-bold text-white mb-1">{campaign.name}</h3>
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
                <div className="grid grid-cols-4 gap-4 mb-4">
                  <div>
                    <div className="text-[#888] text-xs uppercase mb-1">Budget Total</div>
                    <div className="text-white font-semibold">{campaign.budget}</div>
                  </div>
                  <div>
                    <div className="text-[#888] text-xs uppercase mb-1">Commission Influzy</div>
                    <div className="text-green-400 font-bold">{campaign.commission}</div>
                  </div>
                  <div>
                    <div className="text-[#888] text-xs uppercase mb-1">Créateurs</div>
                    <div className="text-white font-semibold">{campaign.creators}</div>
                  </div>
                  <div>
                    <div className="text-[#888] text-xs uppercase mb-1">Statut</div>
                    <div className="text-white font-semibold capitalize">{campaign.status}</div>
                  </div>
                </div>
                <div className="flex gap-3">
                  <button className="px-6 py-2 bg-[#D42B2B] text-white text-sm font-semibold uppercase rounded-lg hover:bg-[#FF3D3D] transition">
                    Gérer
                  </button>
                  {campaign.status === 'pending' && (
                    <button className="px-6 py-2 bg-green-500/20 text-green-400 text-sm font-semibold uppercase rounded-lg hover:bg-green-500/30 transition">
                      Approuver
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Payments Tab - With Platform Commission */}
        {activeTab === 'payments' && (
          <div className="space-y-6">
            <h2 className="font-['Bebas_Neue'] text-3xl text-white">Gestion des Paiements</h2>

            <div className="bg-[#1A1A1A] border border-[rgba(255,255,255,0.08)] rounded-xl p-6">
              <h3 className="font-['Bebas_Neue'] text-2xl text-white mb-4">Demandes en Attente</h3>
              <div className="space-y-3">
                {pendingPayments.map((payment) => (
                  <div key={payment.id} className="bg-[#0A0A0A] p-4 rounded-lg border border-[rgba(255,255,255,0.08)]">
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <h4 className="text-white font-semibold">{payment.creator}</h4>
                        <p className="text-[#888] text-sm">{payment.campaign}</p>
                      </div>
                      <div className="text-right">
                        <div className="font-['Bebas_Neue'] text-2xl text-white">{payment.amount}</div>
                        <div className="text-green-400 text-sm font-bold">Influzy garde: {payment.platformKeeps}</div>
                        <div className="text-[#888] text-xs">{payment.date}</div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-[#888]">Méthode: {payment.method}</span>
                      <div className="flex gap-2">
                        <button className="px-4 py-2 bg-green-500/20 text-green-400 text-xs font-semibold uppercase rounded hover:bg-green-500/30 transition">
                          Approuver & Collecter {payment.platformKeeps}
                        </button>
                        <button className="px-4 py-2 bg-red-500/20 text-red-400 text-xs font-semibold uppercase rounded hover:bg-red-500/30 transition">
                          Refuser
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[#1A1A1A] border border-[rgba(255,255,255,0.08)] rounded-xl p-6">
              <h3 className="font-['Bebas_Neue'] text-2xl text-white mb-4">Historique des Paiements</h3>
              <div className="space-y-2">
                <div className="flex items-center justify-between py-3 border-b border-[rgba(255,255,255,0.08)]">
                  <div>
                    <div className="text-white font-semibold">Amina Beauty</div>
                    <div className="text-[#888] text-sm">05 Fév 2025 • CCP</div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div>
                      <div className="text-white font-bold text-right">45,000 DZD</div>
                      <div className="text-green-400 text-sm text-right">+6,750 DZD collecté</div>
                    </div>
                    <span className="px-2 py-1 bg-green-500/20 text-green-400 text-xs font-semibold rounded">Payé</span>
                  </div>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-[rgba(255,255,255,0.08)]">
                  <div>
                    <div className="text-white font-semibold">Karim Tech</div>
                    <div className="text-[#888] text-sm">03 Fév 2025 • BaridiMob</div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div>
                      <div className="text-white font-bold text-right">32,000 DZD</div>
                      <div className="text-green-400 text-sm text-right">+4,800 DZD collecté</div>
                    </div>
                    <span className="px-2 py-1 bg-green-500/20 text-green-400 text-xs font-semibold rounded">Payé</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Settings Tab */}
        {activeTab === 'settings' && (
          <div className="max-w-3xl space-y-6">
            <h2 className="font-['Bebas_Neue'] text-3xl text-white">Paramètres Plateforme</h2>

            <div className="bg-[#1A1A1A] border border-[rgba(255,255,255,0.08)] rounded-xl p-6">
              <h3 className="font-['Bebas_Neue'] text-2xl text-white mb-4">Configuration Monétisation</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold tracking-wider uppercase text-[#888] mb-2">
                    Commission plateforme sur campagnes (%)
                  </label>
                  <input
                    type="number"
                    defaultValue="15"
                    className="w-full px-4 py-3 bg-[#0A0A0A] border border-[rgba(255,255,255,0.1)] rounded-lg text-white"
                  />
                  <p className="text-xs text-[#888] mt-1">Actuellement: 15% sur chaque campagne = {commissionStats.avgCommission} en moyenne</p>
                </div>
                <div>
                  <label className="block text-xs font-semibold tracking-wider uppercase text-[#888] mb-2">
                    Seuil minimum retrait créateurs (DZD)
                  </label>
                  <input
                    type="number"
                    defaultValue="10000"
                    className="w-full px-4 py-3 bg-[#0A0A0A] border border-[rgba(255,255,255,0.1)] rounded-lg text-white"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold tracking-wider uppercase text-[#888] mb-2">
                    Frais de traitement paiement (DZD)
                  </label>
                  <input
                    type="number"
                    defaultValue="0"
                    className="w-full px-4 py-3 bg-[#0A0A0A] border border-[rgba(255,255,255,0.1)] rounded-lg text-white"
                  />
                  <p className="text-xs text-[#888] mt-1">Actuellement gratuit pour les créateurs</p>
                </div>
              </div>
            </div>

            <div className="bg-[#1A1A1A] border border-[rgba(255,255,255,0.08)] rounded-xl p-6">
              <h3 className="font-['Bebas_Neue'] text-2xl text-white mb-4">Plans d'Abonnement</h3>
              <div className="space-y-3">
                <div className="p-4 bg-[#0A0A0A] rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-semibold">Gratuit</span>
                    <span className="text-green-400">Actif</span>
                  </div>
                  <div className="text-[#888] text-sm">0 DZD/an - Accès basique</div>
                </div>
                <div className="p-4 bg-[#0A0A0A] rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-semibold">Basic</span>
                    <span className="text-green-400">Actif</span>
                  </div>
                  <div className="text-[#888] text-sm">5,000 DZD/an - PME</div>
                </div>
                <div className="p-4 bg-[#0A0A0A] rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-semibold">VIP</span>
                    <span className="text-green-400">Actif</span>
                  </div>
                  <div className="text-[#888] text-sm">50,000 DZD/an - Le plus populaire</div>
                </div>
                <div className="p-4 bg-[#0A0A0A] rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-semibold">VIP+</span>
                    <span className="text-green-400">Actif</span>
                  </div>
                  <div className="text-[#888] text-sm">150,000 DZD/an - Grandes entreprises</div>
                </div>
              </div>
            </div>

            <div className="bg-[#1A1A1A] border border-[rgba(255,255,255,0.08)] rounded-xl p-6">
              <h3 className="font-['Bebas_Neue'] text-2xl text-white mb-4">Email Notifications</h3>
              <div className="space-y-3">
                <label className="flex items-center gap-3">
                  <input type="checkbox" defaultChecked className="w-5 h-5 bg-[#0A0A0A] border border-[rgba(255,255,255,0.1)] rounded" />
                  <span className="text-white">Nouvel utilisateur inscrit</span>
                </label>
                <label className="flex items-center gap-3">
                  <input type="checkbox" defaultChecked className="w-5 h-5 bg-[#0A0A0A] border border-[rgba(255,255,255,0.1)] rounded" />
                  <span className="text-white">Nouvelle campagne créée</span>
                </label>
                <label className="flex items-center gap-3">
                  <input type="checkbox" defaultChecked className="w-5 h-5 bg-[#0A0A0A] border border-[rgba(255,255,255,0.1)] rounded" />
                  <span className="text-white">Demande de paiement</span>
                </label>
                <label className="flex items-center gap-3">
                  <input type="checkbox" defaultChecked className="w-5 h-5 bg-[#0A0A0A] border border-[rgba(255,255,255,0.1)] rounded" />
                  <span className="text-white">Nouvel abonnement payé</span>
                </label>
              </div>
            </div>

            <button className="px-6 py-3 bg-[#D42B2B] text-white font-bold text-sm uppercase tracking-wider rounded-lg hover:bg-[#FF3D3D] transition">
              Sauvegarder les paramètres
            </button>
          </div>
        )}
      </main>
    </div>
  );
}
