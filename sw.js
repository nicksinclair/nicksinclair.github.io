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
    "url": "webpack-runtime-897f71aacb0ced81076f.js"
  },
  {
    "url": "framework-040b7a950aa57e2f0877.js"
  },
  {
    "url": "app-61df6ea638c0503441aa.js"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "def14877ae50a7130b57bb4d46ed30dc"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-ce752ef8374a2cb96a79.js"
  },
  {
    "url": "polyfill-1694e1575ebc9de30259.js"
  },
  {
    "url": "styles.f587dc8e9ed821cfb86f.css"
  },
  {
    "url": "component---src-templates-project-template-js-75411b16a2620e6ea818.js"
  },
  {
    "url": "page-data/projects/cordia-lamp/page-data.json",
    "revision": "9c05719b876feb9854cef8912758ecaa"
  },
  {
    "url": "page-data/sq/d/3649515864.json",
    "revision": "2719ad9af56c32821fd3ae299ecf30b0"
  },
  {
    "url": "page-data/app-data.json",
    "revision": "3c41bb1e51db00d8d94fb7db47aae9a9"
  },
  {
    "url": "page-data/projects/digital-art/page-data.json",
    "revision": "8c1de25ffd976071bfde7dc743e6b147"
  },
  {
    "url": "page-data/projects/form-cycle/page-data.json",
    "revision": "a1315410be2eedc10b140721910f317c"
  },
  {
    "url": "page-data/projects/form-grid/page-data.json",
    "revision": "e8d12feef3341c277e990883d5111c14"
  },
  {
    "url": "abdabb9fcef4ccbca324eb64164d0b89f83609dc-869a449955d24fe7e946.js"
  },
  {
    "url": "component---src-pages-projects-js-87a542bc90730b05e984.js"
  },
  {
    "url": "page-data/projects/page-data.json",
    "revision": "cd22c50f51b11a008af075fcee5403b9"
  },
  {
    "url": "page-data/sq/d/63159454.json",
    "revision": "9a02d8a6e855433d454d59b84f5c42e6"
  },
  {
    "url": "page-data/projects/pulse-atrium/page-data.json",
    "revision": "3dd2c49dedc9138629efb8b9b5ddd15f"
  },
  {
    "url": "page-data/projects/shape-cycle/page-data.json",
    "revision": "73617d1834a46ecc8cb0afdaafb8e032"
  },
  {
    "url": "page-data/projects/shape-grid/page-data.json",
    "revision": "01a6bbb3ea1118b8ab4ec57189179d18"
  },
  {
    "url": "page-data/projects/visual-art/page-data.json",
    "revision": "8e65dccd8a71dcfcee07c69c4b0220a5"
  },
  {
    "url": "component---src-templates-resume-template-js-cb603eddced020ac2204.js"
  },
  {
    "url": "page-data/resume/page-data.json",
    "revision": "04b8e691dd6ef9aa9a2c180de78cf931"
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
  if (!resources || !(await caches.match(`/app-61df6ea638c0503441aa.js`))) {
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
