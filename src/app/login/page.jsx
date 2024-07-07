"use client"
import Image from "next/image";
import Link from "next/link";
import {signIn, useSession} from "next-auth/react"
import { FaFacebookSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { useRouter } from "next/navigation";




const page = () => {
    const router = useRouter()
    const session = useSession()
    const handleLogin=async (event)=>{
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        const response = await signIn('credentials',{
            email,
             password,
              redirect:false
        })
        if(response.status === 200){
            router.push('/')
        }
    }
    const handleGoogleLogin= async(provider) =>{
        const response = await signIn(provider)
    }
    const handleGithubLogin= (provider) =>{
        const response =  signIn(provider,{redirect:false})
       
    }
    if(session.status === 'authenticated'){
        router.push('/')
    }
    return (
        <div className="container mx-auto bg-white py-24 px-24">
            <div className="grid grid-cols-2 gap-12 items-center justify-center">
                <div className="">
                    <Image alt="login" src="/assets/images/login/login.svg" height="340" width="340"></Image>
                </div>
                <div className="w-[500px] border-2 p-12 rounded-md">
                <h1 className="text-center font-semibold text-3xl">Login</h1>
                <form onSubmit={handleLogin}>
                <label htmlFor="email">Email</label><br />
                <input className="border-2 border-black p-2 rounded-md mt-2 w-full" type="text" name="email" placeholder="your email"></input>
                <br />
                <label htmlFor="email">Password</label><br />
                <input className="border-2 w-full border-black p-2 rounded-md mt-2" type="password" name="password" placeholder="your password"></input>
                <button type="submit" className="btn btn-primary w-full text-white mt-4">Sign in</button>
                <p className="text-sm mt-4 text-center text-[#444444]">or sign in with</p>
                </form>
                <div className="flex gap-4 mt-4 justify-center">
                <FaFacebookSquare />
                <button onClick={()=>handleGithubLogin('github')}>  <FaGithub /></button>
               <button onClick={()=>handleGoogleLogin('google')}> <FaGoogle /></button>
                </div>
                <div className="flex text-sm mt-4 justify-center text-[#737373] gap-4">
                    Have an account?  <Link href="/signup" ><p className="text-[#FF3811] font-bold"> sign up </p></Link>
                </div>
                </div>
            </div>
        </div>
    );
};

export default page;
