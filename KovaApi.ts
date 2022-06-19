import Koa from 'koa'
import Router from 'koa-router'



const server = new Koa()
const router = new Router()


router.get("/a",ctx=>{
    ctx.response.body={
        name:"Chand"
    }
})

server.use(router.routes())

server.listen(process.env.PORT || 5000,()=>{console.log('here in a')})