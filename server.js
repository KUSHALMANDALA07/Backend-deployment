const express = require("express");

const app = express();

app.get("/ping",(req,res)=>{
    res.send("pong");
})

app.get("/get-info-query/:id/:password",(req,res)=>{
    try {
        console.log(req.params);
        res.send("successfully")
    } catch (error) {
        res.status(500).send({message:"some thing went wrong"})
    }
})
app.listen(89,()=>{
    console.log("Server connected successfully")
})