'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "cbc311d5e5ca62abf16b7ced2a9689cb",
"assets/assets/fonts/LeagueSpartan-Black.ttf": "79495a18578f3d502d1aa75af3d83290",
"assets/assets/fonts/LeagueSpartan-Bold.ttf": "8802cb1be0ae61c1004ae75fdb4e557f",
"assets/assets/fonts/LeagueSpartan-ExtraBold.ttf": "367c12c92ed2439b5283dc1e01631a68",
"assets/assets/fonts/LeagueSpartan-ExtraLight.ttf": "8d6e61a71b3546b695784686371e1ba6",
"assets/assets/fonts/LeagueSpartan-Light.ttf": "ae640f97579a3e329290f3689b58cea0",
"assets/assets/fonts/LeagueSpartan-Medium.ttf": "1c442a6a14564c5f889f0690b5731754",
"assets/assets/fonts/LeagueSpartan-Regular.ttf": "6995b8fe00dc5dd04fee5cf96d9d41b8",
"assets/assets/fonts/LeagueSpartan-SemiBold.ttf": "921aa28a0269ad91474169dd234b49b0",
"assets/assets/fonts/LeagueSpartan-Thin.ttf": "40b0fc90c9cb7ead75ba5fbb049af0bb",
"assets/assets/icons/facebook.png": "be9399e062e130e8bf5481e297e6470f",
"assets/assets/icons/github.png": "b2d2b146a89705592d3e8fc49c38dcfe",
"assets/assets/icons/instagram.png": "ce381bd553f536619f878b91313bbea4",
"assets/assets/icons/linkedin.png": "51a0150f085136f02b031e1d88c2e5fe",
"assets/assets/icons/love.png": "463f193fb6c62c81c61905050794ce08",
"assets/assets/icons/telegram.png": "d3381a97bed28732ababdb21ddbf1d00",
"assets/assets/icons/twitter.png": "55c173edafba99646c4f052b8ebfd006",
"assets/assets/images/logo.png": "ba32643a893fe89706fb1c09f14cfe8e",
"assets/assets/images/logo_512.png": "56e9de4443b7a63a429d04fbb96aedbf",
"assets/assets/images/logo_rounded.png": "7611ed8442a5240ac0fde41680fcf3cf",
"assets/assets/images/logo_rounded_256.png": "97c0849d364eb8ba4550119e48b27023",
"assets/assets/images/splash.png": "434d85d14487404ded8e6d771e074cfa",
"assets/FontManifest.json": "f75aac0b5a0ea01c2e2f40194b6fcac5",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "9c61400e9ed883bbd899baa2e241ba63",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "eb2682e33f25cd8f1fc59011497c35f8",
"icons/apple-touch-icon.png": "c92f76c39dd36cc1d126f68e73eedc9d",
"icons/favicon.ico": "7384a5fc6c6f7b6e6caaafaf9b19d30e",
"icons/icon-192-maskable.png": "bc0bbee714848b3973d1c4d37d2961cf",
"icons/icon-192.png": "c5c1a5a4989576f41e2e6d5f6f835e20",
"icons/icon-512-maskable.png": "3e0c86ba52272ed8a3b5cbeae408ff7d",
"icons/icon-512.png": "56e9de4443b7a63a429d04fbb96aedbf",
"index.html": "c9672bf155405687da1d8b3be38dffb7",
"/": "c9672bf155405687da1d8b3be38dffb7",
"main.dart.js": "817286400d02390840401f5e8dd3abdc",
"manifest.json": "a2dd56d33571191c7bee90b5d14cf6b6",
"splash/img/dark-1x.png": "4bed854ff115c6e3234146c550d51143",
"splash/img/dark-2x.png": "b71ba042e76b678f4e9ce40f06c7cf4b",
"splash/img/dark-3x.png": "733f3ec40cfb9526a23dfa40e72299ed",
"splash/img/dark-4x.png": "899bcf94d781e5f8c529981fe91a0b56",
"splash/img/light-1x.png": "4bed854ff115c6e3234146c550d51143",
"splash/img/light-2x.png": "b71ba042e76b678f4e9ce40f06c7cf4b",
"splash/img/light-3x.png": "733f3ec40cfb9526a23dfa40e72299ed",
"splash/img/light-4x.png": "899bcf94d781e5f8c529981fe91a0b56",
"splash/splash.js": "c6a271349a0cd249bdb6d3c4d12f5dcf",
"splash/style.css": "fbb306d74d79db1f9c7a4e08fcdfaf07",
"version.json": "5ceaee010aec57e6ae9b7d0495afee8a"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
