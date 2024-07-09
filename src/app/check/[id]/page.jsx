import { getServicesDetails } from '@/services/getServices';
import React from 'react';

const page = async({params}) => {
    const details = await getServicesDetails(params.id)
    const{_id, title, description, img, price, facility} = details.service;
    const handleBooking= async(event)=>{
        event.preventDefault()
    }
    return (
        <div className='bg-white'>
             <div>
             <h1 className="relative text-3xl font-bold bg-[url('/assets/images/banner/4.jpg')] w-[1200px] h-[300px]  mx-auto  rounded-md bg-cover bg-blend-darken text-[#fff] py-60 px-10">Check Out</h1>
                <div className="absolute top-[527px] right-[450px]">
                    <h1 className="relative w-[300px] pr-[50px] border-b-[50px] border-l-[50px] border-l-transparent border-r-[50px]  border-b-[#FF3811] border-transparent"><span className="absolute p-2 text-white font-bold">Home / Check Out</span></h1>
                </div>
             </div>
             <div className='mt-10 bg-[#F3F3F3] p-10 w-[800px] mx-auto'>
                <form onSubmit={handleBooking}>
                  <div className='grid grid-cols-2 gap-4'>
                  <input type="text" name="name" placeholder='First Name' className='w-[350px] p-4 rounded-md' />
                  <input type="text" name="name" placeholder='Second Name' className='w-[350px] p-4 rounded-md' />
                  <input type="number" name="phone" placeholder='Phone Number' className='w-[350px] p-4 rounded-md' />
                  <input type="email" name="email" placeholder='Email' className='w-[350px] p-4 rounded-md' />
                  </div>
                  <div className='mt-4 '>
                    <textarea className='w-[700px] h-[200px] rounded-md' placeholder='your message' type="text" name="message"></textarea>
                  </div>
                  <button className='w-full btn btn-primary mt-4 text-white'>Order Confirm</button>
                </form>
             </div>
        </div>
    );
};

export default page;