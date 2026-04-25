# 👨‍💻 Guide Développeur - Influzy

## 🏗️ Architecture

### Stack Technique
- **React 18** - Library UI
- **TypeScript** - Type safety
- **React Router DOM** - Navigation
- **Tailwind CSS** - Styling
- **Vite** - Build tool

### Pattern de Code
- **Functional Components** avec Hooks
- **TypeScript** pour le typage
- **Props Interface** pour chaque composant
- **CSS-in-JS** via Tailwind

## 📁 Structure Détaillée

```
influzy/
│
├── public/                 # Assets statiques
│
├── src/
│   ├── components/        # Composants réutilisables
│   │   ├── Navbar.tsx     # Navigation principale
│   │   ├── Hero.tsx       # Section héro
│   │   ├── Ticker.tsx     # Bande défilante
│   │   ├── HowItWorks.tsx # 4 étapes
│   │   ├── Why.tsx        # 6 avantages
│   │   ├── Creators.tsx   # Catalogue créateurs
│   │   ├── UGC.tsx        # Section UGC
│   │   ├── Pricing.tsx    # Plans tarifaires
│   │   ├── CTAFinal.tsx   # CTA final
│   │   └── Footer.tsx     # Pied de page
│   │
│   ├── pages/             # Pages complètes
│   │   ├── HomePage.tsx   # Landing page
│   │   ├── Auth.tsx       # Login/Register
│   │   ├── DashboardCreator.tsx  # Dashboard créateur
│   │   ├── DashboardBrand.tsx    # Dashboard marque
│   │   └── DashboardAdmin.tsx    # Dashboard admin
│   │
│   ├── App.tsx            # Routing principal
│   ├── main.tsx           # Point d'entrée
│   └── index.css          # Styles globaux
│
├── index.html             # Template HTML
├── package.json           # Dépendances
├── tsconfig.json          # Config TypeScript
├── vite.config.ts         # Config Vite
└── tailwind.config.js     # Config Tailwind
```

## 🎨 Système de Design

### Variables CSS
```css
:root {
  --red: #D42B2B;        /* Rouge principal */
  --red2: #FF3D3D;       /* Rouge hover */
  --violet: #6B21A8;     /* Violet (legacy) */
  --violet2: #9333EA;    /* Violet 2 (legacy) */
  --white: #FAFAFA;      /* Blanc */
  --black: #0A0A0A;      /* Noir fond */
  --gray: #1A1A1A;       /* Gris foncé */
  --gray2: #2A2A2A;      /* Gris moyen */
  --muted: #888;         /* Gris texte */
  --border: rgba(255,255,255,0.08); /* Bordure */
}
```

### Classes Tailwind Personnalisées
```css
/* Animations */
.fade-in { opacity: 0; animation: fadeInUp 0.7s ease forwards; }
.fade-left { opacity: 0; animation: fadeInLeft 0.7s ease forwards; }
.delay-100 { animation-delay: 0.1s; }
.delay-200 { animation-delay: 0.2s; }
.delay-300 { animation-delay: 0.3s; }

/* Ticker */
.animate-ticker { animation: tick 25s linear infinite; }
```

## 🔧 Composants Principaux

### Navbar.tsx
```typescript
interface NavbarProps {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
}

// Features:
// - Sticky navigation avec effet scroll
// - Menu mobile responsive
// - Links vers auth et sections
```

### Auth.tsx
```typescript
type UserRole = 'brand' | 'creator';
type AuthMode = 'login' | 'register';

// Features:
// - Toggle Marque/Créateur
// - Switch Login/Register
// - Formulaires conditionnels
// - Navigation vers dashboards
```

### Dashboard*.tsx
```typescript
// Onglets disponibles:
// - overview: Stats générales
// - campaigns: Gestion campagnes
// - creators/users: Catalogue/Liste
// - earnings/analytics/payments: Données
// - profile/settings: Configuration
```

## 🛣️ Routing

### Configuration
```typescript
<BrowserRouter>
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/auth" element={<Auth />} />
    <Route path="/dashboard/creator" element={<DashboardCreator />} />
    <Route path="/dashboard/brand" element={<DashboardBrand />} />
    <Route path="/dashboard/admin" element={<DashboardAdmin />} />
  </Routes>
</BrowserRouter>
```

### Navigation Programmatique
```typescript
import { useNavigate } from 'react-router-dom';

const navigate = useNavigate();
navigate('/dashboard/brand'); // Redirection
```

## 💾 Gestion d'État

### LocalStorage
```typescript
// Sauvegarde utilisateur
localStorage.setItem('userRole', 'brand');
localStorage.setItem('userName', 'TechStore DZ');

// Récupération
const userRole = localStorage.getItem('userRole');
const userName = localStorage.getItem('userName');

// Déconnexion
localStorage.clear();
```

### useState
```typescript
// Onglets
const [activeTab, setActiveTab] = useState<'overview' | 'campaigns'>('overview');

// Modals
const [showModal, setShowModal] = useState(false);

// Formulaires
const [formData, setFormData] = useState({ email: '', password: '' });
```

## 🎯 Données Mock

