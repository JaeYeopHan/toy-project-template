const webpack = require("webpack");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
	plugins: [
		new UglifyJsPlugin({
			sourceMap: true,
			uglifyOptions: {
				compress: {
					warnings: true, // dev terminal console
					drop_console: true, // drop console.* calls
					dead_code: true, // drop unreachable code
					unused: true, // drop unref'd vars/funcs
				}
			}
		})
	]
};
