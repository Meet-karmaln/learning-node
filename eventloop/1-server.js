const http = require("http");

const server = http.createServer((req, res) => {
	if (req.url === "/") {
		res.end("home page");
	}

	if (req.url === "/about") {
		//blocking code
		for (let i = 0; i < 10; i++) {
			for (let j = 0; j < 1000; j++) {
				console.log(i, j);
			}
		}
		res.end("about page");
	}
});

server.listen(5005, () => {
	console.log("server is listening on port 5005");
});
