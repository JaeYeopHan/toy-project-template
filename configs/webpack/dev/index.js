const merge = require("webpack-merge");
const DevServerConfigPromise = require("./devServer.config");
const SourceMapConfig = require("./sourceMap.config");

module.exports = (options) => Promise.all([DevServerConfigPromise(options), SourceMapConfig])
	.then(configs => merge(...configs));
