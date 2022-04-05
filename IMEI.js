const express=require('express')
const app=express()
const cors=require('cors')
app.use(cors())
app.use(express.json());
const imei = require('node-imei');
const IMEI= new imei();

app.post('/IMEI',async(Req,Res)=>
{
    try {
        Res.json(IMEI.isValid(Req.body.data)?"Valid":"Invalid")
    } catch (Error) {
        console.log(Error);
    }
})
app.listen(5000,()=>{
    console.log("Server Started")
})