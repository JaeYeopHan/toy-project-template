const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  plugins: [
    new CopyWebpackPlugin([
      {
        from: 'public/css/style.css',
        to: 'css/style.css',
        force: true,
      },
      {
        from: 'public/img',
        to: 'img',
        force: true,
      },
    ]),
  ],
}
