const express = require('express');

const app = express()

app.get("/Myanmar",(req,res)=>{
  res.send("<h1>Hello from Myanmar Web Developer community</h1>");
})

app.get("/Jlkhai",(req,res)=>{
  res.send("<h1>You are warmly welcome from Jl Khai's web page</h1>");
})

app.get("/NCCclass",(req,res)=>{
  res.send("<h1>This is NCC online class from Teacher Win Htut.You can learn Web Developing lessons on this website. Go Check it Out Now!</h1>");
})

app.listen(3000,()=>{
  console.log('server starting up at: port:3000:')
})