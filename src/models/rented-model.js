import db from "../config/db.js";

const rentedSchema = new db.Schema({
    rented_by: {
        type: String,
        required: true,
    },
    movie_rented: {
        type: String,
        required: true,
    },
    rent_date: {
        type: Date,
        required: true,
    },
    return_date: {
        type: Date,
        required: true,
    },
});

const Rented = db.model("Rented", rentedSchema);

export default Rented;