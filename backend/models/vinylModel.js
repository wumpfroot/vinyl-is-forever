import mongoose from "mongoose";

const vinylSchema = mongoose.Schema({
	title: {
		type: String,
		required: true,
	},
	artist: {
		type: String,
		required: true,
	},
	genres: {
		type: [String],
		required: true,
	},
	release: {
		type: Date,
		required: true,
	},
	coverImg: {
		type: String,
	},
	owned: {
		type: Boolean,
		required: true,
	},
});

export const Vinyl = mongoose.model("Vinyl", vinylSchema);
