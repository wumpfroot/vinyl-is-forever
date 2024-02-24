import express from "express";
import { PORT, mongodbURL } from "./config.js";
import mongoose from "mongoose";

const app = express();

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
