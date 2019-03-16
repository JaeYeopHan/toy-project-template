/**
 * 로컬에서 가용한 포트를 탐색
 */

const portscanner = require("portscanner");

const getAvailablePort = ({portStart = 3000, portEnd = 3010, host = "127.0.0.1"} = {}) =>
	portscanner.findAPortNotInUse(portStart, portEnd, host).then(port => {
		if (!port) {
			console.error(`[ERROR] ${portStart} ~ ${portEnd} 포트를 확보할 수 없습니다.`);
			return Promise.reject();
		}

		return port;
	});

module.exports = {
	getAvailablePort
};
