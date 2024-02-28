import express from "express";
import mongoose from "mongoose";
import { Vinyl } from "../models/vinylModel.js";

const router = express.Router();

//Show all vinyls
router.get("/", async (req, res) => {
	try {
		const vinyls = await Vinyl.find({});
		return res.status(200).json(vinyls);
	} catch (error) {
		console.error(error.message);
		res.status(500).send({ message: error.message });
	}
});

//Add a new vinyl
router.post("/", async (req, res) => {
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

export { router as vinylsRouter };
