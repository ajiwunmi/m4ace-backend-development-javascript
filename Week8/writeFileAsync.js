const fs = require("fs").promises;

async function writeFile() {
	try {
		await fs.writeFile("./greeting.txt", "Hello, File System!");
		console.log("File written successfully");
	} catch (err) {
		console.error("Error writing file:", err);
	}
}

writeFile();
