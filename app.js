const express = require("express")
const app = express ()

const userRouter = require("./routes/UserRouter")
app.use(express.json())
app.use('/users',userRouter)

app.listen(3000,()=>{
    console.log("server running http://127.0.0.1:3000")
})



