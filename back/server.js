const express=require('express');
const cors=require('cors');
const mongoose=require('mongoose');
const path=require('path')
const dotenv=require('dotenv')
require('dotenv').config();


const app= express();

const port = process.env.PORT || 5000;


app.use(cors());
app.use(express.json());




const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true,useCreateIndex: true });


const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

const BlogRouter=require('./routes/blog')

app.use('/blog',BlogRouter);


app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});