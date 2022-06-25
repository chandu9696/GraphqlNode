import cors from '@koa/cors'
import Koa from 'koa'
import Router from 'koa-router'



const server = new Koa()
const router = new Router()

router.get("/",ctx=>{
    ctx.response.body="This is a Home Page"})
router.get("/a",ctx=>{
    ctx.response.body={
        name:"Chand"
    }
})

// server.use(router.routes())
server.use(cors())

server.listen(process.env.PORT || 5000,()=>{console.log('here in a')})