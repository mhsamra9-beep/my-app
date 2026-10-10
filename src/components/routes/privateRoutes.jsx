import { Navigate, Outlet, useLocation,  } from "react-router-dom"
import environment from "../../environment";
import pathConstants from "../../routes/PathConstants";
import Cookies from "js-cookie";

const PrivateRoutes=()=>{

  const location = useLocation();
    const isAuthorized= Cookies.get(environment.TOKEN_KEY);
    return isAuthorized ? (
        <Outlet/>

    ) : (

        <Navigate to={pathConstants.LOGIN} state={{from:location}} replace/>
    );
};
export default PrivateRoutes;