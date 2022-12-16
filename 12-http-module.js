const http = require("http");
const server = http.createServer((req, res) => {
	if (req.url === "/") {
		res.write("Welcome to our home page");
	}
	if (req.url === "/about") {
		res.write("Here is our short history");
	}
});
server.listen(5000);
