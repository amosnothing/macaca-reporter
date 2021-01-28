/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "0598595b9a0e7e0b543431acc6774d36"
  },
  {
    "url": "assets/6d308bd9gy1fivtfos9r5j21kw130af7.jpg",
    "revision": "d90a1c01517ad749de87807813c171c0"
  },
  {
    "url": "assets/6d308bd9gy1fivuatxep5j21kw13dgs6.jpg",
    "revision": "269ef71597271e67793ad81ca823b41b"
  },
  {
    "url": "assets/6d308bd9gy1g03hp2j3bwj21950u0h58.jpg",
    "revision": "1d23411bd912744d97288bf0bb2fb52c"
  },
  {
    "url": "assets/6d308bd9gy1g03hp2kkh3j21950u0wyg.jpg",
    "revision": "879ac46ab535d00b1b6a4966be59474c"
  },
  {
    "url": "assets/6d308bd9gy1g03hp2lea4j21950u0wyx.jpg",
    "revision": "7a856e55f802d5f3cb6eab2cf1724f31"
  },
  {
    "url": "assets/6d308bd9gy1g03hp2nibhj21950u0wyf.jpg",
    "revision": "b3c8878b36ffb12957bf70227c078e29"
  },
  {
    "url": "assets/6d308bd9gy1g03hp46lhpj21950u07pl.jpg",
    "revision": "136617303b8af97421514d904dd2742b"
  },
  {
    "url": "assets/css/0.styles.979053ea.css",
    "revision": "ab5c4b4b437efd09938394cda8abb081"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.236f0ab7.js",
    "revision": "b3d81b4ab93d6b126bba9e8e96b4fee9"
  },
  {
    "url": "assets/js/11.2f566075.js",
    "revision": "46748c1d7ac6f97f7228c65cbc79390c"
  },
  {
    "url": "assets/js/12.09a9d15c.js",
    "revision": "90b230ffb6de4ce583694f5ec057d8b2"
  },
  {
    "url": "assets/js/13.24bf0204.js",
    "revision": "2393309f19b15391219555d9a03de14c"
  },
  {
    "url": "assets/js/14.50f1d98c.js",
    "revision": "5f4f8c85f8aa4a36c8cc4c8d20fdfd29"
  },
  {
    "url": "assets/js/15.71f4a6cb.js",
    "revision": "a8ebc485293b60c161d9cca2a12d891e"
  },
  {
    "url": "assets/js/2.76f2b20a.js",
    "revision": "da2178aa95a53dd550ddba08a373145c"
  },
  {
    "url": "assets/js/3.9320589a.js",
    "revision": "c8c8fa77427ac51c4def2c253c69615f"
  },
  {
    "url": "assets/js/4.d7f91150.js",
    "revision": "4fefd0b01f95e97f2ade83b575f1f956"
  },
  {
    "url": "assets/js/5.3dbe4500.js",
    "revision": "4a01525731c98bdd41bac10090995f67"
  },
  {
    "url": "assets/js/6.88fc6fe3.js",
    "revision": "ce3050c41c33348234b652bc1cbc278d"
  },
  {
    "url": "assets/js/7.1a09b872.js",
    "revision": "e3678cea798aa181baf988383e29f3ec"
  },
  {
    "url": "assets/js/8.e83a16ab.js",
    "revision": "a27462308684309643ecb3be7b001633"
  },
  {
    "url": "assets/js/9.41423540.js",
    "revision": "7ce60a05d94d9024f43724053edbdc25"
  },
  {
    "url": "assets/js/app.647fa1dc.js",
    "revision": "e57c0231d0dec2efada3302bca320c05"
  },
  {
    "url": "guide/index.html",
    "revision": "3a26cab7da718a40758bc3b71a903317"
  },
  {
    "url": "guide/install.html",
    "revision": "a65863e9f2b9b62f8219c671692740f9"
  },
  {
    "url": "guide/integration.html",
    "revision": "267f093178d0c2a6af0a37812ef9fd5e"
  },
  {
    "url": "guide/presentations.html",
    "revision": "48753c4e3fc3e97e31c3d2e07de7bff5"
  },
  {
    "url": "guide/quick-start.html",
    "revision": "26ef26f609cbf53e9f393e050314c0e7"
  },
  {
    "url": "index.html",
    "revision": "c39c5cec265aa8e7722e99f0c414c841"
  },
  {
    "url": "zh/guide/index.html",
    "revision": "80f23309a1e22d9055413eb2a93aeb20"
  },
  {
    "url": "zh/guide/install.html",
    "revision": "7c73943b805d75737c9590a054ba7a17"
  },
  {
    "url": "zh/guide/integration.html",
    "revision": "e7a4190f89654d7e90738dedb6a0721b"
  },
  {
    "url": "zh/guide/presentations.html",
    "revision": "99b73ad2a0348f654be7181148b91620"
  },
  {
    "url": "zh/guide/quick-start.html",
    "revision": "59fdeaaa2d5a6da43105a85549e3f737"
  },
  {
    "url": "zh/index.html",
    "revision": "2cca948a497088034ddbce1aefbe1285"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
