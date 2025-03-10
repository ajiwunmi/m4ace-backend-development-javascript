import os from  "os";

function getSystemInfo() {
  const system_info = {	
		Platform: os.platform(),
		Architecture: os.arch(),
		"CPU Cores": os.cpus().length,
		"Total Memory": (os.totalmem() / 1024 ** 3).toFixed(2) +"GB",
		"Free Memory": (os.freemem() / 1024 ** 3).toFixed(2) + "GB",
		"Operting System ": os.type(),
		Release: os.release(),
        "Hostname": os.hostname(),
        "Temp Directory": os.tmpdir(),
        "Home Directory": os.homedir(),
        "Network Interfaces": os.networkInterfaces(),
        Uptime: (os.uptime() / 3600).toFixed(2) + " hours",
	};
    console.log("=========================system_info=========================");
    for (const key in system_info) {
        console.log(`${key}: ${system_info[key]}`);
    }
}

export default getSystemInfo;
