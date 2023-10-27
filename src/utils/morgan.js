const morgan = require("morgan");
const path = require("path");
const fs = require("fs");

const configureMorgan = (app) => {
	const logStream = fs.createWriteStream(path.join(__dirname, "../log/log.txt"), { flags: "a" });

	app.use(morgan("common", { stream: logStream }));
};

module.exports = configureMorgan;
