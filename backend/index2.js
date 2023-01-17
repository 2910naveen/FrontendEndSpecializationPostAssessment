const express = require('express');
const app = express();
const route = require('./Routes/userRoutes');
const cors = require('cors');

app.use(express.json());
app.use(cors());
app.use('/user',route);

app.listen(3003,()=>{
    console.log("server is running!!!: http://localhost:3003/");
});