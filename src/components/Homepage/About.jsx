import Image from "next/image";



const About = () => {
    return (
        <div className="text-slate-900 h-screen mt-20 mx-auto">
            <div className="container mx-auto ">
            <div className="grid grid-cols-1 lg:grid-cols-2 w-[850px] justify-center mx-auto gap-10">
                <div className="w-[400px]">
                    <Image className="h-[300px] w-[300px] object-cover ml-10 rounded-md relative" alt='about' src='/assets/images/about_us/person.jpg' height={60} width={100}></Image>
                    <Image className="h-[200px] w-[200px] object-cover ml-10 rounded-md absolute top-[900px] left-96 border-[20px] border-[#FFFFFF]" alt='about' src='/assets/images/about_us/parts.jpg' height={60} width={100}></Image>
                </div>
                <div className="w-[450px]">
                    <h1 className="font-bold text-[#FF3811]">About us</h1>
                    <h1 className="text-5xl font-bold mt-4">We are qualified <br /> & of experience <br /> in this field</h1>
                    <p className="text-sm text-[#737373] mt-4">There are many variations of passages of Lorem Ipsum <br /> available, but the majority have suffered alteration in some <br /> form, by injected humour, or randomised words which don't <br /> look even slightly believable. </p>
                    <p className="text-sm text-[#737373] mt-4">the majority have suffered alteration in some form, by injected <br /> humour, or randomised words which don't look even slightly <br /> believable. </p>
                </div>
            </div>
            </div>
        </div>
    );
};

export default About;