const merge = require("webpack-merge");
const HtmlConfig = require("./html.config");
const ES6pConfig = require("./es6p.config");
const WebpackStylishConfig = require("./stylish.config");

module.exports = merge(
    HtmlConfig,
    ES6pConfig,
    WebpackStylishConfig,
);