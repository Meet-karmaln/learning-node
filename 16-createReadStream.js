const { createReadStream } = require("fs");

const stream = createReadStream("./content/big.txt", { highWaterMark: 200000 });

stream.on("data", (data, err) => {
	if (err) {
		console.log(err);
	}
	console.log(data);
});
