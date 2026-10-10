import environment from "../../environment"
import { POST } from "../http.service"

const postLogin=async(BodyRequest)=>{
    const response=await POST(environment.login,BodyRequest);

    return response;
}