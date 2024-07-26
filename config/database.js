import mongoose from "mongoose";

let connected = false;

const connectDB = async () => {
    mongoose.set("strictQuery", true);

    //if the DB is already connected, don't connect again
    if (connected) {
        console.log("Mongo DB already connected");
        return;
    }

    //connect to Mongo DB
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        connected = true;
        console.log("Mongo DB connected");
    } catch (error) {
        console.log("Error connecting to Mongo DB", error);
    }
};

export default connectDB;
