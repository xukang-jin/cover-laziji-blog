// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const pageConfig = require('./static/configuration.json');

const pages = [
  {
    path: '/user/new',
    component: './src/views/new/Main.vue'
  },
  {
    path: '/user/social',
    component: './src/views/social/Main.vue'
  },
  {
    path: '/user/social/details/:name',
    component: './src/views/social/Details.vue'
  },
  {
    path: '/user/blog',
    component: './src/views/blog/Main.vue'
  },
  {
    path: '/user/blog/add',
    component: './src/views/blog/Add.vue'
  },
  {
    path: '/user/blog/edit/:id',
    component: './src/views/blog/Edit.vue'
  },
  {
    path: '/user/blog/details/:id',
    component: './src/views/blog/Details.vue'
  },
  {
    path: '/user/project',
    component: './src/views/project/Main.vue'
  },
  {
    path: '/user/project/details/:name',
    component: './src/views/project/Details.vue'
  },
  {
    path: '/user/helper',
    component: './src/views/helper/Main.vue'
  },
  {
    path: '/user/readme',
    component: './src/views/readme/Main.vue'
  },
  {
    path: '/user/configure',
    component: './src/views/configure/Main.vue'
  },
  {
    path: '/404',
    component: './src/views/error/Error404.vue',
  }
]


module.exports = function (api) {

  api.loadSource(
    ({ addCollection }) => {
      // Use the Data Store API here: https://gridsome.org/docs/data-store-api/
      const collection = addCollection('pageConfig');
      collection.addNode({ ...pageConfig })
    }
  )

  api.createPages(({ createPage }) => {
    // Use the Pages API here: https://gridsome.org/docs/pages-api/
    pages.map(page => {
      createPage(page);
    })
  })
}
