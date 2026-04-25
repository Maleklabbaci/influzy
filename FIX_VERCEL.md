# 🔧 FIX: Routing sur Vercel

## 🚨 Le Problème

Quand tu visites `/auth` ou n'importe quelle route autre que `/`, Vercel retourne une **404 error**.

**Pourquoi?** Vercel cherche un fichier physique `/auth.html` qui n'existe pas. Notre app est une **SPA** (Single Page Application) avec un seul fichier `index.html`.

---

## ✅ La Solution (DÉJÀ FAITE!)

J'ai créé le fichier `vercel.json` à la racine du projet:

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

**Ce que ça fait**: Toutes les routes (`/auth`, `/dashboard/creator`, etc.) sont redirigées vers `index.html`, et React Router prend le relais!

---

## 📋 Checklist de Déploiement

### 1. Vérifie que `vercel.json` existe

```bash
# À la racine du projet (même niveau que package.json)
ls -la vercel.json
```

Si le fichier n'existe pas, crée-le:

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

### 2. Redéploie sur Vercel

**Option A: Via Git**
```bash
git add .
git commit -m "Add vercel.json for SPA routing"
git push origin main
```

Vercel redéploiera automatiquement.

**Option B: Via CLI**
```bash
# Install Vercel CLI si pas déjà fait
npm i -g vercel

# Deploy
vercel --prod
```

### 3. Teste Toutes les Routes

Après déploiement, visite:

- ✅ `https://ton-site.vercel.app/` → Devrait afficher la homepage
- ✅ `https://ton-site.vercel.app/auth` → Devrait afficher la page auth
- ✅ `https://ton-site.vercel.app/dashboard/creator` → Dashboard créateur
- ✅ `https://ton-site.vercel.app/dashboard/brand` → Dashboard marque
- ✅ `https://ton-site.vercel.app/dashboard/admin` → Dashboard admin

**Si une route retourne 404**: Passe à l'étape 4.

---

## 🔍 Debugging

### Étape 4: Vérifie les Logs Vercel

1. Va sur [vercel.com/dashboard](https://vercel.com/dashboard)
2. Clique sur ton projet
3. Va dans "Deployments"
4. Clique sur le dernier déploiement
5. Regarde les "Build Logs"

**Cherche**:
- ✅ `Build Completed`
- ✅ Pas d'erreurs rouges

### Étape 5: Vérifie la Configuration Vercel

Dans le dashboard Vercel:

1. Va dans **Settings**
2. Clique sur **General**
3. Vérifie:
   - **Framework Preset**: Vite ✅
   - **Build Command**: `npm run build` ✅
   - **Output Directory**: `dist` ✅
   - **Install Command**: `npm install` ✅

### Étape 6: Force Redeploy

Si tout est correct mais ça ne marche toujours pas:

1. Dashboard Vercel > Ton Projet
2. Clique sur "Deployments"
3. Trouve le dernier déploiement
4. Clique sur les 3 points "..."
5. "Redeploy"
6. Attends 1-2 min
7. Teste à nouveau

---

## 🛠️ Solutions Alternatives

### Si vercel.json ne marche pas

**Option 1: Utilise un fichier _redirects**

Crée `public/_redirects`:
```
/*    /index.html   200
```

**Option 2: Configure via Dashboard**

Dans Vercel Dashboard:
1. Settings > Rewrites
2. Ajoute:
   - Source: `/(.*)`
   - Destination: `/index.html`

---

## 🧪 Test en Local

Avant de déployer, teste que le routing fonctionne localement:

```bash
# 1. Build
npm run build

# 2. Serve avec support SPA
npx serve dist -s

# 3. Ouvre http://localhost:3000
# 4. Clique sur les liens
# 5. Rafraîchis la page (F5) sur /auth
```

**Si ça marche en local mais pas sur Vercel**: Le problème vient de la config Vercel.

---

## 📝 Exemple de Structure Correcte

```
ton-projet/
├── vercel.json          ← IMPORTANT: À la racine!
├── package.json
├── vite.config.ts
├── public/
│   └── _redirects       ← BONUS: Pour Netlify aussi
├── src/
│   ├── App.tsx
│   └── pages/
│       ├── HomePage.tsx
│       ├── Auth.tsx
│       └── ...
└── dist/                ← Généré après npm run build
    └── index.html
```

---

## 🚀 Commandes Rapides

```bash
# Build + Deploy (Vercel)
npm run build && vercel --prod

# Build + Test Local
npm run build && npx serve dist -s

# Force Clean + Rebuild
rm -rf dist node_modules
npm install
npm run build
vercel --prod
```

---

## ❓ FAQ

### Q: Ça marche sur `/` mais pas sur `/auth`?
**R**: `vercel.json` manquant ou mal configuré. Vérifie qu'il est à la racine ET qu'il est bien dans Git.

### Q: J'ai `vercel.json` mais ça marche toujours pas?
**R**: 
1. Vérifie que le fichier est bien commité dans Git
2. Force un redeploy dans Vercel dashboard
3. Vide le cache du navigateur (Ctrl+Shift+R)

### Q: Refresh sur une route donne 404?
**R**: Exactement le même problème. Solution: `vercel.json` avec rewrites.

### Q: Ça marche en dev (`npm run dev`) mais pas en prod?
**R**: Normal. En dev, Vite gère le routing. En prod, c'est le serveur (Vercel) qui doit rediriger vers `index.html`.

---

## ✅ Vérification Finale

Copie/colle ce code dans la console du navigateur sur ton site Vercel:

```javascript
// Test toutes les routes
const routes = ['/', '/auth', '/dashboard/creator', '/dashboard/brand', '/dashboard/admin'];

routes.forEach(async (route) => {
  const response = await fetch(route);
  console.log(`${route}: ${response.status === 200 ? '✅' : '❌'} (${response.status})`);
});
```

**Résultat attendu**:
```
/: ✅ (200)
/auth: ✅ (200)
/dashboard/creator: ✅ (200)
/dashboard/brand: ✅ (200)
/dashboard/admin: ✅ (200)
```

Si tu vois des ❌, c'est que le routing n'est pas configuré.

---

## 📞 Besoin d'Aide?

### Vercel Support
- [Docs SPA Routing](https://vercel.com/docs/concepts/projects/project-configuration#rewrites)
- [Community](https://github.com/vercel/vercel/discussions)

### Moi
1. Vérifie que `vercel.json` est à la racine ✅
2. Build le projet: `npm run build` ✅
3. Deploy: `vercel --prod` ✅
4. Si ça marche toujours pas, partage les logs!

---

**C'EST RÉGLÉ!** 🎉

Maintenant toutes tes routes devraient fonctionner sur Vercel! 🚀
