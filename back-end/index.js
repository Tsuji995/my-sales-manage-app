const express = require("express")
const app = express()
const cors = require("cors")
app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
const connectDB = require("./utils/database")
const punycode = require('punycode/package.json')
const { DateModel, SalesModel } = require("./utils/schemaModels")

// mongodb+srv://shizhicheng651:<password>@cluster0.8mcf7n4.mongodb.net/?retryWrites=true&w=majority

app.get("/", async(req, res) => {

    try {
        await connectDB()
        const dateList = await DateModel.find()
        console.log(dateList)
        return res.status(200).json({message: "アイテム読み込み成功", dateList: dateList})

    }catch(err) {
        return res.status(400).json({message: "アイテム読み込み失敗"})
    }
})

// Create Datelist

app.post("/dateList/create",  async(req, res) => {

    try{
        await connectDB()
        console.log(req.body)
        await DateModel.create(req.body)
    
        return res.status(200).json({message: "アイテム作成成功"})

    }catch(err){
        console.log(err)
    }
        return res.status(400).json({message: "アイテム作成失敗"})


})

// Delete DateList 

app.delete("/dateList/delete/:id", async(req, res) => {
    try {

        await connectDB()
        await DateModel.deleteOne({_id: req.params.id})
        return res.status(200).json({message: "削除成功"})

    }catch(err){
        return res.status(400).json({message: "削除失敗"})
    }
})

// Create SalesList

app.post("/salesList/create",  async(req, res) => {

    try{
        await connectDB()
        console.log(req.body)
        await SalesModel.create(req.body)
    
        return res.status(200).json({message: "セールス作成成功"})

    }catch(err){
        console.log(err)
    }
        return res.status(400).json({message: "セールス作成失敗"})


})

app.get("/salesList", async(req, res) => {

    try {
        await connectDB()
        const salesList = await SalesModel.find()
        console.log(salesList)
        return res.status(200).json({message: "セールス読み込み成功", dateList: dateList})

    }catch(err) {
        return res.status(400).json({message: "セールス読み込み失敗"})
    }
})







app.listen(5000, () => {
    console.log("Listen on localhost port 5000")
})