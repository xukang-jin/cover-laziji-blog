// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const pageConfig = require('./static/configuration.json');

const pages = [
  {
    path: '/',
    component: './src/pages/Index.vue'
  },
  {
    path: '/user/new',
    component: './src/pages/Index.vue'
  },
  {
    path: '/user/social',
    component: './src/pages/social/Main.vue'
  },
  {
    path: '/user/social/details/:name',
    component: './src/pages/social/Details.vue'
  },
  {
    path: '/user/blog',
    component: './src/pages/blog/Main.vue'
  },
  {
    path: '/user/blog/add',
    component: './src/pages/blog/Add.vue'
  },
  {
    path: '/user/blog/edit/:id',
    component: './src/pages/blog/Edit.vue'
  },
  {
    path: '/user/blog/details/:id',
    component: './src/pages/blog/Details.vue'
  },
  {
    path: '/user/project',
    component: './src/pages/project/Main.vue'
  },
  {
    path: '/user/project/details/:name',
    component: './src/pages/project/Details.vue'
  },
  {
    path: '/user/helper',
    component: './src/pages/helper/Main.vue'
  },
  {
    path: '/user/readme',
    component: './src/pages/readme/Main.vue'
  },
  {
    path: '/user/configure',
    component: './src/pages/configure/Main.vue'
  },
  {
    path: '/404',
    component: './src/pages/error/Error404.vue',
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

  api.createPages(params => {
    // Use the Pages API here: https://gridsome.org/docs/pages-api/
    const { createPage } = params;
    pages.map(page => {
      createPage(page);
    })
  })
}
