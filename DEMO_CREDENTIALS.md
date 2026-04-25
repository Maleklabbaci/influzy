# 🔐 Identifiants de Démo - Influzy

## 📝 Note Importante

Cette plateforme utilise actuellement un système d'authentification **mock** (simulé) à des fins de démonstration. Aucune connexion backend réelle n'est requise.

## 🎭 Comptes de Test

### 👔 Marque - TechStore DZ

**Utilisation**: Dashboard Marque (création de campagnes, recherche créateurs)

```
Email: brand@influzy.dz
Password: demo123
Rôle: Marque
```

**Fonctionnalités accessibles**:
- ✅ Création de campagnes
- ✅ Catalogue créateurs filtrable
- ✅ Analytics et rapports
- ✅ Gestion budget
- ✅ Invitation créateurs

---

### 🎨 Créateur - Amina Beauty

**Utilisation**: Dashboard Créateur (gestion collaborations, gains)

```
Email: creator@influzy.dz
Password: demo123
Rôle: Créateur
```

**Fonctionnalités accessibles**:
- ✅ Liste des campagnes disponibles
- ✅ Soumission de contenu
- ✅ Suivi des gains
- ✅ Demande de retrait
- ✅ Gestion profil

---

### ⚙️ Administrateur - Influzy Admin

**Utilisation**: Dashboard Admin (gestion plateforme)

```
Email: admin@influzy.dz
Password: admin123
Rôle: Admin
```

**Fonctionnalités accessibles**:
- ✅ Gestion utilisateurs (Approbation/Rejet)
- ✅ Supervision campagnes
- ✅ Validation paiements
- ✅ Statistiques globales
- ✅ Paramètres plateforme

---

## 🚀 Comment Tester

### Méthode 1: Inscription Rapide

1. Allez sur `/auth`
2. Cliquez sur **"Inscription"**
3. Choisissez **Marque** ou **Créateur**
4. Remplissez le formulaire (données fictives acceptées)
5. Cliquez sur **"Créer mon compte"**
6. Vous serez redirigé vers le dashboard correspondant

### Méthode 2: Connexion Directe

1. Allez sur `/auth`
2. Restez sur **"Connexion"**
3. Choisissez le rôle (**Marque** ou **Créateur**)
4. Entrez n'importe quel email/password
5. Cliquez sur **"Se connecter"**
6. Redirection automatique

### Méthode 3: Accès Direct Dashboard

Pour tester rapidement, accédez directement aux URLs:

```
/dashboard/creator   → Dashboard Créateur
/dashboard/brand     → Dashboard Marque
/dashboard/admin     → Dashboard Admin
```

---

## 📊 Données de Test Disponibles

### Créateurs Mock
- **Amina Beauty** - Beauté - 14.2K followers - 8.3% engagement - Alger
- **Youcef Cuisine** - Food - 9.8K followers - 11.2% engagement - Oran
- **Lina Lifestyle** - Lifestyle - 7.5K followers - 9.6% engagement - Sétif
- **Tech Karim** - Tech - 11.1K followers - 6.4% engagement - Annaba

### Campagnes Mock
- **Campagne Smartphones** - Active - 250,000 DZD - 5 créateurs
- **Collection Hiver** - Pending - 180,000 DZD - 3 créateurs
- **Promo Ramadan** - Completed - 300,000 DZD - 8 créateurs

### Stats Plateforme
- Total Utilisateurs: **1,245**
- Marques: **245**
- Créateurs: **1,000**
- Campagnes Actives: **48**
- Revenus Total: **12.5M DZD**
- Revenus Mois: **2.8M DZD**

---

## 🎨 Parcours Utilisateur Recommandés

### Parcours Marque (Brand Journey)

1. **Inscription** (`/auth`)
   - Choisir "Marque"
   - Remplir formulaire entreprise
   - Créer compte

2. **Dashboard** (`/dashboard/brand`)
   - Voir statistiques
   - Explorer campagnes actives

3. **Créer Campagne**
   - Cliquer "Nouvelle Campagne"
   - Remplir le brief
   - Définir budget et dates

4. **Trouver Créateurs** (Onglet "Créateurs")
   - Filtrer par niche
   - Filtrer par wilaya
   - Inviter créateurs

5. **Analyser Résultats** (Onglet "Analytics")
   - Voir ROI
   - Portée et engagement
   - Performance par plateforme

---

### Parcours Créateur (Creator Journey)

1. **Inscription** (`/auth`)
   - Choisir "Créateur"
   - Remplir niche et wilaya
   - Créer profil

