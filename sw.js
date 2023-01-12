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

importScripts("workbox-v4.3.1/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v4.3.1"});

workbox.core.setCacheNameDetails({prefix: "gatsby-plugin-offline"});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "webpack-runtime-94dd939054a26d76cf52.js"
  },
  {
    "url": "framework-f8b6d3dbac13973f4b32.js"
  },
  {
    "url": "app-09c99f487f0dd6bd16d8.js"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "8abc9a2a8dcb3556d89fd86b2c329d0d"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-b67d8270ce843bd6425d.js"
  },
  {
    "url": "polyfill-0ea0cee113c898b9a3ae.js"
  },
  {
    "url": "styles.407439d120ab896b7f30.css"
  },
  {
    "url": "component---src-templates-project-template-js-6cb546443a92d10dc09c.js"
  },
  {
    "url": "page-data/projects/cordia-lamp/page-data.json",
    "revision": "fd044aea82d5f9949f598c4f81799e3c"
  },
  {
    "url": "page-data/sq/d/3649515864.json",
    "revision": "2719ad9af56c32821fd3ae299ecf30b0"
  },
  {
    "url": "page-data/app-data.json",
    "revision": "a4e69b706cc6b63d8831180571c7aa48"
  },
  {
    "url": "page-data/projects/digital-art/page-data.json",
    "revision": "3d7600387ee56d349cc09d104667dab4"
  },
  {
    "url": "page-data/projects/form-cycle/page-data.json",
    "revision": "493aa0cdd1e0c8719d6cfcacbbf2b35f"
  },
  {
    "url": "page-data/projects/form-grid/page-data.json",
    "revision": "a7695942908e49c6ddc2aef89d2f8fe8"
  },
  {
    "url": "abdabb9fcef4ccbca324eb64164d0b89f83609dc-e0c67ef3c7234fee61fa.js"
  },
  {
    "url": "component---src-pages-projects-js-91a62f193fcf06fe3a90.js"
  },
  {
    "url": "page-data/projects/page-data.json",
    "revision": "f3411128c46ae5aa9f79d9a77e7892a0"
  },
  {
    "url": "page-data/sq/d/63159454.json",
    "revision": "9a02d8a6e855433d454d59b84f5c42e6"
  },
  {
    "url": "page-data/projects/pulse-atrium/page-data.json",
    "revision": "28b82a7a44f48b225bf89c43321c3fe3"
  },
  {
    "url": "page-data/projects/shape-cycle/page-data.json",
    "revision": "a0f186cc749491f0a17824e7cda4bc9c"
  },
  {
    "url": "page-data/projects/shape-grid/page-data.json",
    "revision": "61804d0a19937164fa67156e8115a44e"
  },
  {
    "url": "page-data/projects/visual-art/page-data.json",
    "revision": "7650ecd69bb21160ce366d11648067c0"
  },
  {
    "url": "component---src-templates-resume-template-js-b08ec1aefd978d82a4f9.js"
  },
  {
    "url": "page-data/resume/page-data.json",
    "revision": "4c7b008e8aea60f3575b5c4518e41cda"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "25dbb8ff9a4610aa1faf079a6e46356b"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/(\.js$|\.css$|static\/)/, new workbox.strategies.CacheFirst(), 'GET');
workbox.routing.registerRoute(/^https?:.*\/page-data\/.*\.json/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:.*\.(png|jpg|jpeg|webp|avif|svg|gif|tiff|js|woff|woff2|json|css)$/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:\/\/fonts\.googleapis\.com\/css/, new workbox.strategies.StaleWhileRevalidate(), 'GET');

/* global importScripts, workbox, idbKeyval */
importScripts(`idb-keyval-3.2.0-iife.min.js`)

const { NavigationRoute } = workbox.routing

let lastNavigationRequest = null
let offlineShellEnabled = true

// prefer standard object syntax to support more browsers
const MessageAPI = {
  setPathResources: (event, { path, resources }) => {
    event.waitUntil(idbKeyval.set(`resources:${path}`, resources))
  },

  clearPathResources: event => {
    event.waitUntil(idbKeyval.clear())
  },

  enableOfflineShell: () => {
    offlineShellEnabled = true
  },

  disableOfflineShell: () => {
    offlineShellEnabled = false
  },
}

self.addEventListener(`message`, event => {
  const { gatsbyApi: api } = event.data
  if (api) MessageAPI[api](event, event.data)
})

function handleAPIRequest({ event }) {
  const { pathname } = new URL(event.request.url)

  const params = pathname.match(/:(.+)/)[1]
  const data = {}

  if (params.includes(`=`)) {
    params.split(`&`).forEach(param => {
      const [key, val] = param.split(`=`)
      data[key] = val
    })
  } else {
    data.api = params
  }

  if (MessageAPI[data.api] !== undefined) {
    MessageAPI[data.api]()
  }

  if (!data.redirect) {
    return new Response()
  }

  return new Response(null, {
    status: 302,
    headers: {
      Location: lastNavigationRequest,
    },
  })
}

const navigationRoute = new NavigationRoute(async ({ event }) => {
  // handle API requests separately to normal navigation requests, so do this
  // check first
  if (event.request.url.match(/\/.gatsby-plugin-offline:.+/)) {
    return handleAPIRequest({ event })
  }

  if (!offlineShellEnabled) {
    return await fetch(event.request)
  }

  lastNavigationRequest = event.request.url

  let { pathname } = new URL(event.request.url)
  pathname = pathname.replace(new RegExp(`^`), ``)

  // Check for resources + the app bundle
  // The latter may not exist if the SW is updating to a new version
  const resources = await idbKeyval.get(`resources:${pathname}`)
  if (!resources || !(await caches.match(`/app-09c99f487f0dd6bd16d8.js`))) {
    return await fetch(event.request)
  }

  for (const resource of resources) {
    // As soon as we detect a failed resource, fetch the entire page from
    // network - that way we won't risk being in an inconsistent state with
    // some parts of the page failing.
    if (!(await caches.match(resource))) {
      return await fetch(event.request)
    }
  }

  const offlineShell = `/offline-plugin-app-shell-fallback/index.html`
  const offlineShellWithKey = workbox.precaching.getCacheKeyForURL(offlineShell)
  return await caches.match(offlineShellWithKey)
})

workbox.routing.registerRoute(navigationRoute)

// this route is used when performing a non-navigation request (e.g. fetch)
workbox.routing.registerRoute(/\/.gatsby-plugin-offline:.+/, handleAPIRequest)
