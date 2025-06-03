const express = require('express');
const cors = require('cors');
const productRoutes = require('./routes/product.routes');
const errorHandler = require('./middlewares/errorHandler');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/products', productRoutes);

// Error Handling Middleware
app.use(errorHandler);

module.exports = app;