const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL);
        console.log("mongodb connected");
    }
    catch(error) {
        console.log("mongodb fail", error.message);
        process.exit(1);
    }
}

module.exports = connectDB;