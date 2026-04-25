import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

type UserRole = 'brand' | 'creator';
type AuthMode = 'login' | 'register';

export default function Auth() {
  const navigate = useNavigate();
  const [mode, setMode] = useState<AuthMode>('login');
  const [role, setRole] = useState<UserRole>('brand');
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    company: '',
    phone: '',
    niche: '',
    wilaya: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simuler la connexion/inscription
    localStorage.setItem('userRole', role);
    localStorage.setItem('userName', formData.name || formData.email);
    
    // Rediriger vers le bon dashboard
    if (role === 'brand') {
      navigate('/dashboard/brand');
    } else {
      navigate('/dashboard/creator');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] flex items-center justify-center px-6 py-12">
      <div className="w-full max-w-6xl grid md:grid-cols-2 gap-0 bg-[#1A1A1A] rounded-2xl overflow-hidden shadow-2xl">
        {/* Left Side - Branding */}
        <div className="bg-gradient-to-br from-[#D42B2B] to-[#FF3D3D] p-12 flex flex-col justify-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-black opacity-10 rounded-full translate-y-1/2 -translate-x-1/2"></div>
          
          <div className="relative z-10">
            <a href="/" className="font-['Bebas_Neue'] text-5xl tracking-[2px] text-white mb-6 block">
              INFLU<span className="text-[#0A0A0A]">ZY</span>
            </a>
            <h2 className="font-['Bebas_Neue'] text-4xl leading-tight text-white mb-4">
              {role === 'brand' ? 'LANCEZ VOTRE CAMPAGNE' : 'MONÉTISEZ VOTRE INFLUENCE'}
            </h2>
            <p className="text-white/80 text-sm leading-relaxed mb-8">
              {role === 'brand'
                ? 'Connectez-vous avec les meilleurs créateurs algériens et développez votre marque à travers l\'influence marketing.'
                : 'Rejoignez notre réseau de créateurs vérifiés et collaborez avec les meilleures marques algériennes.'}
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white">✓</div>
                <span className="text-white/90 text-sm">500+ créateurs vérifiés</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white">✓</div>
                <span className="text-white/90 text-sm">69 wilayas couvertes</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white">✓</div>
                <span className="text-white/90 text-sm">Paiements 100% locaux</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="p-12 bg-[#1A1A1A]">
          {/* Role Toggle */}
          <div className="flex gap-2 p-1 bg-[#0A0A0A] rounded-lg mb-8">
            <button
              onClick={() => setRole('brand')}
              className={`flex-1 py-2.5 text-sm font-semibold tracking-wide uppercase rounded-md transition ${
                role === 'brand'
                  ? 'bg-[#D42B2B] text-white'
                  : 'text-[#888] hover:text-white'
              }`}
            >
              Marque
            </button>
            <button
              onClick={() => setRole('creator')}
              className={`flex-1 py-2.5 text-sm font-semibold tracking-wide uppercase rounded-md transition ${
                role === 'creator'
                  ? 'bg-[#D42B2B] text-white'
                  : 'text-[#888] hover:text-white'
              }`}
            >
              Créateur
            </button>
          </div>

          {/* Auth Mode Toggle */}
          <div className="flex gap-4 mb-8">
            <button
              onClick={() => setMode('login')}
              className={`text-2xl font-['Syne'] font-bold transition ${
                mode === 'login' ? 'text-white' : 'text-[#888]'
              }`}
            >
              Connexion
            </button>
            <span className="text-[#888] text-2xl">|</span>
            <button
              onClick={() => setMode('register')}
              className={`text-2xl font-['Syne'] font-bold transition ${
                mode === 'register' ? 'text-white' : 'text-[#888]'
              }`}
            >
              Inscription
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {mode === 'register' && (
              <div>
                <label className="block text-xs font-semibold tracking-wider uppercase text-[#888] mb-2">
                  {role === 'brand' ? 'Nom de la marque' : 'Nom complet'}
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[#0A0A0A] border border-[rgba(255,255,255,0.1)] rounded-lg text-white placeholder-[#888] focus:border-[#D42B2B] focus:outline-none transition"
                  placeholder={role === 'brand' ? 'Ex: TechStore DZ' : 'Ex: Amina Benali'}
                />
              </div>
            )}

            <div>
              <label className="block text-xs font-semibold tracking-wider uppercase text-[#888] mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-[#0A0A0A] border border-[rgba(255,255,255,0.1)] rounded-lg text-white placeholder-[#888] focus:border-[#D42B2B] focus:outline-none transition"
                placeholder="exemple@email.com"
              />
            </div>

            {mode === 'register' && role === 'brand' && (
              <div>
                <label className="block text-xs font-semibold tracking-wider uppercase text-[#888] mb-2">
                  Entreprise
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-[#0A0A0A] border border-[rgba(255,255,255,0.1)] rounded-lg text-white placeholder-[#888] focus:border-[#D42B2B] focus:outline-none transition"
                  placeholder="Nom de votre entreprise"
                />
              </div>
            )}

            {mode === 'register' && role === 'creator' && (
              <>
                <div>
                  <label className="block text-xs font-semibold tracking-wider uppercase text-[#888] mb-2">
                    Niche
                  </label>
                  <select
                    name="niche"
                    value={formData.niche}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-[#0A0A0A] border border-[rgba(255,255,255,0.1)] rounded-lg text-white focus:border-[#D42B2B] focus:outline-none transition"
                  >
                    <option value="">Sélectionner une niche</option>
                    <option value="beaute">Beauté</option>
                    <option value="food">Food & Lifestyle</option>
                    <option value="tech">Tech & Gaming</option>
                    <option value="fitness">Fitness & Health</option>
                    <option value="travel">Travel</option>
                    <option value="fashion">Fashion</option>
                    <option value="business">Business</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold tracking-wider uppercase text-[#888] mb-2">
                    Wilaya
                  </label>
                  <select
                    name="wilaya"
                    value={formData.wilaya}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-[#0A0A0A] border border-[rgba(255,255,255,0.1)] rounded-lg text-white focus:border-[#D42B2B] focus:outline-none transition"
                  >
                    <option value="">Sélectionner une wilaya</option>
                    <option value="alger">Alger</option>
                    <option value="oran">Oran</option>
                    <option value="constantine">Constantine</option>
                    <option value="annaba">Annaba</option>
                    <option value="setif">Sétif</option>
                    <option value="batna">Batna</option>
                    <option value="blida">Blida</option>
                    <option value="tlemcen">Tlemcen</option>
                  </select>
                </div>
              </>
            )}

            {mode === 'register' && (
              <div>
                <label className="block text-xs font-semibold tracking-wider uppercase text-[#888] mb-2">
                  Téléphone
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-[#0A0A0A] border border-[rgba(255,255,255,0.1)] rounded-lg text-white placeholder-[#888] focus:border-[#D42B2B] focus:outline-none transition"
                  placeholder="05XX XX XX XX"
                />
              </div>
            )}

            <div>
              <label className="block text-xs font-semibold tracking-wider uppercase text-[#888] mb-2">
                Mot de passe
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-[#0A0A0A] border border-[rgba(255,255,255,0.1)] rounded-lg text-white placeholder-[#888] focus:border-[#D42B2B] focus:outline-none transition"
                placeholder="••••••••"
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-[#D42B2B] text-white text-sm font-bold tracking-wider uppercase rounded-lg hover:bg-[#FF3D3D] transition"
            >
              {mode === 'login' ? 'Se connecter' : 'Créer mon compte'}
            </button>

            {mode === 'login' && (
              <div className="text-center">
                <a href="#" className="text-sm text-[#888] hover:text-white transition">
                  Mot de passe oublié ?
                </a>
              </div>
            )}
          </form>

          <div className="mt-8 pt-6 border-t border-[rgba(255,255,255,0.08)] text-center">
            <a href="/" className="text-sm text-[#888] hover:text-white transition">
              ← Retour à l'accueil
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
