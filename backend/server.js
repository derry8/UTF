const express = require('express');
const dotenv = require('dotenv');
const connect = require('./config/Db');
const PORT = process.env.PORT;


dotenv.config();


connect();

const app = express();


app.use(express.json());


const staffRoutes = require('./routes/StaffRoute')
app.use('/utf/staff', staffRoutes)



app.listen(PORT, () => console.log(`✅ Server running on port ${PORT} ✅`));
