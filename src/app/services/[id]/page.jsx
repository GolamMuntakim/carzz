import { services } from "@/lib/services";
import { getServicesDetails } from "@/services/getServices";
import { deserialize } from "mongodb";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

export const metadata = {
    title:"Details",
    description: "Service Details Page"
}
const page = async ({params}) => {
    const details = await getServicesDetails(params.id)
    const {title, description, img, price, facility} = details.service;
    return (
        <div className="bg-white ">
            <div>
                {/* <Image className="w-[1200px] h-[400px]  mx-auto brightness-50 rounded-md" alt="banner" src="/assets/images/banner/4.jpg" height={100} width={100}></Image> */}
                <h1 className="relative text-3xl font-bold bg-[url('/assets/images/banner/4.jpg')] w-[1200px] h-[300px]  mx-auto  rounded-md bg-cover bg-blend-darken text-[#fff] py-60 px-10">Service details</h1>
                <div className="absolute top-[527px] right-[450px]">
                    <h1 className="relative w-[300px] pr-[50px] border-b-[50px] border-l-[50px] border-l-transparent border-r-[50px]  border-b-[#FF3811] border-transparent"><span className="absolute p-2 text-white font-bold">Home / service Details</span></h1>
                </div>
            </div>
            <div className="grid grid-cols-2 mt-10 w-[1000px] mx-auto gap-80">
                <div className="w-[650px] p-10">
                    <div>
                    <Image className="rounded-md" alt="engine" src={img} height={100} width={550}></Image>
                    <h1 className="mt-10 text-3xl font-bold">{title}</h1>
                    <p className="mt-10 text-[#737373] text-sm">{description}</p>
                    </div>
                    <div className="mt-8 grid grid-cols-2 gap-8">
                        {
                            facility.map((item,index)=>(
                                <div key={index} className="bg-[#F3F3F3] p-6 w-72 rounded-md border-t-2 border-t-[#FF3811]">
                        <h1 className="font-bold text-[#444444]">{item?.name}</h1>
                        <p className="text-[#737373] text-sm">{item?.details}</p>
                       </div>
                            ))
                        }
                       {/* <div className="bg-[#F3F3F3] p-6 w-72 rounded-md border-t-2 border-t-[#FF3811]">
                        <h1 className="font-bold text-[#444444]">Instant Car Services</h1>
                        <p className="text-[#737373] text-sm">It uses a dictionary of over 200<br /> Latin words, combined with a model <br /> sentence structures.</p>
                       </div>
                       <div className="bg-[#F3F3F3] p-6 w-72 rounded-md border-t-2 border-t-[#FF3811]">
                        <h1 className="font-bold text-[#444444]">24/7 Quality Service</h1>
                        <p className="text-[#737373] text-sm">It uses a dictionary of over 200<br />Latin words, combined with a model<br />sentence structures.</p>
                       </div>
                       <div className="bg-[#F3F3F3] p-6 w-72 rounded-md border-t-2 border-t-[#FF3811]">
                        <h1 className="font-bold text-[#444444]">Easy Customer Service</h1>
                        <p className="text-[#737373] text-sm">It uses a dictionary of over 200<br />Latin words, combined with a model<br />sentence structures.</p>
                       </div>
                       <div className="bg-[#F3F3F3] p-6 w-72 rounded-md border-t-2 border-t-[#FF3811]">
                        <h1 className="font-bold text-[#444444]">Quality Cost Service</h1>
                        <p className="text-[#737373] text-sm">It uses a dictionary of over 200<br />Latin words, combined with a model<br />sentence structures.</p>
                       </div> */}
                    </div>
                    <div className="mt-8">
                        <p className="text-sm text-[#737373]">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. </p>
                    </div>
                    <div className="mt-8">
                        <h1 className="text-3xl font-bold">3 Simple Steps to Process</h1>
                        <p className="text-sm text-[#737373] mt-8">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text</p>
                    </div>
                    <div className="mt-10 grid grid-cols-3 gap-20">
                        <div className="w-[200px] bg-[#E8E8E8] flex flex-col justify-center items-center p-6 rounded-md">
                            <div className="bg-[#FF3811] w-20 h-20 p-4 text-white flex justify-center items-center font-bold rounded-full">01</div>
                            <h1 className="mt-4 font-bold">Step One</h1>
                            <p className="text-[#737373]">It uses a dictionary of over 200 .</p>
                            </div>
                        <div className="w-[200px] bg-[#E8E8E8] flex flex-col justify-center items-center p-6 rounded-md">
                            <div className="bg-[#FF3811] w-20 h-20 p-4 text-white flex justify-center items-center font-bold rounded-full">02</div>
                            <h1 className="mt-4 font-bold">Step Two</h1>
                            <p className="text-[#737373]">It uses a dictionary of over 200 .</p>
                            </div>
                        <div className="w-[200px] bg-[#E8E8E8] flex flex-col justify-center items-center p-6 rounded-md">
                            <div className="bg-[#FF3811] w-20 h-20 p-4 text-white flex justify-center items-center font-bold rounded-full">03</div>
                            <h1 className="mt-4 font-bold">Step Three</h1>
                            <p className="text-[#737373]">It uses a dictionary of over 200 .</p>
                            </div>
                    </div>
                    <div className="mt-10">
                        <Image className="rounded-md" alt="banner" src="/assets/images/banner/2.jpg" height={200} width={650}></Image>
                    </div>
                </div>
                <div className="w-[300px] h-[400px] bg-[#F3F3F3] mt-10">
                    <div className="w-[350px] p-6">
                        <h1 className="text-2xl font-bold text-black">Services</h1>
                        <div className="collapse  hover:bg-[#FF3811] hover:text-white"> 
                       
                        <input type="radio" name="my-accordion-2" defaultChecked />
                        <div className="collapse-title text-xl hover:text-white font-medium flex items-center gap-4"><span>Full Car Repair</span> <span className="text-sm hover:text-white"><FaArrowRight /></span></div>
                        <div className="collapse-content">
                            <p>$400</p>
                        </div>
                    </div>
                        <div className="collapse  hover:bg-[#FF3811] hover:text-white"> 
                       
                        <input type="radio" name="my-accordion-2" defaultChecked />
                        <div className="collapse-title text-xl hover:text-white font-medium flex items-center gap-4"><span>Engine Repair</span> <span className="text-sm hover:text-white"><FaArrowRight /></span></div>
                        <div className="collapse-content">
                            <p>$400</p>
                        </div>
                    </div>

                        <div className="collapse  hover:bg-[#FF3811] hover:text-white"> 
                        <input type="radio" name="my-accordion-2" defaultChecked />
                        <div className="collapse-title text-xl hover:text-white font-medium flex items-center gap-4"><span>Automatic Services</span> <span className="text-sm hover:text-white"><FaArrowRight /></span></div>
                        <div className="collapse-content">
                            <p>$400</p>
                        </div>
                    </div>
                        <div className="collapse  hover:bg-[#FF3811] hover:text-white"> 
                        <input type="radio" name="my-accordion-2" defaultChecked />
                        <div className="collapse-title text-xl hover:text-white font-medium flex items-center gap-4"><span>Engine Oil Change</span> <span className="text-sm hover:text-white"><FaArrowRight /></span></div>
                        <div className="collapse-content">
                            <p>$400</p>
                        </div>
                    </div>
                        <div className="collapse  hover:bg-[#FF3811] hover:text-white"> 
                        <input type="radio" name="my-accordion-2" defaultChecked />
                        <div className="collapse-title text-xl hover:text-white font-medium flex items-center gap-4"><span>Battery Charge</span> <span className="text-sm hover:text-white"><FaArrowRight /></span></div>
                        <div className="collapse-content">
                            <p>$400</p>
                        </div>
                    </div>
                       
                        
                       
                        </div>
                        <div className="bg-[#151515] text-white  h-52 p-4 rounded-md">
                            <h1 className="font-semibold">Download</h1>
                           <div className="flex gap-20">
                           <div className="flex items-center gap2">
                                <h1>
                                    <Image className="h-6" alt="icon" src="/assets/icons/vector.svg" height={60} width={60}></Image>
                                </h1>
                                <h1>
                                    <p className="font-bold">Our Brochure</p>
                                    <p className="text-sm">Download</p>
                                </h1>
                            </div>
                            <div className="bg-[#FF3811] p-2 h-8 rounded-md">
                            <FaArrowRight />
 
                            </div>
                           </div>
                           <div className="flex gap-10 mt-4">
                           <div className="flex items-center gap-2">
                                <h1>
                                    <Image className="h-6" alt="icon" src="/assets/icons/vector.svg" height={60} width={60}></Image>
                                </h1>
                                <h1>
                                    <p className="font-semibold">Company Details</p>
                                    <p className="text-sm">Download</p>
                                </h1>
                            </div>
                            <div className="bg-[#FF3811] p-2 h-8 rounded-md">
                            <FaArrowRight />
 
                            </div>
                           </div>
                        </div>
                        <div>
                            <h1 className="text-2xl font-bold mt-10">price ${price}</h1>
                            <button className="btn btn-primary mt-2 w-full text-white text-center">proceed Checkout</button>
                        </div>
                </div>
            </div>
        </div>
    );
};

export default page;