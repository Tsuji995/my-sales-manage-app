const mongoose = require("mongoose")

const Schema = mongoose.Schema

const DateSchema = new Schema ({
    date: String,
})

exports.DateModel = mongoose.model("Date", DateSchema)