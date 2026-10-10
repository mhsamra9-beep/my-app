import React from 'react';
import pathConstants from './PathConstants';
import PrivateRoutes from '../components/routes/privateRoutes';
const HomePage=React.lazy(()=>import('../pages/home'));
const AboutUsPage=React.lazy(()=>import('../pages/about'));
const Loginform=React.lazy(()=>import('../pages/Login'));
const ProtfolioPage=React.lazy(()=>import('../pages/protfolio'));
const ProductPage=React.lazy(()=>import('../pages/products'));
const ProductDetailsPage=React.lazy(()=>import('../pages/productDetails'));
const BlogPage=React.lazy(()=>import('../pages/blog'));
const SerivecePage=React.lazy(()=>import('../pages/service'));
const CotentPage=React.lazy(()=>import('../pages/content'));
const QuizPage=React.lazy(()=>import('../pages/Quiz-Page'));
const RegisterPage=React.lazy(()=>import('../pages/register'));

const routes=[
    { path:pathConstants.HOME, element:<HomePage/>},
    {path:pathConstants.ABOUT, element:<AboutUsPage/>},
    {path:pathConstants.LOGIN, element:<Loginform/>},
    {path:pathConstants.PROTFOLIO, element:<ProtfolioPage/>},
    {path:pathConstants.PRODUCT, element:<ProductPage/>},
    {path:pathConstants.PRODUCT_DETELS, element:<ProductDetailsPage/>},
    {path:pathConstants.BLOG, element:<BlogPage/>},
    {path:pathConstants.SERIVES, element:<SerivecePage/>},
    {path:pathConstants.CONTENT, element:<CotentPage/>},
    {path:pathConstants.QUIZ, element:<QuizPage/>},
    {path:pathConstants.REGISTER, element:<RegisterPage/>},
    {
        element:<PrivateRoutes/>,
        children:[{path:pathConstants.PRODUCT, element:<ProductPage/>}]
    },

    
];
export default routes;