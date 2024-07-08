import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";


const ServiceCard = ({service}) => {
    return (
        <div>
            <div className="card card-compact bg-base-100 w-96 shadow-xl">
                <figure>
                   <Image className="w-[430px] h-[200px]" alt={service.title} src={service.img} height={60} width={100}></Image>
                </figure>
                <div className="card-body">
                    <h2 className="card-title font-bold">{service.title}</h2>
                    <p className="font-bold text-[#FF3811] text-xl">price: ${service.price}</p>
                    <div className="card-actions justify-end">
                       <Link href={`/services/${service._id}`}> <button className="btn  bg-transparent border-none text-[#FF3811] text-xl"><FaArrowRight /></button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;