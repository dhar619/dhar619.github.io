'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "/.git/COMMIT_EDITMSG": "11db8a9c85b53f0aae1eb65d6672af75",
"/.git/config": "63d765bac844218760ee6fba6098bf6c",
"/.git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
"/.git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
"/.git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
"/.git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
"/.git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
"/.git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
"/.git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
"/.git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
"/.git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
"/.git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
"/.git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
"/.git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
"/.git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
"/.git/index": "eab1c6a64d4d83b0028defc743784d0a",
"/.git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
"/.git/logs/HEAD": "393d605492aed653a0cb42e2c085e9ec",
"/.git/logs/refs/heads/master": "393d605492aed653a0cb42e2c085e9ec",
"/.git/logs/refs/remotes/origin/master": "630524a2730de874c6853f39de56c6c2",
"/.git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
"/.git/objects/0e/7b9f3390d7e5445a62e87a922569fc75670ca3": "0ce14192187d09390259a953cec28fda",
"/.git/objects/0f/816fb5068fb5d0dc1623718a94d7a34c5edfe4": "48392ce692d6328aef69a753fa305233",
"/.git/objects/13/cd698afa86edb334bec59991cd113491a5a4f1": "01d69635e49925db17e7c32e26fc974f",
"/.git/objects/15/9b15011009e1e691b0761e5627dc3f3aa452ad": "822c0ced8e90203ed87ff7e0082d7945",
"/.git/objects/17/67afefc8ee2c7849a7d9225ac203ee6071b368": "558d3d4f1cb189dfa77c6a09bb6290c4",
"/.git/objects/1d/aaaaaf94b1b9132515e76982ff9add02c68f9e": "eeab675c2459b4335d195ebbe106ebec",
"/.git/objects/20/3e30b16bf5dc81c70a8fcc1a950375e88befee": "e5e9252f61814256887b48e5d5e1deab",
"/.git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
"/.git/objects/30/1ec93f8c8f9bb3bce5b420deef810f6a1b3fd2": "13a7971d58d826070f9effcd18a96fb7",
"/.git/objects/37/762cde42afaff5c9400f966001fb5e6475887c": "fcd58e44b0baedb78b54c0e6b989aeec",
"/.git/objects/3c/6a58ec2dbb64abbdddba133b53e83cd9ebf220": "3ae45acffaba810fd90a845ea25bf863",
"/.git/objects/4b/d95d4a7d06e64dbd90a88c6ef3086e65768188": "c4d3a04ac4368c75450a247413b03cc0",
"/.git/objects/64/12b8315385991ed852e20f0908bbb7c7c8fd58": "9758f7135fb2055424d7c904657bfa04",
"/.git/objects/64/31812493637c82052d1f0b609b0e8d8ccd56f3": "d077571f041e6eba3e35cfda51d28552",
"/.git/objects/6c/638c86ef464a342f0eeaee0e2ce49a1ef9a43e": "9347cb29df637744e9cf45a68342ed6a",
"/.git/objects/74/1350347a278b614c369fe02e5effcf787c01a4": "f1bca531250d413804e221df83b089df",
"/.git/objects/77/e4d894a7134f0412dd7f02a97e19c1d910acaa": "1bb22c66515cc36c7ae67fcc4497d06e",
"/.git/objects/81/0337fcab9374ea7916511a5b9b59c1fe38c5fd": "cc99e87ef5a5ad26f76eb93e555d98fa",
"/.git/objects/88/355be9ee0854e841c1c7a429c90b8e70f0286d": "534f4c61f5c6e2b935255375ae8f629b",
"/.git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
"/.git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
"/.git/objects/95/19e1d75e8e60fc461d42dceff7162076484747": "87166efde232eca9c4f1ad4118b6d046",
"/.git/objects/9c/316fc1522fe7855e7ee57355029e24509fb0a9": "08a5f247379584cfeb0e16420462ebfc",
"/.git/objects/a1/78bbd0d5031cdb4f42a052b3e938224516bdc0": "7acda7e0154e07cc5e8c5004d7dc8ec4",
"/.git/objects/b0/4f204d9aa1302e84fb3d246f916c6fcc80b400": "d71f2ccd0447daf0b7bd0454106de10d",
"/.git/objects/b6/13f89ef078d68b3ef319a5e1d5aedc6036b01f": "7e54ad72fb6987485e398ef890a1edc6",
"/.git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
"/.git/objects/dd/56eabbf298449db91bfa8644c6fbb20b8e6dda": "3fa6bb294070401dbba0b01792b84ce0",
"/.git/objects/de/496d8e53d2dc5c2ec21c4118ab08f80b30e257": "361e22fdbf8f1bf7813c228b0dbaa57a",
"/.git/objects/df/8ea9f7bbb785fb2bd56c33e289ad334a5a9cf7": "e197a698568cdc3ce3a59999ae6818e6",
"/.git/objects/e1/4b7983f2c51af9b103bab8b217b2f15fb91172": "748035a5cd6c1bbe24adbbee66e17f7e",
"/.git/objects/f1/065b2dc257a30c9c35d17453fbdda90fa39b6e": "9492646b1d6b110fd9c89c16985e48e9",
"/.git/objects/f1/dccaf0c819b3f460ad1ecd993911c761e3d56e": "a722e542014798fba304716933564781",
"/.git/objects/f7/ed5355e362ed8a7f6142632ec6f5175f5f6277": "c4e96b4298c7796605ef0360dba8681b",
"/.git/objects/fc/565ec170b7fd55cbf422b8188a6f64eddda60e": "c1d5b622c8e63d1865785872c9d4a21d",
"/.git/refs/heads/master": "abe153156d6bb462316a6cd9e476477c",
"/.git/refs/remotes/origin/master": "abe153156d6bb462316a6cd9e476477c",
"/assets/AssetManifest.json": "f3f09a97697bbd50b798ff2646a14f14",
"/assets/FontManifest.json": "01700ba55b08a6141f33e168c4a6c22f",
"/assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"/assets/images/500px.png": "fa8a97a21b18557a7184c52ca7192955",
"/assets/images/body_img.jpg": "0868d6ba2e9c7c8d51a4018d6a67684f",
"/assets/images/github.png": "a5881fb9773df49c08d9e8a03c9d9f6e",
"/assets/images/linkedin.png": "14d2385e93928785309d0118b2fe5bc8",
"/assets/images/shri_material.gif": "284dcd859c56f98e6af5804ae5d9d6c3",
"/assets/images/twitter.png": "e5640de6ec8ad4f2639fd0e302ce3cff",
"/assets/LICENSE": "6f23e993ea65980369fbb2b3e93b24c3",
"/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"/favicon-temp.png": "5dcef449791fa27946b3d35ad8803796",
"/favicon.png": "5763a76962dca0f00460b2cafcea5917",
"/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"/index.html": "58675cc8d6c2f34970bd9320f83de753",
"/main.dart.js": "fd7c96b2888ca3dad2392da73b821260",
"/manifest.json": "1be9db6342f3c7d5d6ad928f61c39cf0"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
