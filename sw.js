const CACHE_NAME = 'rjv-app-cache-v1';
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './RJV_app_glassmorphism.html',
  './manifest.json',
  './LOGO PNG.png',
  'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Outfit:wght@400;600;700;800&family=Playfair+Display:ital,wght@0,600;1,400&display=swap'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('[Service Worker] Caching app shell');
        return cache.addAll(ASSETS_TO_CACHE);
      })
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys.map(key => {
          if (key !== CACHE_NAME) {
            console.log('[Service Worker] Removing old cache', key);
            return caches.delete(key);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);
  
  // Eviter absolument d'intercepter ou de mettre en cache le flux audio dynamique de Zeno.fm
  if (url.hostname.includes('zeno.fm') || url.pathname.includes('yuQpum') || event.request.url.includes('stream')) {
    return; // Laisse le navigateur gérer directement via le réseau sans intervention
  }
  
  // Stratégie Cache-First pour les assets statiques avec repli réseau
  event.respondWith(
    caches.match(event.request)
      .then(cachedResponse => {
        if (cachedResponse) {
          return cachedResponse;
        }
        return fetch(event.request).then(response => {
          // S'assurer que la réponse est valide avant de la mettre en cache
          if (!response || response.status !== 200 || response.type !== 'basic') {
            return response;
          }
          
          // Mise en cache dynamique des ressources du même domaine (hors scripts temporaires)
          if (url.origin === self.location.origin) {
            const responseToCache = response.clone();
            caches.open(CACHE_NAME).then(cache => {
              cache.put(event.request, responseToCache);
            });
          }
          
          return response;
        });
      }).catch(() => {
        // En cas de déconnexion totale et échec réseau, renvoyer l'index
        if (event.request.mode === 'navigate') {
          return caches.match('./index.html');
        }
      })
  );
});
