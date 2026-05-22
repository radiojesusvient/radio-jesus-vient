# 📻 Radio Jésus Vient (RJV) — Progressive Web App (PWA)

Bienvenue sur le dépôt officiel de l'application **Radio Jésus Vient (RJV)**. 

Cette application est une Progressive Web App (PWA) ultra-haute-fidélité, moderne, fluide et entièrement autonome. Elle a été conçue pour offrir une expérience d'écoute spirituelle immersive, bilingue et accessible à tous les membres de la communauté, y compris sur mobile avec un mode plein écran natif.

---

## ✨ Fonctionnalités Clés (MVP)

* **📻 Flux Audio Live Ininterrompu :** Écoutez la radio en direct avec une mise en mémoire tampon intelligente et un lecteur ultra-réactif.
* **⏱️ Minuteur d'Écoute Épuré :** Affiche la durée exacte de l'écoute active à côté du badge "Flux Live" sans encombrer l'interface.
* **📖 Verset du Jour Offline-First :** Rotation automatique et 100% autonome d'un verset inspirant chaque jour à minuit (basé sur le calendrier local, sans nécessiter de connexion internet).
* **🌐 Bascule Linguistique Instantanée :** Traduction complète de l'interface en français (**FR**) et en anglais (**EN**) en un clic.
* **👵 Mode Senior (Grossissement) :** Possibilité d'ajuster la taille de la police de 80% à 140% pour un confort de lecture optimal.
* **⏰ Réveil Spirituel Progressif :** Augmentation douce et progressive du volume de 0% à 100% sur 3 secondes lors de l'activation du réveil pour un réveil serein.
* **📉 Mode Économie de Données :** Option de compression ou d'optimisation du flux pour réduire la consommation Internet (idéal pour les connexions limitées).
* **🌙 Mode Nuit & Silencieux :** Bascule visuelle instantanée entre le thème Clair et le thème Sombre (Deep Royal Glassmorphism) pour préserver les yeux.
* **💳 Dons Sécurisés (MoMo) :** Intégration ergonomique pour copier instantanément les syntaxes de transfert USSD (MTN Mobile Money, Orange Money) d'un simple clic.
* **💬 FAQ & CGU Intégrées :** Une foire aux questions sous forme d'accordéon fluide et les conditions générales d'utilisation accessibles directement dans l'application.

---

## 🛠️ Architecture Technique

L'application repose sur une philosophie **Vanilla (sans framework externe)** pour garantir une légèreté absolue, des temps de chargement ultra-rapides et une compatibilité maximale à long terme :

* **HTML5 & CSS3 :** Structure sémantique et design moderne en verre dépoli (*Glassmorphism*) avec support des variables safe-area (`env(safe-area-inset-top)`) pour les encoches des smartphones (Dynamic Island, etc.).
* **JavaScript (ES6+) :** Logique applicative réactive sans dépendances externes.
* **`manifest.json` :** Configuration PWA permettant l'installation de l'application sur l'écran d'accueil d'un iPhone (via Safari) ou Android (via Chrome) avec lancement autonome en plein écran (*standalone*).
* **`sw.js` (Service Worker) :** Stratégie de mise en cache locale performante (Cache-First) pour les polices, logos et fichiers statiques. Le flux audio en direct est explicitement exclu de la mise en cache pour garantir un streaming fluide sans gel.

---

## 🚀 Déploiement et Compilation

### 1. Hébergement Continu (Cloudflare Pages)
L'application est configurée pour être hébergée sur **Cloudflare Pages** avec déploiement continu lié à ce dépôt :
* **Dossier racine :** `/` (ou racine du dépôt)
* **Commande de build :** Aucune (laisser vide)
* **Répertoire de sortie :** `/` (racine)

### 2. Compilation Mobile (APK / iOS)
Pour générer les applications natives mobiles à partir de cette PWA :
1. Déployez l'application sur votre URL HTTPS publique (ex: Cloudflare Pages).
2. Ouvrez [PWABuilder](https://www.pwabuilder.com/).
3. Saisissez l'URL de votre application et générez les packages :
   * **Android :** Téléchargez l'APK de test et l'AAB pour Google Play Store.
   * **iOS :** Générez le projet Xcode pour l'App Store.

---

*Que la paix du Seigneur soit avec vous. Radio Jésus Vient, la foi par l'écoute.* 🕊️
