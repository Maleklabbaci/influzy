# 🚀 Guide de Déploiement - Influzy

## ⚠️ IMPORTANT: Configuration Routing SPA

Cette application utilise **React Router** pour la navigation côté client. Les plateformes d'hébergement doivent être configurées pour rediriger toutes les routes vers `index.html`.

---

## 🌐 Déploiement sur Vercel (RECOMMANDÉ)

### Méthode 1: Via CLI

```bash
# 1. Installer Vercel CLI
npm i -g vercel

# 2. Build le projet
npm run build

# 3. Déployer
vercel --prod
```

### Méthode 2: Via GitHub

1. Push ton code sur GitHub
2. Connecte-toi sur [vercel.com](https://vercel.com)
3. Clique "New Project"
4. Importe ton repo GitHub
5. Configure:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
6. Déploie!

### ✅ Configuration Automatique

Le fichier `vercel.json` est déjà configuré:

```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

**Ceci permet à toutes les routes (/auth, /dashboard/creator, etc.) de fonctionner correctement!**

---

## 🎨 Déploiement sur Netlify

### Méthode 1: Via CLI

```bash
# 1. Installer Netlify CLI
npm i -g netlify-cli

# 2. Build le projet
npm run build

# 3. Déployer
netlify deploy --prod --dir=dist
```

### Méthode 2: Via Interface Web

1. Connecte-toi sur [netlify.com](https://netlify.com)
2. Drag & drop le dossier `dist/` après le build
3. Ou connecte ton repo GitHub et configure:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`

### ✅ Configuration Automatique

Le fichier `public/_redirects` est déjà configuré:

```
/*    /index.html   200
```

**Ceci redirige toutes les routes vers index.html!**

---

## 🔧 Déploiement sur d'autres plateformes

### GitHub Pages

```bash
# 1. Installer gh-pages
npm install --save-dev gh-pages

# 2. Ajouter dans package.json
{
  "homepage": "https://ton-username.github.io/influzy",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}

# 3. Déployer
npm run deploy
```

**⚠️ Important**: Pour GitHub Pages, il faut aussi ajouter `basename` au Router:

```typescript
// src/App.tsx
<BrowserRouter basename="/influzy">
  {/* routes */}
</BrowserRouter>
```

### Render.com

1. Connecte ton repo
2. Configure:
   - **Build Command**: `npm run build`
   - **Publish Directory**: `dist`
3. Ajoute une **Rewrite Rule**:
   - Source: `/*`
   - Destination: `/index.html`

### Railway.app

1. Connecte ton repo
2. Configure:
   - **Build Command**: `npm run build`
   - **Start Command**: `npx serve dist -s`
3. Le flag `-s` (single page app) gère les redirections

---

## 🐛 Résolution des Problèmes

### ❌ Problème: Routes retournent 404

**Cause**: Le serveur cherche des fichiers physiques `/auth.html`, `/dashboard/creator.html`, etc.

**Solution**: Configure les redirections (voir ci-dessus selon ta plateforme)

### ❌ Problème: Page blanche après refresh

**Cause**: Même raison - routes non configurées

**Solution**: Vérifie que les fichiers de config sont bien présents:
- `vercel.json` pour Vercel
- `public/_redirects` pour Netlify
- Rewrite rules pour autres plateformes

### ❌ Problème: Build échoue

**Cause**: Dépendances manquantes

**Solution**:
```bash
# Supprime node_modules et reinstalle
rm -rf node_modules package-lock.json
npm install
npm run build
```

### ❌ Problème: Erreurs TypeScript

**Vérification**:
```bash
# Vérifie les erreurs
npx tsc --noEmit

# Rebuild
npm run build
```

---

## 📋 Checklist Avant Déploiement

### Étape 1: Build Local
```bash
# 1. Build
npm run build

# 2. Test local
npx serve dist -s

# 3. Ouvre http://localhost:3000
# 4. Teste toutes les routes:
#    - /
#    - /auth
#    - /dashboard/creator
#    - /dashboard/brand
#    - /dashboard/admin
```

### Étape 2: Vérifications

- [ ] Toutes les routes fonctionnent
- [ ] Pas d'erreurs console
- [ ] Design responsive OK
- [ ] Formulaires fonctionnent
- [ ] Navigation fonctionne
- [ ] Refresh page ne casse pas

### Étape 3: Configuration Plateforme

**Pour Vercel**:
- [ ] `vercel.json` présent à la racine
- [ ] Contient les rewrites rules

**Pour Netlify**:
- [ ] `public/_redirects` présent
- [ ] Contient `/* /index.html 200`

**Pour autres**:
- [ ] Rewrite rules configurées
- [ ] Build command: `npm run build`
- [ ] Output directory: `dist`

---

## 🌍 Variables d'Environnement (Futur)

Quand tu ajouteras un backend, crée un fichier `.env`:

```env
VITE_API_URL=https://api.influzy.dz
VITE_CHARGILY_KEY=your_key
VITE_SATIM_KEY=your_key
```

**Sur Vercel/Netlify**: Ajoute ces variables dans le dashboard:
- Vercel: Settings > Environment Variables
- Netlify: Site settings > Build & deploy > Environment

**Dans le code**:
```typescript
const API_URL = import.meta.env.VITE_API_URL;
```

---

## 📊 Performances Après Déploiement

### Lighthouse Score Attendu

Après déploiement, test avec [PageSpeed Insights](https://pagespeed.web.dev/):

**Objectifs**:
- ✅ Performance: 90+
- ✅ Accessibility: 95+
- ✅ Best Practices: 100
- ✅ SEO: 90+

### Optimisations Supplémentaires

Si scores < 90:

```bash
# 1. Analyse le bundle
npx vite-bundle-visualizer

# 2. Optimise les images (si tu ajoutes des assets)
# Utilise WebP au lieu de PNG/JPG

# 3. Lazy load les routes
# Remplace:
import HomePage from './pages/HomePage';
# Par:
const HomePage = lazy(() => import('./pages/HomePage'));
```

---

## 🔒 Sécurité

### Headers HTTP (À configurer sur Vercel/Netlify)

**vercel.json** avec headers:
```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ],
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "X-XSS-Protection",
          "value": "1; mode=block"
        }
      ]
    }
  ]
}
```

---

## 📱 Test Multi-Devices

Après déploiement, teste sur:

- [ ] Chrome Desktop
- [ ] Firefox Desktop
- [ ] Safari Desktop
- [ ] Chrome Mobile (Android)
- [ ] Safari Mobile (iOS)
- [ ] Tablette (iPad/Android)

### Tools de Test

- [BrowserStack](https://www.browserstack.com/) - Test multi-devices
- [LambdaTest](https://www.lambdatest.com/) - Cross-browser testing
- [Responsive Design Checker](https://responsivedesignchecker.com/)

---

## 🚀 Déploiement Rapide (TL;DR)

### VERCEL (Le plus simple)

```bash
# 1. Build
npm run build

# 2. Install Vercel
npm i -g vercel

# 3. Deploy
vercel --prod
```

**C'est tout!** Le fichier `vercel.json` s'occupe du reste.

### NETLIFY

```bash
# 1. Build
npm run build

# 2. Install Netlify
npm i -g netlify-cli

# 3. Deploy
netlify deploy --prod --dir=dist
```

**C'est tout!** Le fichier `_redirects` s'occupe du reste.

---

## 📞 Support Déploiement

### Problèmes Vercel
- [Vercel Docs](https://vercel.com/docs)
- [Vercel Community](https://github.com/vercel/vercel/discussions)

### Problèmes Netlify
- [Netlify Docs](https://docs.netlify.com)
- [Netlify Community](https://answers.netlify.com)

### Problèmes Généraux SPA
- [React Router Docs](https://reactrouter.com/en/main/guides/deployment)
- [Vite Deployment](https://vitejs.dev/guide/static-deploy.html)

---

## ✅ Vérification Post-Déploiement

Une fois déployé, visite:

```
https://ton-site.vercel.app/
https://ton-site.vercel.app/auth
https://ton-site.vercel.app/dashboard/creator
https://ton-site.vercel.app/dashboard/brand
https://ton-site.vercel.app/dashboard/admin
```

**Toutes ces URLs doivent fonctionner sans 404!**

Si une retourne 404:
1. Vérifie que `vercel.json` est bien déployé
2. Redéploie le projet
3. Vérifie les logs de déploiement

---

## 🎉 C'est Tout!

Ton application est maintenant **live** et accessible au monde entier! 🌍

**URL de démo**: `https://ton-projet.vercel.app`

**Prochaines étapes**:
1. Partage le lien
2. Collecte les feedbacks
3. Itère et améliore
4. Ajoute le backend
5. Lance officiellement! 🚀

---

**BON DÉPLOIEMENT!** 🇩🇿
