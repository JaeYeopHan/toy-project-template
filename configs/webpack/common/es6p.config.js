const webpack = require("webpack");
const path = require("path");

module.exports = {
	module: {
		rules: [
			// babel
			{
				test: /\.js$/,
				exclude: /(node_modules|build)/,
				loader: "babel-loader",
			},
		],
	},
}
