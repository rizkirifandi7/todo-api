require("dotenv").config();
const express = require("express");
const todoRoutes = require("./src/routes/todoRoutes");
const logging = require("./src/utils/morgan");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 8010;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// logging
logging(app);

// endpoint
app.use("/api/todos", todoRoutes);

//error handling
app.use((error, req, res, next) => {
	console.log(error);
	const status = error.statusCode || 500;
	const message = error.message;
	res.status(status).json({ message: message });
});

if (process.env.NODE_ENV != "test") {
	app.listen(port, () => {
		console.log(`App listening on http://localhost:${port}`);
	});
}

module.exports = app;
