// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const pageConfig = require('./static/configuration.json');
const gist = require('./src/api/gist');
const project = require('./src/api/project');
const user = require('./src/api/user')
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
    async ({ addCollection }) => {
      // Use the Data Store API here: https://gridsome.org/docs/data-store-api/

      // let { data } = await gist.list({ page: 1, pageSize: 10 });
      // const collectionNew = addCollection('newBlog');
      // data.map(async d => {
      //   let { data: info } = await gist.single(d.id);
      //   let node = {
      //     id: d.id,
      //     description: info.description,
      //     createTime: info.created_at,
      //     updateTime: info.updated_at
      //   }
      //   for (let key in info.files) {
      //     node["title"] = key;
      //     node["content"] = info.files[key]["content"];
      //   }
      //   // console.log(node)
      //   collectionNew.addNode({ ...node })
      // });

      const collectionConfig = addCollection('pageConfig');
      collectionConfig.addNode({ ...pageConfig });


      // const collectionProject = addCollection('projects');
      // let projects = await project.list(pageConfig.githubUsername)
      // console.log('projects', projects)
      // projects.map(p => {
      //   collectionProject.addNode({ ...p })
      // })

      // const collectionUser = addCollection('usersInfo');
      // let { data: users } = await user.info();

      // let { data: followers } = await user.followers({ page: 1, pageSize: 10 })

      // let { data: following } = await user.following({ page: 1, pageSize: 10 })

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
