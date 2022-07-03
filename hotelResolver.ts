import { Query, Resolver } from "type-graphql";
import { hotels_csv } from "./hotelOrm";


@Resolver()
export class HotelResolver
{
    @Query(()=>[hotels_csv])
    hotels()
    {
       return hotels_csv.find()
    }
}