import exp from "constants";
import mongoose from "mongoose";

const connectDB = async () => {
    try {
        console.log(process.env.MONGO_URI)
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`Mongodb connected to host ${conn.connection.host}`)

    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit()
    }
}

export default connectDB