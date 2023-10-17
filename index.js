import express from "express";
import dotenv from "dotenv";
import cors from "cors"
import connectDB from "./config/db.js";
import notesRoute from './routes/notes.route.js'
import { errorHandler, notFound } from "./middlewares/error.middleware.js";
dotenv.config();

const PORT = process.env.PORT;

connectDB()

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: 'http://localhost:5173' }))

app.use('/api/notes', notesRoute);


app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => console.log(`Server started listening on ${PORT}.....`))

export default app;