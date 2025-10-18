import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import ConnectDB from './config/mongodb.js'
import { clerkMiddleware } from '@clerk/express'
import { serve } from "inngest/express";
import { inngest, functions } from "./inngest/index.js"

const app=express()
const port=3000
await ConnectDB()


//Middleware
app.use(express.json())
app.use(cors())
app.use(clerkMiddleware())



app.get('/',(req,res)=>res.send('api working'))
app.use("/api/inngest", serve({ client: inngest, functions }));



app.listen(port,()=>{
    console.log(`server is running:http:localhost:${port}`)
})