const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

// Configure Environment Vars in dotenv 
require('dotenv').config();

// Create Express Server
const app = express();
const port = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true});
const connection = mongoose.connection;

connection.once('open', () => {
  console.log('MongoDB database connection opened successfully')
})

// Routes
const exercisesRouter = require('./routes/exercises');
const userRouter = require('./routes/users');

app.use('/exercises', exercisesRouter);
app.use('/users', userRouter);

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});