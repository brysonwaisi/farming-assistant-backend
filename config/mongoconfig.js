const mongoose = require('mongoose');
require('dotenv').config();

mongoose
    .connect(`mongodb+srv://Bryson_254:${process.env.PASSWORD}@cluster0.cnk4h.gcp.mongodb.net/<dbname>?retryWrites=true&w=majority`, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB Connected'))
    .catch((err) => console.log(err));