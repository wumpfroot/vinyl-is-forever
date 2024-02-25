import express from "express";
import { PORT, mongodbURL } from "./config.js";
import mongoose from "mongoose";
import { Vinyl } from "./models/vinylModel.js";

const app = express();

app.use(express.json());

app.post("/vinyls", async (req, res) => {
	try {
		if (!req.body.title || !req.body.artist || !req.body.title || !req.body.genres || !req.body.release) {
			return res.status(400).send({
				message: "All fields are required (except cover img)",
			});
		}

		const newVinyl = {
			title: req.body.title,
			artist: req.body.artist,
			genres: req.body.genres,
			release: req.body.release,
			coverImg: req.body.coverImg,
		};

		const vinyl = await Vinyl.create(newVinyl);

		return res.status(201).send(vinyl);
	} catch (error) {
		console.error(error.message);
		res.status(500).send({ message: error.message });
	}
});

app.get("/vinyls", async (req, res) => {
	try {
		const vinyls = await Vinyl.find({});
		return res.status(200).json(vinyls);
	} catch (error) {
		console.error(error.message);
		res.status(500).send({ message: error.message });
	}
});

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
