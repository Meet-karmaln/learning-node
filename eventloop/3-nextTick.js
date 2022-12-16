const http = require("http");

const server = http
	.createServer((req, res) => {
		console.log("a");
		console.log("b");
		process.nextTick(() => {
			console.log("c");
			res.write("hello");
			res.end();
		});
		console.log("d");
		console.log("e");
	})
	.listen(5000);
