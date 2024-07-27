"use client"
import { useSession } from 'next-auth/react';
import React, { useEffect, useState } from 'react';
import { GrUpdate } from "react-icons/gr";
import { RxCrossCircled } from "react-icons/rx";


const page = () => {
    const session = useSession()
    // console.table(session)
  const [bookings, setBookings] = useState([])

    const loadData = async() =>{
        const res = await fetch(`http://localhost:3000/my-bookings/api/${session?.data?.user?.email}`)
        const data = await res.json()
        // console.log(data)
        setBookings(data?.myBookings)
         
    }
    const handleDelete = async(id)=>{
      const deleted = await fetch(`http://localhost:3000/my-bookings/api/delete-booking/${id}`,
        {
          method:"DELETE"
        }
      )
      const resp = await deleted.json()
      console.log(resp)
     if(resp?.response?.deletedCount > 0){
      loadData();
     }
    }
    useEffect(()=>{
        loadData()
    }, [session])
    return (
        <div className='bg-white '>
            <div className='container mx-auto'>
            <h1 className="relative text-3xl font-bold bg-[url('/assets/images/banner/5.jpg')] w-[1200px] h-[300px]  mx-auto  rounded-md bg-cover bg-blend-darken text-[#fff] py-60 px-10">Booking details</h1>
                
            </div>

            {/*  */}
            <div className='mt-12'>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
        </th>
        <th>Name</th>
        <th>Service Title</th>
        <th>price</th>
        <th>Booking Date</th>
        <th>Update</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
     {
       bookings.map((booking, idx)=> (
            <tr key={idx}>
            <th>
           <button onClick={()=>handleDelete(booking._id)} className='btn outline-none border-none'> <RxCrossCircled className='text-4xl'/></button>
            </th>
            <td>
              <div className="flex items-center gap-3">
                <div className="avatar">
                  <div className="mask mask-squircle h-12 w-12">
                    <img
                      src={booking?.image}
                      alt="Avatar Tailwind CSS Component" />
                  </div>
                </div>
                <div>
                  {/* <div className="font-bold">{booking?.title}</div> */}
                </div>
              </div>
            </td>
            <td>
             {booking?.serviceTitle}
              <br />
            
            </td>
            <td>{booking?.price}</td>
            <th>
              <button className="btn btn-ghost btn-xs">{booking?.date}</button>
            </th>
            <th>
              <button className="btn btn-ghost btn-4xl"><GrUpdate /></button>
            </th>
          </tr>
        ))
     }
     
    </tbody>
  
  </table>
</div>
            </div>
        </div>
    );
};

export default page;