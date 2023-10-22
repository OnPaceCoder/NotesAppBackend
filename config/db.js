import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI ? process.env.MONGO_URI : "mongodb://mongodbi_db/NotesApp");
        console.log(`Mongodb connected to host successfully`)

    } catch (error) {
        console.error(`Error: ${error.message}`);
    }
}

export default connectDB