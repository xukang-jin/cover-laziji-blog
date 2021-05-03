const c1 = () => import(/* webpackChunkName: "page--src--pages--index-vue" */ "/root/cover-laziji-blog/src/pages/Index.vue")
const c2 = () => import(/* webpackChunkName: "page--node-modules--gridsome--app--pages--404-vue" */ "/root/cover-laziji-blog/node_modules/gridsome/app/pages/404.vue")

export default [
  {
    path: "/user/new/",
    component: c1
  },
  {
    name: "404",
    path: "/404/",
    component: c2
  },
  {
    name: "home",
    path: "/",
    component: c1
  },
  {
    name: "*",
    path: "*",
    component: c2
  }
]
