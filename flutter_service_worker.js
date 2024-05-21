'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "30ed59c636919d19f204b073d2c385d8",
".git/config": "4b71b9aa4dbdcf84fb7ef85e3382949d",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "c8803b260fd7189783c3d7aa5960da4a",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "6b6ce3cd474ec059fa5781cfd7cbee7e",
".git/logs/refs/heads/master": "6b6ce3cd474ec059fa5781cfd7cbee7e",
".git/logs/refs/remotes/origin/master": "db7c18f50de5c3978a92e2f93b949e63",
".git/objects/00/de2d11be109ee51d3c93e9ec3610cf1a8f2a46": "08bc7f2d07520c4008d7680a44d27380",
".git/objects/07/546ad844e916a45056aea48cedd95914b3e9b2": "545aa7dd0ea9784e88a521836a686079",
".git/objects/07/74c17c0fa7a7e87e24a6935830998d92b52c75": "cd62ee54b7ceea7b2a7804e69b1d9134",
".git/objects/0f/c066ab604cd2d2da50242787437cd050bda454": "9188b7787ae4665e3d91a2dea7f31fbe",
".git/objects/16/5ce0ddf03a820a38f48cba9aa0c9df9b6e6b79": "71df17c95c3124eada62b59e7dabda78",
".git/objects/18/d0dca4b67ee3f58f0fb1125036e5fbba8829ac": "682d95ff73dba1bebdba8db13beefeaf",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/22/6e02b6c9a78a9835f86710b968074db2a2d54b": "98ae3909ec819e028f5a91699e1ecd64",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/2c/6267052873d2601b4694d39729c0d502b12e07": "efee8e6b40299119ba324ea846acb43b",
".git/objects/2f/5d5eb47f0871b8cc7f9ef4ea7c855439e61f11": "695d2c02b1b628700c51bc028784ac10",
".git/objects/38/58598a6a269304909cfbfd96b0e20a2418656e": "fe529ab5070949f386ae66ac603c891d",
".git/objects/3a/09b3af5bc64e202767e32093b91e1fd4898c6d": "eacee2126666be31783a8ffbf8815cd9",
".git/objects/41/703c0accb6858165b5bd7030f4bac08d719a1a": "991b64722f75bc7aab1d002f91d8342d",
".git/objects/42/7a3aa78bdcac460f18d356b9a68661c60cd5d9": "68d9ed3bda32bfda62d2c73c03f5702f",
".git/objects/44/6dd00009826aac032537fcbd2580931fe35060": "ed5d9a492862036e5219640f58adbbd7",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4a/39079e580dc9be820cba2fae41238c49eaa798": "ada1a19fea32fbb6719120809b9eae60",
".git/objects/50/48a0bfec2adb07c683e6a5edb65377430265b5": "2f6f6d9fad2b73d37d3759a518126f11",
".git/objects/50/c613cf26f7c0fe2c94705ab77ddf9af91e740d": "4b5da1ddf5692c737fa14f6c8ccf428f",
".git/objects/50/ddb98bbc2161d1dd38ca91380b1f7538bbab63": "688f10051e2db6bf4d48a47606e5775a",
".git/objects/58/f250b010dad6f7a982e108b58152fd2b65d0c8": "41a0ab3233ed7c3e113cb16b6c32ad10",
".git/objects/5a/7b05e1be311772247124911182fda78fde2cec": "d38bfbb93663df272dc4920186bd1040",
".git/objects/5e/3a57a600266add596f5a60cd58c80019428cd7": "3a1c821e4850346b23a8049f824d42c9",
".git/objects/68/df12cd539d750bbba84986f7cea670597fe568": "b9554d1b27c3c4e7a7aaa09662c23c15",
".git/objects/6f/9cad4c116bc8d72e2497226abb5c05ee64982c": "0d104480d68c1652a53721377a02a882",
".git/objects/71/0978b5000889ed0a189bd4cecbfa169d2cd066": "273e15d1521769b3b4293a034fcfd8ce",
".git/objects/71/7117947090611c3967f8681ab1ac0f79bca7fc": "ad4e74c0da46020e04043b5cf7f91098",
".git/objects/71/7809363ed19bdd7e1d78f6e421e40a96bc29e3": "9414a3044cb191cc3f57340f57c3dc93",
".git/objects/71/e79b922d4a0c8b18ee03ed77bc7a12a8149443": "b8f67eee670e001d7752e277a76b4193",
".git/objects/7c/09d499f23e8c9cfadbd067e09e62b423cd8b4a": "4f5d6ea007527788d254cd3ceeb9b8a8",
".git/objects/7c/71da36d7b3bb8bfac90d9ccb7fd9a02be909f9": "63a17d998b1a46e8e3863836d2dfc59f",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/85/8868cf73ff6a33b79dacd328b60bbc51fe0283": "278e029a08539299c69b74deba76fae5",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/1e9f707da4665975c241a4448b5a6784873c34": "eddee0527ec04943e70e69cbb0717d3f",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/c2601da0573a6fe7f454bcc1aa3114ed5030ff": "147954370b904fd5f62eb868aaddf369",
".git/objects/92/8549353a23c3cf0388a561a98619c7a485e055": "ef6e503e704b5077c7a071786351253d",
".git/objects/92/8c5b40658fda195f4f87e1e8bdd0af375db3dd": "65c73d1cab5095df71199abd79fb2551",
".git/objects/94/bfb1463ad8331bfd687bc751b8920b133da744": "fd2d8c0d844b234856b36b93f652048f",
".git/objects/9d/872d16a0dbffc3263b17f83f4080d4879c4ac2": "0cac5379231adde5a20778ad4fcf6f79",
".git/objects/a7/b53e291f610cf0f3e7d9f7245af0486e8cf410": "9d0b3583489980bfa9ce7e714e63e0db",
".git/objects/af/742adee0a85dd21ea96cbd84182e30e085d6cf": "aa25b932ec40efacb1efe27e7cf25d82",
".git/objects/b1/032bbb0fcb56da2005ae4fbda1c83da8a918f3": "ac81510a9a8f8cdd4d423b3c3e8c0b55",
".git/objects/b5/0254288cc6319d153c4af1d64870d95ee2436f": "468a6506934a07c970a4739eae75eedd",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/a870cc0131737275a8bc0e3c016c4f43366dff": "685870804c91427e49b56914bbc1384f",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/bd/23b4610703634ff8b2799896ddb6bbe9b65ff8": "83375a957e138f32e1a9282c4c5d65ef",
".git/objects/c4/9b34cf8b2c9ef64cfdbc8bd7638a8fe716acb2": "d265ed0780ffb0a32fc51d908d431c48",
".git/objects/c5/f4bc2a4da91586f3005813077f0d0aa9040f82": "3191028b787554cee4652f5050144bff",
".git/objects/c7/7d77ff105e9801553e71cf55fabe4c559d3153": "7ff600fab769f40d5576cd07e98515b0",
".git/objects/ca/8482c88c44dcfdf9ead9d3726df9574ac9775c": "81cbf504c8b90bc81a07b514349a4ac5",
".git/objects/cc/cb9ec448ff8208b74db811de2ec8d27b4031a3": "0b3c565330736bd3caeb933b50f65839",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/0229fac4999760b6abb1a3af80a2b52f0e40c3": "9066d25cd11e02810bf7ca2c00d8a95b",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/dd/c1cebc8fc09d14381e785284862bc2c485d730": "4b9648b643a1ff363e655c06ac44e111",
".git/objects/e8/2c5850db3a3482d0c954a4dc122c02de555ce7": "d357cd906b3805bf81477f5527cca086",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f1/d78c4e433d3354f56b54d8f2ebb1639703eeeb": "2fce9030986de825b5f3a54073c97d50",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f7/be64b4aaca3f7db88e93942e24e79cfb271a44": "53bd4cf61f0c08b3054443c1053c6da1",
".git/objects/f8/bfd5a1e0411ca2d606b7acc02ea175237ba012": "2c35eafc7b5a8d8728808212f0f39efe",
".git/refs/heads/master": "9485b2b60b9f6f7e8e563b72dc55cbec",
".git/refs/remotes/origin/master": "9485b2b60b9f6f7e8e563b72dc55cbec",
"assets/AssetManifest.bin": "c6c0cf4fec1068df3d47af936cb54e0d",
"assets/AssetManifest.bin.json": "b1c697fe5d6caa5f802e8846f19fda69",
"assets/AssetManifest.json": "7dd93c0b250d111f76733068414db951",
"assets/assets/animated_login.gif": "119e002cff3a962945962dbd3061a6c3",
"assets/assets/bubles_login.png": "e058af3ac30804dc3cf489f9112fcb6a",
"assets/assets/buildship.png": "47f97910fe96df0f0e5a1cd1ca9ae2e1",
"assets/assets/cookies_ui.gif": "c5ba915fb2fd401c5033240bd0dd0695",
"assets/assets/crypto1.png": "ba9c64bf6ed42a8e0b6845173b924a2f",
"assets/assets/crypto2.png": "07f81263e3002338c81076baed1e0100",
"assets/assets/CV_Flutter.pdf": "015b645900002585e4306e6495aa248b",
"assets/assets/dart.png": "31976ff22bb0bd0ce18da966097ac742",
"assets/assets/ff.png": "b66b38718e1081e7ff666bc4246d415d",
"assets/assets/fir.png": "de1546f8bcc43f9252f70ff7509e468b",
"assets/assets/flutter.png": "280061a25e491cd2ab4a6ffd889bc66c",
"assets/assets/glass_login.png": "8e697815c319fc3494f122122c3b2bf7",
"assets/assets/hotels_ui.gif": "385e40d4b7a22f8d82d630d1420d08a5",
"assets/assets/lin.png": "7960cde0538c122ccab9cf122a7c5531",
"assets/assets/news_app.gif": "6d48cb356cbc8b47d0c4d5bf82fd4881",
"assets/assets/pexels.gif": "775af05b75ab48f19bd35001e80b04b7",
"assets/assets/plants_ui.gif": "d6c2ac54b5f2f233dc58f1da4a173f26",
"assets/assets/playstore%2520(1).png": "61ffd11173561ba75becfdea2da40219",
"assets/assets/playstore.png": "18fab95d924ef304111a8efd2620c0a6",
"assets/assets/pt1.gif": "298ba103f28b3d9aec88e0a0697b809a",
"assets/assets/pt2.gif": "2ce5667e17446dfd18bd00363c59cb1b",
"assets/assets/red_login.gif": "aa19e5b8ee7a23f536c3e4a170f7d537",
"assets/assets/social.png": "ce3b4eb69ebfc35b42c34041024ba781",
"assets/assets/supabase.png": "31897aca639035129bcaa32db7d0edb4",
"assets/assets/SV.png": "d2ddee34f4da98f26cc16fb5d22817d4",
"assets/assets/travel_ui.gif": "ba0a9bb44ef79bc2048d64ef214cf468",
"assets/assets/weather_app.gif": "9d712f5074949c38f021fd1f5551c27c",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/NOTICES": "442563b5fe2c3c14b5ac0e901b509732",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "22fab51ed0ebdac43c4dc58e6b97650c",
"/": "22fab51ed0ebdac43c4dc58e6b97650c",
"main.dart.js": "9eddb91b9c7b9c43bfab8f9f1f637413",
"manifest.json": "9489fd5631ba1e20b033acee24aa6a18",
"version.json": "fb8d4678888024cd5f83d8522bb3a722"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
