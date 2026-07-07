const path = require('path');
const webpack = require('webpack');

exports.onCreateWebpackConfig = ({ actions, getConfig }) => {
  const config = getConfig();
  const routerHistory = path.resolve(__dirname, 'node_modules/@reach/router/lib/history.js');
  const routerUtils = path.resolve(__dirname, 'node_modules/@reach/router/lib/utils.js');

  config.resolve = config.resolve || {};
  config.resolve.alias = {
    ...(config.resolve.alias || {}),
    '@reach/router/es/lib/history': routerHistory,
    '@reach/router/es/lib/history.js': routerHistory,
    '@reach/router/es/lib/utils': routerUtils,
    '@reach/router/es/lib/utils.js': routerUtils,
  };

  config.plugins = config.plugins || [];
  config.plugins.push(
    new webpack.NormalModuleReplacementPlugin(
      /^core-js\/modules\/es\.array\.sort\.js$/,
      path.resolve(__dirname, 'node_modules/core-js/modules/es.array.sort.js')
    )
  );

  actions.replaceWebpackConfig(config);
};

exports.createPages = ({boundActionCreators, graphql}) => {
  const {createPage} = boundActionCreators;

  const postTemplate = path.resolve('src/templates/post.js');  

  return graphql(`{
    allMarkdownRemark {
      edges {
        node {
          html
          id
          frontmatter {
            path
          }
        }
      }
    }
  }`)
  .then(res => {
    if(res.errors) {
      return Promise.reject(res.errors);
    }

    res.data.allMarkdownRemark.edges.forEach(({node}) => {
      createPage({
        path: node.frontmatter.path,
        component: postTemplate
      })
    })

  })
}