2. **Dashboard** (`/dashboard/creator`)
   - Voir stats personnelles
   - Consulter gains

3. **Campagnes Disponibles** (Onglet "Campagnes")
   - Parcourir opportunités
   - Voir budgets
   - Postuler

4. **Soumettre Contenu**
   - Créer le contenu demandé
   - Upload via plateforme
   - Attendre validation

5. **Retirer Gains** (Onglet "Gains")
   - Consulter solde
   - Choisir méthode (CCP, BaridiMob, Virement)
   - Demander retrait

---

### Parcours Admin (Admin Journey)

1. **Accès Direct** (`/dashboard/admin`)
   - Stats plateforme globales
   - Nouveaux utilisateurs

2. **Gérer Utilisateurs** (Onglet "Utilisateurs")
   - Voir liste complète
   - Approuver nouveaux inscrits
   - Bloquer si nécessaire

3. **Superviser Campagnes** (Onglet "Campagnes")
   - Voir toutes les campagnes
   - Approuver/Modifier
   - Résoudre litiges

4. **Valider Paiements** (Onglet "Paiements")
   - Demandes en attente: **24**
   - Approuver retraits
   - Historique complet

5. **Paramètres** (Onglet "Settings")
   - Commission plateforme: **15%**
   - Seuil minimum retrait: **10,000 DZD**
   - Notifications email

---

## 🔄 Workflow Complet

### Scénario: Campagne de A à Z

1. **Marque crée campagne** (`/dashboard/brand`)
   - "Lancement Nouveau Smartphone"
   - Budget: 200,000 DZD
   - 5 créateurs tech

2. **Admin approuve** (`/dashboard/admin`)
   - Vérifie le brief
   - Valide le budget
   - Active la campagne

3. **Créateurs postulent** (`/dashboard/creator`)
   - Voient la campagne
   - Soumettent leur proposition
   - Attendent sélection

4. **Marque sélectionne** (`/dashboard/brand`)
   - Choisit 5 créateurs
   - Envoie invitations
   - Définit deadlines

5. **Créateurs produisent** (`/dashboard/creator`)
   - Créent le contenu
   - Uploadent sur plateforme
   - Marquent "Terminé"

6. **Marque valide** (`/dashboard/brand`)
   - Vérifie le contenu
   - Approuve/Demande modifications
   - Libère les paiements

7. **Créateurs retirent** (`/dashboard/creator`)
   - Voient gains disponibles
   - Demandent retrait
   - Reçoivent via CCP/BaridiMob

8. **Admin valide paiements** (`/dashboard/admin`)
   - Vérifie les demandes
   - Approuve les retraits
   - Envoie confirmations

---

## 💡 Tips de Test

### Test Rapide (5 min)
```
1. Allez sur /auth
2. Inscrivez-vous comme "Marque"
3. Explorez le dashboard
4. Créez une campagne fictive
5. Parcourez le catalogue créateurs
```

### Test Complet (20 min)
```
1. Testez inscription Marque + Créateur
2. Explorez tous les onglets de chaque dashboard
3. Créez une campagne complète
4. Testez les filtres créateurs
5. Simulez une demande de retrait
6. Accédez au dashboard admin
```

### Test Admin (10 min)
```
1. Accédez directement à /dashboard/admin
2. Consultez les stats globales
3. Naviguez dans tous les onglets
4. Testez l'approbation utilisateurs
5. Consultez les paiements en attente
```

---

## 🎯 Fonctionnalités à Tester

### ✅ Navigation
- [ ] Page d'accueil → Auth
- [ ] Auth → Dashboard (bon rôle)
- [ ] Menu sidebar fonctionnel
- [ ] Mobile menu responsive

### ✅ Formulaires
- [ ] Inscription Marque
- [ ] Inscription Créateur
- [ ] Création campagne
- [ ] Demande retrait

### ✅ Filtres
- [ ] Filtre par niche (créateurs)
- [ ] Filtre par wilaya
- [ ] Filtre par statut (campagnes)

### ✅ Modals
- [ ] Modal création campagne
- [ ] Modal profil créateur (hover)

### ✅ Responsive
- [ ] Mobile (< 768px)
- [ ] Tablette (768px - 1024px)
- [ ] Desktop (> 1024px)

---

## 🐛 Bugs Connus (Simulés)

> Aucun bug réel - système mock parfaitement fonctionnel!

---

## 📞 Support

Pour toute question sur la plateforme de démo:
- Email: dev@influzy.dz
- Documentation: `README.md` et `DEVELOPER.md`

---

**Bonne découverte de Influzy!** 🇩🇿
