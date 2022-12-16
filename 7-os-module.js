const os = require("os");

const user = os.userInfo();
const networkInterfaces = os.networkInterfaces();
const machine = os.machine();

const system = {
	name: os.type(),
	freespace: os.freemem(),
	hostname: os.hostname(),
	version: os.version(),
	uptime: os.uptime(),
	loadavg: os.loadavg(),
};

console.log(
	"user",
	user,
	"machine",
	machine,
	"networkInterfaces",
	networkInterfaces,
	"system info",
	system
);
