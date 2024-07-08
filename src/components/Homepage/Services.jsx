import React from 'react';

import ServiceCard from '../cards/ServiceCard';

const getServices = async() =>{
    const res = await fetch('http://localhost:3000/services/api/get-all')
    const services = res.json()
    return services;
}

const Services = async() => {
    const {services} = await getServices()
  
    return (
        <div>
            <div className='text-center'>
                <h1 className='text-[#FF3811]'>Service</h1>
                <h1 className='font-bold text-5xl '>Our Service Area</h1>
                <p className='text-[#737373]'>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. </p>
            </div>
            <div className='container mx-auto mt-12 grid grid-cols-1 lg:grid-cols-3 gap-6'>
                {
                    services?.length>0 && services?.map((service)=>(
                        <ServiceCard key={service._id} service={service}></ServiceCard>
                    ))
                }
            </div>
        </div>
    );
};

export default Services;