import * as dotenv from "dotenv";
import { createConnection } from "typeorm";

import { hotels_csv } from "./hotelOrm";

dotenv.config()

createConnection({
    url:process.env.DATABASE_URL,
    entities:[hotels_csv],
    type:'postgres',
    extra:{
      ssl: {
        rejectUnauthorized:false
        }
    }
})