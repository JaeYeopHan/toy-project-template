const merge = require('webpack-merge')
const HtmlConfig = require('./html.config')
const ES6pConfig = require('./es6p.config')
const SCSSConfig = require('./scss.config')
const ImageConfig = require('./image.config')
const TemporaryDataConfig = require('./temporary.data.config')
const WebpackStylishConfig = require('./stylish.config')

module.exports = merge(
  HtmlConfig,
  ES6pConfig,
  SCSSConfig,
  ImageConfig,
  TemporaryDataConfig,
  WebpackStylishConfig,
)
