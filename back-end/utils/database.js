const mongoose = require("mongoose")

const connectDB = async() => {
    
    try{
        await mongoose.connect("mongodb+srv://shizhicheng651:abcd@cluster0.8mcf7n4.mongodb.net/?retryWrites=true&w=majority")
        console.log("Succcess to conect to DB")

    }catch(err){

        console.log("Failure")
        throw new Error

    }
}

module.exports = connectDB