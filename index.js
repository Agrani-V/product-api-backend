const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;


// Middleware
app.use(cors());
app.use(express.json()); // for parsing JSON request bodies


//Test route to check server is running
app.get('/',(req, res) => {
    res.send('Backend API is running');
});

const productRoutes = require('./routes/productRoutes');
app.use('/products', productRoutes);

// Connect to mongodb and start the server next
mongoose
.connect(process.env.MONGO_URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
})
.catch((error) => {
    console.error('MongoDB connection error:', error);
});