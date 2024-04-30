//Group Members: Juan Raul Porras and Lizza Godoy

const express = require('express')
const app = express()

const mongoose =require('mongoose')
require('dotenv/config')

const bodyParser = require('body-parser')
const postsRoute = require('./routes/post')
const authRoute = require ('./routes/auth')


app.use(bodyParser.json())
app.use('/post',postsRoute)
app.use('/auth', authRoute)




app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});



app.get('/', (req, res) => {
    res.send("Welcome to Piazza")
})


const MURL =  'mongodb+srv://jporrase:Rulan1426@cluster0.kbggqin.mongodb.net/MiniFilms?retryWrites=true&w=majority&appName=Cluster0'

mongoose.connect(MURL)

app.listen((3000), ()=>{
    console.log("Server is running")
})