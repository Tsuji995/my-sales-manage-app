const mongoose = require("mongoose")

const Schema = mongoose.Schema

const DateSchema = new Schema ({
    date: String,
})


const SalesSchema = new Schema ({
    date: String,
    course: String,
    price: Number,
    shop: String
})

exports.DateModel = mongoose.model("Date", DateSchema)

exports.SalesModel = mongoose.model("Sales", SalesSchema)