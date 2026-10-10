import environment from "../../environment"
import { GET } from "../http.service"

const getProduct=async()=>{
    const response=await GET(environment.products);
    return response;
}