import express from "express";
import { Vinyl } from "../models/vinylModel.js";

const router = express.Router();

//Show all owned vinyls, owned = true
router.get("/owned", async (req, res) => {
	try {
		const vinyls = await Vinyl.find({ owned: true });
		return res.status(200).json(vinyls);
	} catch (error) {
		console.error(error.message);
		res.status(500).send({ message: error.message });
	}
});

//Show all wishlist vinyls, owned = false
router.get("/wishlist", async (req, res) => {
	try {
		const vinyls = await Vinyl.find({ owned: false });
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
			owned: req.body.owned,
		};

		const vinyl = await Vinyl.create(newVinyl);

		return res.status(201).send(vinyl);
	} catch (error) {
		console.error(error.message);
		res.status(500).send({ message: error.message });
	}
});

//get one vinyl by id
router.get("/:id", async (req, res) => {
	try {
		const { id } = req.params;
		const vinyl = await Vinyl.findById(id);

		if (!vinyl) {
			return res.status(404).json({ message: "Vinyl not found" });
		}

		return res.status(200).json(vinyl);
	} catch (error) {
		console.error(error.message);
		res.status(500).send({ message: error.message });
	}
});

//update a vinyl
router.put("/:id", async (req, res) => {
	try {
		const { id } = req.params;
		const vinyl = await Vinyl.findByIdAndUpdate(id, req.body);

		if (!vinyl) {
			return res.status(404).json({ message: "Vinyl not found" });
		}

		return res.status(200).send({ message: "Vinyl updated succesfully" });
	} catch (error) {
		console.error(error.message);
		res.status(500).send({ message: error.message });
	}
});

//delete a vinyl
router.delete("/:id", async (req, res) => {
	try {
		const { id } = req.params;
		const vinyl = await Vinyl.findByIdAndDelete(id);

		if (!vinyl) {
			return res.status(404).json({ message: "Vinyl not found" });
		}

		return res.status(200).send({ message: "Vinyl deleted succesfully" });
	} catch (error) {
		console.error(error.message);
		res.status(500).send({ message: error.message });
	}
});

export { router as vinylsRouter };
