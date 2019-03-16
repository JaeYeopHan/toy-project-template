const os = require("os");

const findIpAddress = (findIfname = "en0") => {
	let polyfilled = false;

	Array.prototype.flatMap = Array.prototype.flatMap || (function() {
		polyfilled = true;
		return function(fn, thisArg) {
			return [].concat(...this.map(fn.bind(thisArg)));
		};
	})();

	const byInternetInterfaceName = findIfname => ([ifname]) => ifname === findIfname;
	const byNotInternalAndIPv4 = ({ family, internal }) => !internal && family === "IPv4";

	const foundAddress =
		Object.entries(os.networkInterfaces())
			.filter(byInternetInterfaceName(findIfname))
			.flatMap(([_, values]) => values)
			.filter(byNotInternalAndIPv4)
			.map(({ address }) => address);

	if (polyfilled) {
		Array.prototype.flatMap = undefined;
	}

	return foundAddress[0] || "localhost";
};

module.exports = {findIpAddress};
