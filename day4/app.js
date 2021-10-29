const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const passport = require('passport')
const cors = require('cors');
require('dotenv').config();
const todoRouter = require('./routes/todo')
const userRouter = require('./routes/user')
const app = express();
app.use(express.json());

app.use(passport.initialize());

app.use(cors());
const PORT = process.env.PORT || 5000;
const password = process.env.PASSWORD;
const mongooseURL = `mongodb+srv://upendraa:${password}@cluster0.mwuaz.mongodb.net/mytodo3?retryWrites=true&w=majority`;

mongoose.connect(mongooseURL,{
    useNewUrlParser : true,
    useUnifiedTopology : true
})

app.use('/todo', todoRouter)
app.use('/user', userRouter)
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