"use client"
import { getServicesDetails } from '@/services/getServices';
import { useSession } from 'next-auth/react';
import  { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';

const Page = ({params}) => {
    const {data} = useSession()
    const [booking, setBooking] = useState([]);
    const loadBooking = async () =>{
        const bookingDetail = await fetch(`http://localhost:3000/my-bookings/api/delete-booking/${params.id}`)
        const data = await bookingDetail.json()
        console.log(data)
        setBooking(data.response)
    }

    const handleUpdateBooking = async (event) =>{
        event.preventDefault();
        const updatedBooking = {
            date : event.target.date.value,
            message : event.target.date.value,
        }
        const resp = await fetch(`http://localhost:3000/my-bookings/api/delete-booking/${params.id}`,
            {
                method : "PATCH",
                body : JSON.stringify(updatedBooking),
                headers : {
                    "content-type" : "application/json",
                }
            },

        );
        if(resp.status === 200){
            toast.success("updated Succesfully")
        }
    }

    useEffect(()=>{
        loadBooking()
    },[params])
    
    return (
        <div className='bg-white'>
             <div>
             <h1 className="relative text-3xl font-bold bg-[url('/assets/images/banner/6.jpg')] w-[1200px] h-[300px]  mx-auto  rounded-md bg-cover bg-blend-darken text-[#fff] py-60 px-10">Update Form</h1>
                <div className="absolute top-[527px] right-[450px]">
                    <h1 className="relative w-[300px] pr-[50px] border-b-[50px] border-l-[50px] border-l-transparent border-r-[50px]  border-b-[#FF3811] border-transparent"><span className="absolute p-2 text-white font-bold">Home / Update Form</span></h1>
                </div>
             </div>
             <div className='mt-10 bg-[#F3F3F3] p-10 w-[800px] mx-auto'>
                <form onSubmit={handleUpdateBooking}>
                  <div className='grid grid-cols-2 gap-4'>
                  <input defaultValue={data?.user?.name} type="text" name="name" placeholder=' Name' className='w-[350px] p-4 rounded-md' readOnly/>
                  <input defaultValue={new Date().getDate()} type="date" name="date"  className='w-[350px] p-4 rounded-md' />
                  <input 
                   defaultValue={booking?.price}
                   type="text" name="price"   className='w-[350px] p-4 rounded-md' readOnly/>
                  <input defaultValue={data?.user?.email} type="email" name="email" placeholder='Email' className='w-[350px] p-4 rounded-md' readOnly/>
                  </div>
                  <div className='mt-4 '>
                    <textarea className='w-[700px] h-[200px] rounded-md p-4' placeholder='your message' type="text" name="message"></textarea>
                  </div>
                  <button className='w-full btn btn-primary mt-4 text-white'>Update Form</button>
                </form>
             </div>
        </div>
    );
};

export default Page;