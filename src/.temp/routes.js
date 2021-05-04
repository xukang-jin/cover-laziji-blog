const c1 = () => import(/* webpackChunkName: "page--src--pages--social--details-vue" */ "/root/cover-laziji-blog/src/pages/social/Details.vue")
const c2 = () => import(/* webpackChunkName: "page--src--pages--project--details-vue" */ "/root/cover-laziji-blog/src/pages/project/Details.vue")
const c3 = () => import(/* webpackChunkName: "page--src--pages--blog--edit-vue" */ "/root/cover-laziji-blog/src/pages/blog/Edit.vue")
const c4 = () => import(/* webpackChunkName: "page--src--pages--blog--details-vue" */ "/root/cover-laziji-blog/src/pages/blog/Details.vue")
const c5 = () => import(/* webpackChunkName: "page--src--pages--blog--add-vue" */ "/root/cover-laziji-blog/src/pages/blog/Add.vue")
const c6 = () => import(/* webpackChunkName: "page--src--pages--social--main-vue" */ "/root/cover-laziji-blog/src/pages/social/Main.vue")
const c7 = () => import(/* webpackChunkName: "page--src--pages--readme--main-vue" */ "/root/cover-laziji-blog/src/pages/readme/Main.vue")
const c8 = () => import(/* webpackChunkName: "page--src--pages--project--main-vue" */ "/root/cover-laziji-blog/src/pages/project/Main.vue")
const c9 = () => import(/* webpackChunkName: "page--src--pages--index-vue" */ "/root/cover-laziji-blog/src/pages/Index.vue")
const c10 = () => import(/* webpackChunkName: "page--src--pages--helper--main-vue" */ "/root/cover-laziji-blog/src/pages/helper/Main.vue")
const c11 = () => import(/* webpackChunkName: "page--src--pages--common--token-dialog-vue" */ "/root/cover-laziji-blog/src/pages/common/TokenDialog.vue")
const c12 = () => import(/* webpackChunkName: "page--src--pages--configure--main-vue" */ "/root/cover-laziji-blog/src/pages/configure/Main.vue")
const c13 = () => import(/* webpackChunkName: "page--src--pages--blog--main-vue" */ "/root/cover-laziji-blog/src/pages/blog/Main.vue")
const c14 = () => import(/* webpackChunkName: "page--src--pages--error--error404-vue" */ "/root/cover-laziji-blog/src/pages/error/Error404.vue")
const c15 = () => import(/* webpackChunkName: "page--src--pages--license-vue" */ "/root/cover-laziji-blog/src/pages/License.vue")

export default [
  {
    name: "__user_social_details_name",
    path: "/user/social/details/:name",
    component: c1,
    meta: {
      dataPath: "/user/social/details/_name.json",
      dynamic: true
    }
  },
  {
    name: "__user_project_details_name",
    path: "/user/project/details/:name",
    component: c2,
    meta: {
      dataPath: "/user/project/details/_name.json",
      dynamic: true
    }
  },
  {
    name: "__user_blog_edit_id",
    path: "/user/blog/edit/:id",
    component: c3,
    meta: {
      dataPath: "/user/blog/edit/_id.json",
      dynamic: true
    }
  },
  {
    name: "__user_blog_details_id",
    path: "/user/blog/details/:id",
    component: c4,
    meta: {
      dataPath: "/user/blog/details/_id.json",
      dynamic: true
    }
  },
  {
    path: "/user/blog/add/",
    component: c5
  },
  {
    path: "/user/social/",
    component: c6
  },
  {
    path: "/user/readme/",
    component: c7
  },
  {
    path: "/user/project/",
    component: c8
  },
  {
    path: "/user/new/",
    component: c9
  },
  {
    path: "/social/main/",
    component: c6
  },
  {
    path: "/readme/main/",
    component: c7
  },
  {
    path: "/project/main/",
    component: c8
  },
  {
    path: "/user/helper/",
    component: c10
  },
  {
    path: "/common/token-dialog/",
    component: c11
  },
  {
    path: "/user/configure/",
    component: c12
  },
  {
    path: "/social/details/",
    component: c1
  },
  {
    path: "/user/blog/",
    component: c13
  },
  {
    path: "/helper/main/",
    component: c10
  },
  {
    path: "/project/details/",
    component: c2
  },
  {
    path: "/configure/main/",
    component: c12
  },
  {
    path: "/blog/main/",
    component: c13
  },
  {
    path: "/error/error404/",
    component: c14
  },
  {
    path: "/blog/edit/",
    component: c3
  },
  {
    path: "/blog/details/",
    component: c4
  },
  {
    path: "/blog/add/",
    component: c5
  },
  {
    path: "/license/",
    component: c15
  },
  {
    name: "404",
    path: "/404/",
    component: c14
  },
  {
    name: "home",
    path: "/",
    component: c9
  },
  {
    name: "*",
    path: "*",
    component: c14
  }
]
