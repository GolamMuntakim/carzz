import { connectDB } from "@/lib/connectDB"
import Swal from "sweetalert2";

export const POST = async (request) =>{
    const newBooking = await request.json()
    const db = await connectDB();
    const bookingsCollection = db.collection("bookings");
    try{
        const res = await bookingsCollection.insertOne(newBooking);
     
        return Response.json({message: "Booking Successfully"}, {status:200});
    }catch(error){
        return Response.json({message: "something went wrong"}, {status: 400})
    }
   
}