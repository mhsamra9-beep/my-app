import axios, { Axios } from "axios";
import environment from "../environment"
import { handleError } from "./error.service";
import { getCookie } from "../helpers/cookies";

const getconfig=()=>{
    const token=getCookie(environment.TOKEN_KEY);
    const headers={
    "Content-Type": "application/json",
    };

    if(token){
        headers.Authorization=`Bearer${token}`;
    }
    return{headers};


}
export const GET=async(apipath)=>{
    let res={};
    await axios
.get(`${environment.API_URL}/${apipath}`,getconfig())
.then((response) => {
res.status=response.status;
res.data=response.data;

})
.catch((error)=>{
    handleError(error.response);
}
);
return res;

}
export const POST=async(apipath,bodyRequst)=>{
 let res={};
 await axios
 .post(`${environment.TOKEN_KEY}/${apipath}`,bodyRequst,getconfig())
 .then((response)=>{
res.status=response.status;
res.data=response.data;
 }
)
.catch((error)=>{
    handleError(error?.response);
    return res;
}
);

};
export const PUT= async(apipath,bodyRequst)=>{
let res={};
await axios 
.put(`${environment.API_URL}/${apipath}`,bodyRequst,getconfig)
.then((response)=>{
res.status=response.status;
res.data=response.data;
})
.catch((error)=>{
handleError(error?.response);
});
return res;
};
export const PUTCH=async(apipath,bodyRequst)=>{
    let res={};
    await axios
    .putch(`${environment.API_URL}/${apipath}`,bodyRequst,getconfig())
    .then((response)=>{
res.status=response.status;
res.data=response.data;

    })
    .catch((error)=>{
        handleError(error?.response);
    });
    return res;
    

};
export const DELETE=async(apipath,bodyRequst)=>{
    let res={};
    await axios
    .delete(`${environment.API_URL}/${apipath}`,bodyRequst,getconfig())
    .then((response)=>{
        res.status=response.status;
        res.data=response.data;

    })
    .catch((error)=>{
        handleError(error?.response);

    })
    return res;

}