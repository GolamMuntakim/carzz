import { connectDB } from "@/lib/connectDB"

export const POST = async(request) =>{
    const booking = await request.json()
    const db = await connectDB()
    const bookingsCollection = db.collection('bookings')
    try{
        const newBooking = await bookingsCollection.insertOne(booking);
        return Response.json({message:"service booked succefully"})
    }catch(error){
        console.log(error)
    }
}