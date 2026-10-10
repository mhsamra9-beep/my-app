import './App.css';
// import Loginform from './LoginForm';
import { BrowserRouter, createBrowserRouter, Route, Router, RouterProvider, Routes } from 'react-router-dom';
import PageNotFound from './pages/page-not-found/index.jsx';
import routes from './routes/index.js';
import { useTranslation } from "react-i18next";

import Layout from './components/Layout/index..jsx';
const App=()=>{
  const { i18n }=useTranslation();
  const router=createBrowserRouter([
{
  element:<Layout/>,
  errorElement:<PageNotFound/>,
  children : routes,

},
  ]);

  return (
    <div dir={i18n.language==="ar"?"rtl":"ltr"} >

        <RouterProvider router={router} />
    

    </div>

  );
};


export default App;