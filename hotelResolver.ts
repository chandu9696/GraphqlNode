import { Query, Resolver } from "type-graphql";
import { hotels_csv } from "./hotelOrm";


@Resolver()
export class hotelResolver
{
    @Query(()=>[hotels_csv])
    hotels()
    {
        hotels_csv.find()
    }
}