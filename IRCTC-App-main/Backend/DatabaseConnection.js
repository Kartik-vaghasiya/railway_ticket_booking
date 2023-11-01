const mongoose = require("mongoose");
dbConnect()
async function dbConnect() {
    try {
        await mongoose.connect('mongodb+srv://Naitik:Naitik2100@cluster0.fs28ogt.mongodb.net/IRCTC', { useNewUrlParser: true });

        console.log("Connection successfull")
    } catch (error) {
        console.log("connection failed");
    }
}


module.exports = mongoose;