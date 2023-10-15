import express from "express"
import { getNotes, addNotes, updateNotes, deleteNotes } from "../controllers/notes.controller.js"
const router = express.Router()

router
    .route("/")
    .get(getNotes)
    .post(addNotes)



router
    .route("/:id")
    .delete(deleteNotes)
    .put(updateNotes)





export default router