
import * as cors from '@koa/cors'
import * as Koa from 'koa'
 import * as Router from 'koa-router'


import * as dotenv from "dotenv";
import { Pool } from 'pg';
import { response } from 'express';
import { hotels_csv } from './hotelOrm';
import './ConnectDb.ts'
import { getRepository } from 'typeorm';
dotenv.config();

const app = new Koa()
const router = new Router()

// const pool=new Pool(
//     {
//         connectionString:process.env.DATABASE_URL,
//         ssl:{
//             rejectUnauthorized:false
//         }

//     }
// )
app.use(cors())
router.get("/a",async ctx=>{
    //for normal sql we used pool query
    const output=  await hotels_csv.find()
    
    ctx.response.body=output
})
router.get("/:id",async ctx=>{
    
    // const output=  await hotels_csv.find()
 
    const output = await getRepository(hotels_csv)
    .createQueryBuilder("user")
    .where("user.id = :id", { id: ctx.params.id})
    .getOne();
    ctx.response.body=output
    
})
app.use(router.routes())

app.listen(process.env.PORT || 5000,()=>{console.log('here in a')})