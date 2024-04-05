import mongoose from "mongoose";

// mongo db connect
const MongoDBConnect = async () =>{
    try {
         const connect = mongoose.connect(process.env.MONGO_URL);
         console.log(`MongoDB Connect Success`.bgBlue.white);
    } catch (error) {
        console.log(`MongoDB Connect Failed`.bgRed.white);
    }
}


export default MongoDBConnect;