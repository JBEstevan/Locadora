import db from "../config/db.js";

const schedulingSchema = new db.Schema({
    data: {
        type: Date,
        required: true,
    },
    hora: {
        type: String,
        required: true,
    },
    user_id: {
        type: db.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
});

const Scheduling = db.model("Scheduling", schedulingSchema);

export default Scheduling;