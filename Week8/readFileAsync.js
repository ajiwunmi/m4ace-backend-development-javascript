const fs = require("fs").promises;

async function readFile() {
	try {
		const data = await fs.readFile("./greeting.txt", "utf8");
		console.log("File content:");
		console.log(data);
	} catch (err) {
		console.error("Error reading file:", err);
	}
}

readFile();
