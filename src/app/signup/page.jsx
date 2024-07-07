"use client"
import Image from "next/image";
import Link from "next/link";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaGoogle } from "react-icons/fa";


const page = () => {
    const handleSignup=async (event)=>{
        event.preventDefault();
        const newUser ={
            name: event.target.name.value,
            email: event.target.email.value,
            password: event.target.password.value,
        }
       const response = await fetch("http://localhost:3000/signup/api",{
        method:"POST",
        body:JSON.stringify(newUser),
        headers:{
            "content-type":"application/json"
        }
       })
       console.log(response)
       if(response.status === 200){
        event.target.reset()
       }
    }
    return (
        <div>
             <div className="container mx-auto bg-white py-24 px-24">
            <div className="grid grid-cols-2 gap-12 items-center justify-center">
                <div className="">
                    <Image alt="login" src="/assets/images/login/login.svg" height="340" width="340"></Image>
                </div>
                <div className="w-[500px] border-2 p-12 rounded-md">
                <h1 className="text-center font-semibold text-3xl">Sign up</h1>
                <form onSubmit={handleSignup}>
                <label htmlFor="Name">Name</label><br />
                <input className="border-2 border-black p-2 rounded-md mt-2 w-full" type="text" name="name" placeholder="your name"></input>
                <br />
                <label htmlFor="email">Email</label><br />
                <input className="border-2 border-black p-2 rounded-md mt-2 w-full" type="text" name="email" placeholder="your email"></input>
                <br />
                <label htmlFor="email">Password</label><br />
                <input className="border-2 w-full border-black p-2 rounded-md mt-2" type="password" name="password" placeholder="your password"></input>
                <button type="submit" className="btn btn-primary w-full text-white mt-4">Sign up</button>
                <p className="text-sm mt-4 text-center text-[#444444]">or sign in with</p>
                </form>
                <div className="flex gap-4 mt-4 justify-center">
                <FaFacebookSquare />
                <FaLinkedin />
                <FaGoogle />
                </div>
                <div className="flex text-sm mt-4 justify-center text-[#737373] gap-4">
                    Already have an account?  <Link href="/login" ><p className="text-[#FF3811] font-bold"> Login </p></Link>
                </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default page;