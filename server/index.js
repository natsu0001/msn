const express = require('express');
const dotenv = require('dotenv').config();
const cors = require('cors');
const { default: mongoose } = require('mongoose');
const cookieParser = require('cookie-parser');

const app = express();

//dataB cnnt
mongoose.connect(process.env.MONGO_URL)
.then(() => console.log('Database Connected'))
.catch((err) => console.log('Database not connected',err))

//middleware
app.use(express.json())
app.use(cookieParser())
app.use(express.urlencoded({extended: false}))


app.use('/', require('./routes/authRoutes'))

const PORT = process.env.PORT || 0; // Set 0 to let the system pick an available port
const server = app.listen(PORT, () => {
  console.log(`Server is running on port ${server.address().port}`);
});
