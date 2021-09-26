const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const cors = require('cors');
require('dotenv').config();
const todoRouter = require('./routes/todo')
const app = express();
app.use(express.json());

app.use(cors());
const PORT = process.env.PORT || 5000;
const password = process.env.PASSWORD;
const mongooseURL = `mongodb+srv://upendraa:${password}@cluster0.mwuaz.mongodb.net/mytodo?retryWrites=true&w=majority`;

mongoose.connect(mongooseURL,{
    useNewUrlParser : true,
    useUnifiedTopology : true
})

app.use('/todo', todoRouter)
app.get('/', (req, res) =>{
    res.send("hello")
})

mongoose.Promise = global.Promise;
mongoose.connection.on('open', ()=>{
    console.log("connected")
})
app.listen(PORT, ()=>{
    console.log(`app running on port no ${PORT}`)
})