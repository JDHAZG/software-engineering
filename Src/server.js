const express=require('express');
const fs=require('fs');
const path=require('path');
const app=express();

app.use(express.static('../2048-MASTER'));
app.listen(80,() => { 
     console.log("runing at http://127.0.0.1/index.html");
  })