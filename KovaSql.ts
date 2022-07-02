import Koa from 'koa'
import * as dotenv from "dotenv";
import { Pool } from 'pg';
import { response } from 'express';

dotenv.config();

const app = new Koa()

const pool=new Pool(
    {
        connectionString:process.env.DATABASE_URL,
        ssl:{
            rejectUnauthorized:false
        }

    }
)
app.use(async ctx=>{
    await pool.connect()
    const output= await pool.query("select * from hotels_csv")
    ctx.response.body=output
})

app.listen(process.env.PORT || 5000,()=>{console.log('here in a')})