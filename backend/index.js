import express from "express";
import { PORT, mongodbURL } from "./config.js";
import mongoose from "mongoose";
import { vinylsRouter } from "./routes/vinyls.js";

const app = express();

app.use(express.json());

app.use("/vinyls", vinylsRouter);

mongoose
	.connect(mongodbURL)
	.then(() => {
		console.log("App connected to Mongo");
		app.listen(PORT, () => {
			console.log(`Server has started on port: ${PORT}`);
		});
	})
	.catch((error) => {
		console.error(error);
	});
