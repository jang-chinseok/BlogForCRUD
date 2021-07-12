// server.js file

const express = require('express');
const app = express();
const PORT = 3001;

function handleHome(req,res){
    res.send("Hello! From Home!");
}

app.get('/',handleHome);

app.listen(PORT,() => {
    console.log(`The server is running on ${PORT}`);
})