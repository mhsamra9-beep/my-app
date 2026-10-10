import environment from "../../environment"
import { POST } from "../http.service"

const postRegister=async(BodyRequest)=>{
const response=await POST(environment.register,BodyRequest);
return response;

}