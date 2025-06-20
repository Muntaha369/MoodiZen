const express = require('express')
const app = express()
const router = require('./routes/route')
const connectDb = require('./db/db')

app.use(express.json())

app.use('/api/auth',router)

app.get('/',(req,res)=>{
  res.json({msg:"waddup!!"})
})

connectDb().then(()=>app.listen(8000,()=>{console.log("port is running on 8000")}))
