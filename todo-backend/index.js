const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDb = require('.//config/db')

dotenv.config();
connectDb();

const app = express();

app.use(cors())
app.use(express.json())

app.use('/api/todos' , require('./routes/todoRoutes'))

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
