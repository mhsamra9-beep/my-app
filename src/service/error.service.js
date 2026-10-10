import pathConstants from "../routes/PathConstants";

const ERRORS_OBJECT={
 400: "400Error",
  401: "401Error",
  403: "403Error",
  404: "404Error",
  500: "500Error",   
};
export const handleError =(error)=>{
const messageKey=
error?.data?.message||
error?.data?.Message||
ERRORS_OBJECT[error?.status] ||
 "500Error";  
if (error &&error?.status===401){
window.location.replace(pathConstants.LOGIN);
}
if(error &&error?.status===403){
    window.location.replace(pathConstants.HOME);
}
};