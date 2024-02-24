import "dotenv/config";

export const PORT = process.env.SERVER_PORT || 8000;

export const mongodbURL = process.env.MONGO_URL;
