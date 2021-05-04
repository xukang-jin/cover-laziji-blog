const request = require('../utils/request')
// import store from '../store/index'

module.exports = {
  verifyToken: function (token) {
    return request({
      url: '/user?access_token=' + token
    })
  },
  getInfo: function () {
    // let githubUsername = store.state.configuration.githubUsername
    return request({
      url: '/users/' + 'GitHub-Laziji'
    })
  },
  followers: function (query) {
    // let githubUsername = store.state.configuration.githubUsername
    return request({
      url: `/users/${'GitHub-Laziji'}/followers?page=${query.page}&per_page=${query.pageSize}`
    })
  },
  following: function (query) {
    // let githubUsername = store.state.configuration.githubUsername
    return request({
      url: `/users/${'GitHub-Laziji'}/following?page=${query.page}&per_page=${query.pageSize}`
    })
  },
  info: function (githubUsername) {
    return request({
      url: `/users/${'GitHub-Laziji'}`
    })
  },
}