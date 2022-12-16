const fs = require("fs");

const first = fs.readFileSync("./content/first.txt", "utf-8");
const second = fs.readFileSync("./content/second.txt", "utf-8");

fs.writeFileSync("./content/sync.txt", `result ${first} and ${second}`, {
	flag: "a", //to append the data
});
