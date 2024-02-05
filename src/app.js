const express = require('express');
const app = express();

//Middlewares
app.use(express.json());

// Write a GET Request to get the next number from the input 'num'.
// Endpoint : /api/get-next-num
// Return the response as {message : , status: }
app.use('/api/get-next-num',(req,res)=>{
    let {num} = req.body;
    num = parseInt(num);
    return res.send({
        message: num+1,
        status: "success",
    })
})

module.exports = app;
