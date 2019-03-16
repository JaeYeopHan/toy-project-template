const Stylish = require("webpack-stylish");

module.exports = {
	plugins: [
		new Stylish(),
	],
	stats: "none"	// 기본 ouput 출력하지 않도록. same with false
}
