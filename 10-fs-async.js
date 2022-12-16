const { readFile, writeFile } = require("fs");

console.log("start");
readFile("./content/first.txt", "utf-8", (err, result) => {
	if (err) {
		return;
	}
	const first = result;
	readFile("./content/second.txt", "utf-8", (err, result) => {
		if (err) {
			return;
		}
		const second = result;
		writeFile(
			"./content/async.txt",
			`result is ${first} and ${second}`,
			(err, result) => {
				if (err) {
					return;
				}
				console.log(result);
				console.log("done with first one");
			}
		);
	});
});
console.log("starting new tasks");
