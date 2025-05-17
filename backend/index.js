const express = require('express')
const cors= require('cors')
const bodyParser = require('body-parser')
const app = express();
app.use(express.json());
const authroutes = require('./routes/auth');

app.use(cors());
app.use(bodyParser.json())

app.use('/api', authroutes);

const port=7006

app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
})