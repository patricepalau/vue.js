const Vue = require('vue');

// 1) Vue instance
const app = new Vue({
  render: function (h) {
    return h('p', 'Hello World');
  }
});

// 2) Vue renderer
const renderer = require('vue-server-renderer').createRenderer();

// 3) render vue instance
renderer.renderToString(app, function (error, html) {
  if (error) throw error;
  console.log(html);
});
