import mongoose from 'mongoose';

let isConnected = false; // track the connection

export const connectToDB = async () => {
    mongoose.set('strictQuery', true);

    if (isConnected) {
        console.log('MongoDB is already connected');
        return;
    }

    try {
        await mongoose.connect('mongodb://127.0.0.1:27017', {
            dbName: "share_prompt",
        })

        isConnected = true;

        console.log('MongoDB connected')
    } catch (error) {
        console.log(error);
    }
}