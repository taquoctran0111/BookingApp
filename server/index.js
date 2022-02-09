import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';

import hotels from "./routers/hotels.js";



const app = express();
const PORT = process.env.PORT || 5000;
const URI = "mongodb+srv://admin:0329051143a@cluster0.srciy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

app.use(bodyParser.json({limit: '30mb'}));
app.use(bodyParser.urlencoded({extended: true, limit: '30mb'}));
app.use(cors());

// app.get('/', (req, res)=>{
//     res.send('SUCCESS');
// });
app.use('/hotels', hotels);

mongoose.connect(URI, {useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>{
    console.log("connected to db");
    app.listen(PORT, ()=>{
        console.log(`Server running on port ${PORT}!`);
    });
})
.catch((err)=>{console.log(err)})

