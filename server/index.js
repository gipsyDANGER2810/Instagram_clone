const express = require('express')
const mongoose = require('mongoose')
const app = express()
const cors = require('cors');

const uri = 'mongodb+srv://swapnilgalhate:sunny106133@cluster0.puvrfum.mongodb.net/?retryWrites=true&w=majority'

async function connect (){
    try{
        await mongoose.connect(uri)
        console.log("Connected to MongoDB")
    }catch(error){
        console.error(error)
    }
}

connect();

app.use(cors());

app.get("/instagram" , (req,res) =>{
    res.json({"users":["user1","user2","user3"]})
})


app.listen(5000, ()=>{console.log("Server started")})