const express=require('express');

const app=express();

app.get('/',(req,res)=>res.send('API Running'));
const port=process.env.PORT || 5000;


app.listen(port,() => console.log(`Example app listening at http://localhost:${port}`));

