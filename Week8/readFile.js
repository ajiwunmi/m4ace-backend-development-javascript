const fs = require("fs");

// File path
const filePath = "./greeting.txt";

// Read from file
fs.readFile(filePath, "utf8", (err, data) => {
	if (err) {
		console.error("Error reading file:", err);
		return;
	}
	console.log("File content:");
	console.log(data);
});
