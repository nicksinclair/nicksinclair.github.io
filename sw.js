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
    "url": "webpack-runtime-4bdb9cf113efb5045d72.js"
  },
  {
    "url": "framework-f8b6d3dbac13973f4b32.js"
  },
  {
    "url": "app-35c7862235831c2aeeab.js"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "9da76506b677539959f2628c805f25a7"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-b67d8270ce843bd6425d.js"
  },
  {
    "url": "polyfill-0ea0cee113c898b9a3ae.js"
  },
  {
    "url": "styles.b9dd6e7cb7aff5d05d1e.css"
  },
  {
    "url": "component---src-templates-project-template-js-d5a3cfe03f0703fba1b7.js"
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
    "revision": "5a15ce778db81d8b680b76ad045f394f"
  },
  {
    "url": "page-data/projects/digital-art/page-data.json",
    "revision": "3d7600387ee56d349cc09d104667dab4"
  },
  {
    "url": "page-data/projects/form-cycle/page-data.json",
    "revision": "d37dcc2f93bb8ec9dd6da82619832d86"
  },
  {
    "url": "page-data/projects/form-grid/page-data.json",
    "revision": "c96f4d5a6a4acf94d811341db3df55d0"
  },
  {
    "url": "abdabb9fcef4ccbca324eb64164d0b89f83609dc-0650ebf9583292a4ad0d.js"
  },
  {
    "url": "component---src-pages-projects-js-1ee6d4493fb81f30ce01.js"
  },
  {
    "url": "page-data/projects/page-data.json",
    "revision": "5fc39135604bdc0d77bf24eefd098f01"
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
    "url": "component---src-templates-resume-template-js-9c4836a64897325cbe97.js"
  },
  {
    "url": "page-data/resume/page-data.json",
    "revision": "7711c430dea7408f3010cfaaf12ff1aa"
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
  if (!resources || !(await caches.match(`/app-35c7862235831c2aeeab.js`))) {
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
