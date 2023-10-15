import Notes from "../models/notes.model.js";


//@desc   Create new Notes
//@route  POST  /api/notes
//@access Public

const addNotes = async (req, res, next) => {

    const { title, description } = req.body;

    const note = await Notes.create({
        title,
        description
    })

    if (note) {
        res.status(201).json({ title: note.title, description: note.description })
    }
    else {
        res.status(400).json({ error: "Invalid user data" })
    }

}


//@desc   GET all notes
//@route  GET  /api/notes
//@access Public
const getNotes = async (req, res, next) => {
    const notes = await Notes.find({});

    res.status(200).json(notes)
}

//@desc   Update note by Id
//@route  PUT  /api/notes
//@access Public


const updateNotes = async (req, res, next) => {
    const { title, description } = req.body;

    const notes = await Notes.findById(req.params.id);
    if (notes) {
        notes.title = title ? title : notes.title;
        notes.description = description ? description : notes.description;

        const updatedNotes = await notes.save()
        res.status(200).json({
            title: updatedNotes.title,
            description: updatedNotes.description
        })

    } else {
        res.status(404);
        next(new Error("Notes not found"))

    }

}

//@desc   Delete note by Id
//@route  DELETE  /api/notes
//@access Public
const deleteNotes = async (req, res, next) => {

    const notes = await Notes.findById(req.params.id);
    if (notes) {
        await Notes.deleteOne({ _id: notes._id })
        res.status(200).json({ message: 'Notes removed' });

    } else {
        res.status(404);
        next(new Error("Notes not found"))

    }
}

export {
    addNotes,
    getNotes,
    updateNotes,
    deleteNotes
}