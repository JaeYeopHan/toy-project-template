const {getAvailablePort} = require("./portScan.util");
const {findIpAddress} = require("./ipScan.util");

const devServerConfig = {
	devServer: {
		host: "0.0.0.0",
		// port: ,
		disableHostCheck: true,
        inline: true,
        stats: { all: false, errors: true, errorDetails: false, moduleTrace: true, warnings: true }
	}
};


module.exports = (option) => {
	const host = option.myIP ? findIpAddress() : "localhost";

	return getAvailablePort({portStart: 3000, portEnd: 3010, host})
		.then(port => {
			Object.assign(devServerConfig.devServer, {
				port,
				host,
			});
			return devServerConfig;
		});
};
