import db from "../config/db.js";

const movieSchema = new db.Schema({
    name: {
        type: String,
        required: true,
    },
    release_date: {
        type: Number,
        required: true,
    },
    director: {
        type: String,
        required: true,
    },
    classification: {
        type: String,
        enum: ["Livre", "Maior16", "Maior18"],
        required: true,
    },
});

const Movie = db.model("Movie", movieSchema);

export default Movie;