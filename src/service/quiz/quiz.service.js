import environment from "../../environment"
import { GET } from "../http.service"

const getQuiz=async()=>{
    const response=await GET(environment.quiz);
    return response;
}