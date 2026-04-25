# 🇩🇿 INFLUZY - Plateforme d'Influence Marketing Algérienne

![Influzy](https://img.shields.io/badge/Made%20in-Algeria-green?style=for-the-badge)
![React](https://img.shields.io/badge/React-18-blue?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)
![Tailwind](https://img.shields.io/badge/Tailwind-3-cyan?style=for-the-badge&logo=tailwindcss)

## 📖 Description

**Influzy** est la première plateforme d'influence marketing et UGC (User Generated Content) dédiée au marché algérien. Connectez votre marque aux meilleurs créateurs des 69 wilayas d'Algérie.

## ✨ Fonctionnalités

### 🏠 Page d'Accueil
- Hero section avec stats en temps réel
- Ticker animé avec mots-clés
- Section "Comment ça marche" (4 étapes)
- Pourquoi Influzy (6 avantages)
- Catalogue de créateurs vérifiés
- Section UGC
- Tarifs transparents (4 plans)
- CTA final
- Footer complet

### 🔐 Authentification
- **Deux rôles**: Marque & Créateur
- Inscription & Connexion
- Formulaires adaptés par rôle
- Design split-screen moderne

### 👨‍💻 Dashboard Créateur
- **Vue d'ensemble**: Stats, gains, campagnes
- **Campagnes**: Liste et gestion des collaborations
- **Gains**: Historique et demandes de retrait
- **Profil**: Modification des informations
- Paiements locaux (CCP, BaridiMob, Virement)

### 🏢 Dashboard Marque
- **Vue d'ensemble**: Stats et performance
- **Campagnes**: Création et gestion
- **Créateurs**: Catalogue filtrable
- **Analytics**: Rapports détaillés
- Modal de création de campagne

### ⚙️ Dashboard Admin
- **Vue d'ensemble**: Stats plateforme
- **Utilisateurs**: Gestion et approbation
- **Campagnes**: Supervision
- **Paiements**: Validation des retraits
- **Paramètres**: Configuration globale

## 🚀 Technologies

- **Frontend**: React 18 + TypeScript
- **Routing**: React Router DOM
- **Styling**: Tailwind CSS
- **Build**: Vite
- **Fonts**: Bebas Neue, Syne, DM Sans

## 📂 Structure du Projet

```
src/
├── components/          # Composants réutilisables
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── Ticker.tsx
│   ├── HowItWorks.tsx
│   ├── Why.tsx
│   ├── Creators.tsx
│   ├── UGC.tsx
│   ├── Pricing.tsx
│   ├── CTAFinal.tsx
│   └── Footer.tsx
├── pages/              # Pages principales
│   ├── HomePage.tsx
│   ├── Auth.tsx
│   ├── DashboardCreator.tsx
│   ├── DashboardBrand.tsx
│   └── DashboardAdmin.tsx
├── App.tsx            # Routing principal
├── main.tsx           # Point d'entrée
└── index.css          # Styles globaux
```

## 🎨 Design System

### Couleurs
```css
--red: #D42B2B        /* Rouge principal */
--red2: #FF3D3D       /* Rouge hover */
--black: #0A0A0A      /* Fond principal */
--gray: #1A1A1A       /* Fond secondaire */
--gray2: #2A2A2A      /* Fond tertiaire */
--white: #FAFAFA      /* Texte principal */
--muted: #888         /* Texte secondaire */
```

### Typographie
- **Titres**: Bebas Neue (ALL CAPS)
- **Sous-titres**: Syne (Bold)
- **Corps**: DM Sans (Regular/Medium)

## 🛣️ Routes

| Route | Description | Rôle |
|-------|-------------|------|
| `/` | Page d'accueil | Public |
| `/auth` | Authentification | Public |
| `/dashboard/creator` | Dashboard Créateur | Créateur |
| `/dashboard/brand` | Dashboard Marque | Marque |
| `/dashboard/admin` | Dashboard Admin | Admin |

## 💳 Paiements Locaux

- **CCP** (Compte Courant Postal)
- **BaridiMob** (Paiement mobile)
- **Virement Bancaire** (Transfert classique)

## 🌍 Couverture

**69 Wilayas d'Algérie**
- Alger, Oran, Constantine, Annaba, Sétif, Batna, Blida, Tlemcen...
- Créateurs présents dans toute l'Algérie
- Campagnes nationales ou hyper-locales

## 📊 Statistiques Plateforme

- 500+ créateurs vérifiés
- 69 wilayas couvertes
- 98% de satisfaction client
- Paiements 100% locaux

## 🎯 Niches Disponibles

1. 👗 **Beauté & Fashion**
2. 🍜 **Food & Lifestyle**
3. 📱 **Tech & Gaming**
4. 💪 **Fitness & Health**
5. ✈️ **Travel & Adventure**
6. 💼 **Business & Finance**

## 🔒 Fonctionnalités de Sécurité

- Vérification manuelle des créateurs
- Détection des faux abonnés
- Paiements sécurisés et libérés après validation
- Contrôle qualité du contenu

## 📱 Responsive Design

- ✅ Mobile First
- ✅ Tablette optimisé
- ✅ Desktop full-featured
- ✅ Menu burger mobile

## 🚀 Installation & Développement

```bash
# Installation des dépendances
npm install

# Lancement en développement
npm run dev

# Build de production
npm run build

# Prévisualisation du build
npm run preview
```

## 📦 Build de Production

Le projet génère un fichier `dist/index.html` optimisé:
- **Taille**: ~368 KB (95 KB gzippé)
- **Single file**: Tout inline (CSS + JS)
- **Performance**: Optimisé pour le web

## 🎓 Sessions de Développement

### ✅ Session 1 - Landing Page
- Page d'accueil complète
- Design Algérien moderne
- Animations et interactions

### ✅ Session 2 - Authentification
- Login/Register pour marques
- Login/Register pour créateurs
- Validation et routing

### ✅ Session 3 - Dashboard Créateur
- Vue d'ensemble et stats
- Gestion des campagnes
- Gains et retraits
- Profil et paramètres

### ✅ Session 4 - Dashboard Marque
- Création de campagnes
- Catalogue créateurs
- Analytics et rapports
- Gestion budgets

### ✅ Session 5 - Dashboard Admin
- Gestion utilisateurs
- Supervision campagnes
- Validation paiements
- Paramètres plateforme

## 🤝 Contribution

Ce projet est une démonstration de plateforme d'influence marketing. Les contributions sont les bienvenues!

## 📄 Licence

MIT License - Fait avec ❤️ en Algérie 🇩🇿

## 📞 Contact

- **Email**: contact@influzy.dz
- **WhatsApp**: À venir
- **Instagram**: @influzy.dz

---

**INFLUZY** - Connectez votre marque aux créateurs algériens 🇩🇿
