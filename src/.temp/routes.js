const c1 = () => import(/* webpackChunkName: "page--src--templates--google-news-vue" */ "/Users/tim/code/other/google-news/src/templates/GoogleNews.vue")
const c2 = () => import(/* webpackChunkName: "page--src--pages--about-vue" */ "/Users/tim/code/other/google-news/src/pages/About.vue")
const c3 = () => import(/* webpackChunkName: "page--node-modules--gridsome--app--pages--404-vue" */ "/Users/tim/code/other/google-news/node_modules/gridsome/app/pages/404.vue")
const c4 = () => import(/* webpackChunkName: "page--src--templates--locale-vue" */ "/Users/tim/code/other/google-news/src/templates/Locale.vue")
const c5 = () => import(/* webpackChunkName: "page--src--pages--index-vue" */ "/Users/tim/code/other/google-news/src/pages/Index.vue")

export default [
  {
    path: "/:localeId_raw/:year/:month/:day/:topicId/",
    component: c1
  },
  {
    path: "/about/",
    component: c2
  },
  {
    name: "404",
    path: "/404/",
    component: c3
  },
  {
    path: "/:id/",
    component: c4
  },
  {
    name: "home",
    path: "/",
    component: c5
  },
  {
    name: "*",
    path: "*",
    component: c3
  }
]
