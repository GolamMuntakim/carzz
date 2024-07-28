import axios from "axios";

export const getServices = async()=>{
    const res = await axios.get('http://localhost:3000/services/api/get-all')
    // const services = res.json()
    return res.data;
}
export const getServicesDetails = async(id)=>{
    const res = await fetch(`http://localhost:3000/services/api/${id}`)
    const service = res.json()
    return service;
}