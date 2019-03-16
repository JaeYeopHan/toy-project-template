const merge = require('webpack-merge')
const path = require('path')

const webpackCommonConfig = require('./configs/webpack/common')
const webpackDevConfig = require('./configs/webpack/dev')
const webpackProdConfig = require('./configs/webpack/production')

process.traceDeprecation = true

module.exports = (options = {}) => {
  const entryOutputConfig = {
    entry: {
      Controller: './src/js/index.js', // "결과이름": [entry 파일 목록]
    },
    output: {
      filename: 'js/[name].js', // 결과 파일 이름
      path: path.resolve(process.cwd(), 'dist'), // 결과 기준 폴더
      libraryTarget: 'window', // 결과 모듈 포맷 [commonjs | amd | umd | this | window | var (IE하위 오류로 window 사용 권장)]
    },
    mode: 'none',
  }

  // merge the webpack configs
  return Promise.all([
    entryOutputConfig,
    webpackCommonConfig,
    options.dev ? webpackDevConfig(options) : webpackProdConfig,
  ]).then(configs => merge(...configs))
}