### Créateurs
```typescript
const creators = [
  {
    id: 1,
    name: 'Amina Beauty',
    handle: '@amina.beautydz',
    niche: 'Beauté',
    followers: '14.2K',
    engagement: '8.3%',
    location: 'Alger',
    verified: true,
  },
  // ...
];
```

### Campagnes
```typescript
const campaigns = [
  {
    id: 1,
    name: 'Campagne Smartphones',
    status: 'active',
    budget: '250,000 DZD',
    creators: 5,
    reach: '125K',
    engagement: '7.2%',
  },
  // ...
];
```

## 🔐 Authentification (Mock)

```typescript
const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  
  // Simuler la connexion
  localStorage.setItem('userRole', role);
  localStorage.setItem('userName', formData.name);
  
  // Redirection selon le rôle
  if (role === 'brand') {
    navigate('/dashboard/brand');
  } else {
    navigate('/dashboard/creator');
  }
};
```

## 🎨 Conventions de Style

### Nommage
- **Components**: PascalCase (`DashboardCreator.tsx`)
- **Variables**: camelCase (`activeTab`)
- **Types**: PascalCase (`UserRole`)
- **CSS Classes**: kebab-case ou Tailwind

### Tailwind Classes
```typescript
// Ordre recommandé:
className="
  // Layout
  flex items-center justify-between
  // Spacing
  px-6 py-3 gap-4
  // Sizing
  w-full h-12
  // Typography
  text-sm font-bold uppercase
  // Colors
  bg-[#D42B2B] text-white
  // Borders
  border border-white rounded-lg
  // Effects
  hover:bg-[#FF3D3D] transition
"
```

### Couleurs Tailwind
```typescript
// Utiliser les valeurs CSS custom
bg-[#D42B2B]      // Rouge
bg-[#0A0A0A]      // Noir
bg-[#1A1A1A]      // Gris foncé
text-[#888]       // Gris texte
border-[rgba(255,255,255,0.08)]  // Bordure
```

## 📱 Responsive Design

### Breakpoints Tailwind
```typescript
// Mobile first
className="text-sm md:text-base lg:text-lg"

// Grid responsive
className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4"

// Hide/Show
className="hidden md:block"  // Caché mobile, visible desktop
className="block md:hidden"  // Visible mobile, caché desktop
```

## ⚡ Performance

### Optimisations
- **Code splitting** par route
- **Lazy loading** des images
- **CSS inline** dans le build
- **Minification** automatique
- **Tree shaking** des imports

### Build
```bash
npm run build
# Génère dist/index.html (368 KB, 95 KB gzippé)
```

## 🧪 Testing (À implémenter)

```typescript
// Exemple avec Vitest
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Navbar from './Navbar';

describe('Navbar', () => {
  it('renders logo', () => {
    render(<Navbar mobileMenuOpen={false} setMobileMenuOpen={() => {}} />);
    expect(screen.getByText(/INFLUZY/i)).toBeInTheDocument();
  });
});
```

## 🔄 Workflows de Développement

### Nouvelle Feature
1. Créer une branche: `git checkout -b feature/nom-feature`
2. Développer le composant/page
3. Tester localement: `npm run dev`
4. Build de test: `npm run build`
5. Commit et push
6. Créer une Pull Request

### Nouveau Composant
```typescript
// 1. Créer le fichier
// src/components/MonComposant.tsx

export default function MonComposant() {
  return (
    <div className="bg-[#1A1A1A] p-6 rounded-xl">
      {/* Contenu */}
    </div>
  );
}

// 2. Importer dans la page
import MonComposant from '../components/MonComposant';

// 3. Utiliser
<MonComposant />
```

## 🐛 Debugging

### Console Logs
```typescript
console.log('Active Tab:', activeTab);
console.log('Form Data:', formData);
```

### React DevTools
- Installer l'extension Chrome/Firefox
- Inspector les props et state
- Profiler les performances

### Vite DevTools
```bash
# Voir les erreurs de build
npm run build

# Mode verbose
npm run dev -- --debug
```

## 📚 Ressources

### Documentation
- [React](https://react.dev)
- [TypeScript](https://www.typescriptlang.org)
- [Tailwind CSS](https://tailwindcss.com)
- [React Router](https://reactrouter.com)
- [Vite](https://vitejs.dev)

### Fonts
- [Bebas Neue](https://fonts.google.com/specimen/Bebas+Neue)
- [Syne](https://fonts.google.com/specimen/Syne)
- [DM Sans](https://fonts.google.com/specimen/DM+Sans)

## 🚀 Déploiement

### Build Production
```bash
npm run build
```

### Servir Localement
```bash
npm run preview
```

### Déployer sur Vercel
```bash
vercel --prod
```

### Déployer sur Netlify
```bash
netlify deploy --prod --dir=dist
```

## 💡 Best Practices

1. **Toujours typer** avec TypeScript
2. **Utiliser les hooks** React appropriés
3. **Extraire la logique** en custom hooks si répétée
4. **Commenter le code** complexe
5. **Nommer clairement** les variables et fonctions
6. **Responsive first** - mobile d'abord
7. **Accessibilité** - aria-labels, semantic HTML
8. **Performance** - lazy load, code splitting

---

**Happy Coding!** 🇩🇿
