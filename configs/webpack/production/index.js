const merge = require("webpack-merge");
const ESLintConfig = require("./eslint.config");
const UglifyConfig = require("./uglify.config");
const SourceMapConfig = require("./sourceMap.config");
const BundleAnalyzerConfig = require("./bundleAnalyzer.config");

module.exports = merge(
    ESLintConfig,
    SourceMapConfig,
    UglifyConfig,
    BundleAnalyzerConfig,
);
