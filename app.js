import express from "express"
import config from "config"
import userRouter from "./controllers/Users/index.js"
import "./utils/dbConnect.js"

const app=express();
const PORT = config.get("PORT")

//it is a Build In Middleware
app.use(express.json());

//it is for our own satisfaation that server is running or not
app.get("/",(req,res)=>{
    res.status(200).send("<h1>Hello Server is Running 🚀</h1>");
})

//calling routes
app.use("/users",userRouter)

//Error Handler
app.use((req,res)=>{
    res.status(404).send("Not Found -Invalid Route")
})


app.listen(PORT,()=>{
    console.log(`Sever is running on port ${PORT}`);
    
})