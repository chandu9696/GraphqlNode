import cors from '@koa/cors'
import Koa from 'koa'
import Router from 'koa-router'



const app = new Koa()
const router = new Router()
app.use(cors())
router.get("/",ctx=>{
    ctx.response.body="This is a Home Page"})
router.get("/a",ctx=>{
    ctx.response.body={
        name:"Chand"
    }
})

app.use(router.routes())


app.listen(process.env.PORT || 5000,()=>{console.log('here in a')})