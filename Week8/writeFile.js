const fs = require("fs");

// File path
const filePath = "./greeting.txt";

// Content to write
const content = "Hello, File System!";

// Write to file
fs.writeFile(filePath, content, (err) => {
	if (err) {
		console.error("Error writing file:", err);
		return;
	}
	console.log(`Successfully wrote to ${filePath}`);
});
