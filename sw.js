importScripts('/penfa/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/penfa/_nuxt/0228745996317c4e0c31.js",
    "revision": "bc67a23f5dddf3a267e8d797f88e555e"
  },
  {
    "url": "/penfa/_nuxt/0409aecaddd7df5168a7.js",
    "revision": "816e13c27a4f6d595422faf35cb0a1f9"
  },
  {
    "url": "/penfa/_nuxt/12b52997fadbbd6b24a9.js",
    "revision": "6e17817b69d6d6e055c4e9bbe592edce"
  },
  {
    "url": "/penfa/_nuxt/28d5f0f5b881ddcf6bcb.js",
    "revision": "7489f58ffb21bec5df78acc28f82ba6b"
  },
  {
    "url": "/penfa/_nuxt/2a191c125ab13eeb56ab.js",
    "revision": "4ccf15a1519e0be0fcef4345e9a436eb"
  },
  {
    "url": "/penfa/_nuxt/39f42e9d4615e62e0632.js",
    "revision": "1ddcecc7b46aefb3abfb04207e379e8c"
  },
  {
    "url": "/penfa/_nuxt/4a01b86bbef03f64a7e6.js",
    "revision": "5ad39be38ede7563f4ea269841a753e7"
  },
  {
    "url": "/penfa/_nuxt/5afa2d02aae22fa8e1a3.js",
    "revision": "2acdccb8c7039e6ec6940ca3e8ab4043"
  },
  {
    "url": "/penfa/_nuxt/5bb05a75b12ca545b727.js",
    "revision": "2844dfc8d8827e82555488d10cfd5710"
  },
  {
    "url": "/penfa/_nuxt/62f1137fb6f071092e75.js",
    "revision": "af4d4aa1638a6a3dc623a7590e469191"
  },
  {
    "url": "/penfa/_nuxt/8586461644e709be6be1.js",
    "revision": "083b69c1e2e8b4c808d23b344ad8b6ad"
  },
  {
    "url": "/penfa/_nuxt/b95a1f8e01c5a21a6a99.js",
    "revision": "9c67263583afe2e9092e62e09bea6c7f"
  },
  {
    "url": "/penfa/_nuxt/cff5bd85aeead909c837.js",
    "revision": "8e4c64cf080811c346746136fdeffb0d"
  },
  {
    "url": "/penfa/_nuxt/da94830707365f6006da.js",
    "revision": "6106ed045fb5a021e9143dc3d2ea6880"
  },
  {
    "url": "/penfa/_nuxt/e3789eb57949751a79d8.js",
    "revision": "260a885ad415397dee84de5ae7fee7a1"
  }
], {
  "cacheId": "nuxt",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/penfa/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/penfa/.*'), workbox.strategies.networkFirst({}), 'GET')
