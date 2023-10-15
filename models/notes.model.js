import mongoose from "mongoose";

//Notes Schema created
const notesSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
},
    {
        timestamps: true,
    }
)

//Notes model created
const Notes = mongoose.model("Notes", notesSchema);

//Notes exported
export default Notes;