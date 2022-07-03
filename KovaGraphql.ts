import { graphqlHTTP } from "koa-graphql";
import * as cors from "@koa/cors";

// import { buildExecutionContext } from "graphql/execution/execute";
// import { buildSchema } from "graphql";
import { HotelResolver } from "./hotelResolver";
import * as Koa from 'koa'
import './ConnectDb.ts'
 import * as Router from 'koa-router'
import { ApolloServer } from "apollo-server-koa";
import { buildSchema} from "type-graphql";
async function main()
{
    const app=new Koa()
    const resolvers = await buildSchema({
        resolvers: [HotelResolver]
      });

    const router=new Router();
    router.all("/graphql",graphqlHTTP({schema:resolvers}))

    const appolo=new ApolloServer({schema:resolvers})

   
    appolo.applyMiddleware({app});
    app.use(router.routes()).use(router.allowedMethods())
    app.use(cors())
    app.listen(process.env.PORT ||5000,()=>{console.log("running")})

    
}
main()