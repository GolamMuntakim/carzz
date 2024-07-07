import { connectDB } from "@/lib/connectDB";
import bcrypt from "bcrypt";


export const POST = async(request)=>{
    const newUser = await request.json();
    try{
        const db= await connectDB();
        const userCollection = db.collection("users");
        const exist = await userCollection.findOne({email: newUser.email});
        if(exist){
            return Response.json({message:"user exist"}, {status:304});
        }
        const hashPassword = bcrypt.hashSync(newUser.password, 14);
        const response = await userCollection.insertOne({...newUser,password:hashPassword});
        return Response.json({message: "user created"}, {status:200});
    }catch(error){
        return Response.json({message:"something wen wrong", error}, {status:500})
    }
}