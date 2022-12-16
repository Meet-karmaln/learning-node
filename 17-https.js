const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
	// const text = readFileSync("./content/big.txt", { encoding: "utf-8" });
	// res.end(text);
	const readStream = fs.createReadStream("./content/big.txt", {
		encoding: "utf-8",
	});
	readStream.on("open", () => {
		readStream.pipe(res);
	});
	readStream.on("error", (err) => {
		res.end(err);
	});
});

server.listen(5000);
