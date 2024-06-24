require('dotenv').config({path : ".env.main"})
const express = require("express");
const path = require("path");
const app = express();

const port = process.env.APP_PORT || 3000;

app.use("/pages", express.static(path.join(__dirname, 'public')));

app.listen(port, ()=>{
    console.log(`server running on port ${port}`);
});