const { writeFileSync } = require("fs");

for (let i = 0; i < 10000; i++) {
	writeFileSync(
		"./content/big.txt",
		`This file was created at 11.34 on 7th of december for ${i} time \n`,
		{ flag: "a" }
	);
}
