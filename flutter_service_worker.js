'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "/.git/COMMIT_EDITMSG": "c2ca8e84155efd895124f44f7ee79561",
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
"/.git/index": "d1ce0f89d3a6a4bbd9a58c0f6fb59e4f",
"/.git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
"/.git/logs/HEAD": "f7e1158539e7205347aa64c5d35ba6a6",
"/.git/logs/refs/heads/master": "f7e1158539e7205347aa64c5d35ba6a6",
"/.git/logs/refs/remotes/origin/master": "3d8053d967bada76a38667c95c23ced4",
"/.git/objects/03/ad3d97e836fddd63912064d42a20f1f8ee5aff": "c07754dcd19e285cca675b14207a4fbb",
"/.git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
"/.git/objects/0e/7b9f3390d7e5445a62e87a922569fc75670ca3": "0ce14192187d09390259a953cec28fda",
"/.git/objects/0f/816fb5068fb5d0dc1623718a94d7a34c5edfe4": "48392ce692d6328aef69a753fa305233",
"/.git/objects/13/cd698afa86edb334bec59991cd113491a5a4f1": "01d69635e49925db17e7c32e26fc974f",
"/.git/objects/13/f8aafb0b53ab98d13e6e9211ed79874a755006": "5cfaefbbc58e086f08a7881704b87e85",
"/.git/objects/15/9b15011009e1e691b0761e5627dc3f3aa452ad": "822c0ced8e90203ed87ff7e0082d7945",
"/.git/objects/17/67afefc8ee2c7849a7d9225ac203ee6071b368": "558d3d4f1cb189dfa77c6a09bb6290c4",
"/.git/objects/1d/aaaaaf94b1b9132515e76982ff9add02c68f9e": "eeab675c2459b4335d195ebbe106ebec",
"/.git/objects/1e/4b9a5216e6e7dc203360d2899a2be8fd44ce0b": "2bc85aa0097660e456ffb559c344e080",
"/.git/objects/20/3e30b16bf5dc81c70a8fcc1a950375e88befee": "e5e9252f61814256887b48e5d5e1deab",
"/.git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
"/.git/objects/20/9aec894de83f881e2b4e1ee5356e675061f569": "e2ae22709a3f90ee630a3e76d5015603",
"/.git/objects/25/a82d5571f8e16918963e36f03b44e83c4c5763": "258acf3c0c97eb8707dca6ddc4aebcf3",
"/.git/objects/30/1ec93f8c8f9bb3bce5b420deef810f6a1b3fd2": "13a7971d58d826070f9effcd18a96fb7",
"/.git/objects/37/762cde42afaff5c9400f966001fb5e6475887c": "fcd58e44b0baedb78b54c0e6b989aeec",
"/.git/objects/3c/6a58ec2dbb64abbdddba133b53e83cd9ebf220": "3ae45acffaba810fd90a845ea25bf863",
"/.git/objects/4b/d95d4a7d06e64dbd90a88c6ef3086e65768188": "c4d3a04ac4368c75450a247413b03cc0",
"/.git/objects/52/8dbee20fad57682ce09e38eb56f55b6dcf6550": "16895932cbaf2ff861e589d811493095",
"/.git/objects/54/768a849f1924dbbf68cc41f576fe2bf0d0b73b": "008fdbadbd5f2dd02ef8f93d8b643b36",
"/.git/objects/5b/999eb53abbe2f81885829949a96bc91e6149f2": "81c86ddbc9de06832d80823b1a5477ce",
"/.git/objects/64/12b8315385991ed852e20f0908bbb7c7c8fd58": "9758f7135fb2055424d7c904657bfa04",
"/.git/objects/64/31812493637c82052d1f0b609b0e8d8ccd56f3": "d077571f041e6eba3e35cfda51d28552",
"/.git/objects/67/4577bf3e44878368cab974b5c8f6cd0dc0c417": "e20fa2e0d40bb847527dbdeea4978d3f",
"/.git/objects/6c/638c86ef464a342f0eeaee0e2ce49a1ef9a43e": "9347cb29df637744e9cf45a68342ed6a",
"/.git/objects/74/1350347a278b614c369fe02e5effcf787c01a4": "f1bca531250d413804e221df83b089df",
"/.git/objects/77/475db924ab4da9436c5a0450b163867aa58ff4": "61a31a6ac34d257d9f30c686ebac1eb1",
"/.git/objects/77/e4d894a7134f0412dd7f02a97e19c1d910acaa": "1bb22c66515cc36c7ae67fcc4497d06e",
"/.git/objects/7a/361a40813ab99eba345975530c613951acac9b": "eaa9da776f8f772f0e9ef980d71c748e",
"/.git/objects/81/0337fcab9374ea7916511a5b9b59c1fe38c5fd": "cc99e87ef5a5ad26f76eb93e555d98fa",
"/.git/objects/88/355be9ee0854e841c1c7a429c90b8e70f0286d": "534f4c61f5c6e2b935255375ae8f629b",
"/.git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
"/.git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
"/.git/objects/95/19e1d75e8e60fc461d42dceff7162076484747": "87166efde232eca9c4f1ad4118b6d046",
"/.git/objects/97/c039164176940cf8eb49fab519a12809dad3bb": "9be2c2d2b846fb88119f9a6bff24ccb8",
"/.git/objects/98/4cbb2725d4a94a6d5e03e5087b2bb87e1f916a": "d932cfe7b5bd955d267b71d151945d4e",
"/.git/objects/9c/316fc1522fe7855e7ee57355029e24509fb0a9": "08a5f247379584cfeb0e16420462ebfc",
"/.git/objects/a1/78bbd0d5031cdb4f42a052b3e938224516bdc0": "7acda7e0154e07cc5e8c5004d7dc8ec4",
"/.git/objects/ac/fc2bd208421df6dd0ef47311f5a5abf9060833": "a8471b83237d712fc82a709d1d9d843c",
"/.git/objects/b0/4f204d9aa1302e84fb3d246f916c6fcc80b400": "d71f2ccd0447daf0b7bd0454106de10d",
"/.git/objects/b6/13f89ef078d68b3ef319a5e1d5aedc6036b01f": "7e54ad72fb6987485e398ef890a1edc6",
"/.git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
"/.git/objects/dd/56eabbf298449db91bfa8644c6fbb20b8e6dda": "3fa6bb294070401dbba0b01792b84ce0",
"/.git/objects/de/496d8e53d2dc5c2ec21c4118ab08f80b30e257": "361e22fdbf8f1bf7813c228b0dbaa57a",
"/.git/objects/df/8ea9f7bbb785fb2bd56c33e289ad334a5a9cf7": "e197a698568cdc3ce3a59999ae6818e6",
"/.git/objects/e0/09f508d9a42f7a438b4ebfee0cfbe247c24a09": "79d637ea6b6e696da44e21b63df09408",
"/.git/objects/e1/4b7983f2c51af9b103bab8b217b2f15fb91172": "748035a5cd6c1bbe24adbbee66e17f7e",
"/.git/objects/e2/3a741239748621673439b3e5faa36e0d2217d6": "46b25e08aecf121de5eb519f9cf830f0",
"/.git/objects/e9/5e6e6aa9c0d7af43c2b774eabd5f9fb4954a63": "11803ab14510f19ae134ea294226b2f8",
"/.git/objects/ee/055b57734429fc8918c8de2f5497c551299d94": "427727c923fa58bed55f556a4d543643",
"/.git/objects/f1/065b2dc257a30c9c35d17453fbdda90fa39b6e": "9492646b1d6b110fd9c89c16985e48e9",
"/.git/objects/f1/dccaf0c819b3f460ad1ecd993911c761e3d56e": "a722e542014798fba304716933564781",
"/.git/objects/f7/ed5355e362ed8a7f6142632ec6f5175f5f6277": "c4e96b4298c7796605ef0360dba8681b",
"/.git/objects/fc/565ec170b7fd55cbf422b8188a6f64eddda60e": "c1d5b622c8e63d1865785872c9d4a21d",
"/.git/refs/heads/master": "8421ebde4691d6b01ed703d491fe6fe4",
"/.git/refs/remotes/origin/master": "8421ebde4691d6b01ed703d491fe6fe4",
"/assets/AssetManifest.json": "b2181656ac0eda829d9f62a5313a2c1d",
"/assets/FontManifest.json": "01700ba55b08a6141f33e168c4a6c22f",
"/assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"/assets/images/500px.png": "fa8a97a21b18557a7184c52ca7192955",
"/assets/images/body_img.jpg": "0868d6ba2e9c7c8d51a4018d6a67684f",
"/assets/images/body_img_1.jpg": "db4d7304d60e782f7d2ec8e3cc057742",
"/assets/images/body_img_2.jpg": "f06d52f8e127c527c6b9188aa0cb0825",
"/assets/images/body_img_3.jpg": "b14f0f5e63d29ac2e46331b78fe209a0",
"/assets/images/body_img_4.jpg": "744b842f5b4600ad58a1b7664fc0b1cf",
"/assets/images/github.png": "a5881fb9773df49c08d9e8a03c9d9f6e",
"/assets/images/linkedin.png": "14d2385e93928785309d0118b2fe5bc8",
"/assets/images/shri_material.gif": "284dcd859c56f98e6af5804ae5d9d6c3",
"/assets/images/twitter.png": "e5640de6ec8ad4f2639fd0e302ce3cff",
"/assets/LICENSE": "fb5cf315fae0ae645c0f185ca70c5e1b",
"/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"/favicon-temp.png": "5dcef449791fa27946b3d35ad8803796",
"/favicon.png": "5763a76962dca0f00460b2cafcea5917",
"/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"/index.html": "58675cc8d6c2f34970bd9320f83de753",
"/main.dart.js": "86469e613bc8b5347aa77607e91cf8c3",
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
