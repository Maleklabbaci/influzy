import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function DashboardAdmin() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'overview' | 'users' | 'campaigns' | 'payments' | 'settings'>('overview');

  const handleLogout = () => {
    localStorage.clear();
    navigate('/');
  };

  const stats = {
    totalUsers: 1245,
    brands: 245,
    creators: 1000,
    activeCampaigns: 48,
    totalRevenue: '12.5M DZD',
    monthlyRevenue: '2.8M DZD',
    pendingPayments: 24,
  };

  const recentUsers = [
    { id: 1, name: 'Sarah Tech Store', type: 'brand', email: 'sarah@techstore.dz', date: '10 Fév 2025', status: 'active' },
    { id: 2, name: 'Amina Beauty', type: 'creator', email: 'amina@example.com', date: '10 Fév 2025', status: 'pending' },
    { id: 3, name: 'Mohamed Food', type: 'creator', email: 'mohamed@example.com', date: '09 Fév 2025', status: 'active' },
    { id: 4, name: 'FitGear Pro', type: 'brand', email: 'contact@fitgear.dz', date: '09 Fév 2025', status: 'active' },
  ];

  const recentCampaigns = [
    { id: 1, name: 'Campagne Smartphones', brand: 'TechStore DZ', budget: '250,000 DZD', status: 'active', creators: 5 },
    { id: 2, name: 'Collection Hiver', brand: 'Fashion House', budget: '180,000 DZD', status: 'pending', creators: 3 },
    { id: 3, name: 'Promo Ramadan', brand: 'BeautyLine', budget: '300,000 DZD', status: 'completed', creators: 8 },
  ];

  const pendingPayments = [
    { id: 1, creator: 'Amina Beauty', amount: '45,000 DZD', campaign: 'TechStore Campaign', method: 'CCP', date: '10 Fév' },
    { id: 2, creator: 'Youcef Cuisine', amount: '35,000 DZD', campaign: 'Food Promo', method: 'BaridiMob', date: '10 Fév' },
    { id: 3, creator: 'Lina Lifestyle', amount: '28,000 DZD', campaign: 'Fashion Week', method: 'Virement', date: '09 Fév' },
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
        {/* Header */}
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
                <h3 className="font-['Bebas_Neue'] text-3xl text-white mb-6">Revenus</h3>
                <div className="space-y-4">
                  <div>
                    <div className="text-white/70 text-xs uppercase tracking-wider mb-1">Total</div>
                    <div className="font-['Bebas_Neue'] text-5xl text-white">{stats.totalRevenue}</div>
                  </div>
                  <div className="h-px bg-white/20"></div>
                  <div className="flex justify-between items-center">
                    <span className="text-white/90 text-sm">Ce mois</span>
                    <span className="font-['Bebas_Neue'] text-2xl text-white">{stats.monthlyRevenue}</span>
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
                  <button className="w-full py-3 bg-[#D42B2B] text-white font-bold text-sm uppercase tracking-wider rounded-lg hover:bg-[#FF3D3D] transition">
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
                      <span className={`px-2 py-1 rounded text-xs font-semibold ${
                        campaign.status === 'active' ? 'bg-green-500/20 text-green-400' :
                        campaign.status === 'pending' ? 'bg-yellow-500/20 text-yellow-400' :
                        'bg-gray-500/20 text-gray-400'
                      }`}>
                        {campaign.status === 'active' ? 'Active' : campaign.status === 'pending' ? 'En attente' : 'Terminée'}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Users Tab */}
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

        {/* Campaigns Tab */}
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
                <div className="grid grid-cols-3 gap-4 mb-4">
                  <div>
                    <div className="text-[#888] text-xs uppercase mb-1">Budget</div>
                    <div className="text-white font-semibold">{campaign.budget}</div>
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

        {/* Payments Tab */}
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
                        <div className="text-[#888] text-xs">{payment.date}</div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-[#888]">Méthode: {payment.method}</span>
                      <div className="flex gap-2">
                        <button className="px-4 py-2 bg-green-500/20 text-green-400 text-xs font-semibold uppercase rounded hover:bg-green-500/30 transition">
                          Approuver
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
                    <div className="text-white font-bold">45,000 DZD</div>
                    <span className="px-2 py-1 bg-green-500/20 text-green-400 text-xs font-semibold rounded">Payé</span>
                  </div>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-[rgba(255,255,255,0.08)]">
                  <div>
                    <div className="text-white font-semibold">Karim Tech</div>
                    <div className="text-[#888] text-sm">03 Fév 2025 • BaridiMob</div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="text-white font-bold">32,000 DZD</div>
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
              <h3 className="font-['Bebas_Neue'] text-2xl text-white mb-4">Configuration Générale</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold tracking-wider uppercase text-[#888] mb-2">
                    Commission plateforme (%)
                  </label>
                  <input
                    type="number"
                    defaultValue="15"
                    className="w-full px-4 py-3 bg-[#0A0A0A] border border-[rgba(255,255,255,0.1)] rounded-lg text-white"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold tracking-wider uppercase text-[#888] mb-2">
                    Seuil minimum retrait (DZD)
                  </label>
                  <input
                    type="number"
                    defaultValue="10000"
                    className="w-full px-4 py-3 bg-[#0A0A0A] border border-[rgba(255,255,255,0.1)] rounded-lg text-white"
                  />
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
