import Swiper from "swiper";
import AppTemplate from "../../components/app-template";
import HeroSection from "../../components/common/HeroSection";
import { SwiperWrapper } from "../productDetails/style";
import { SwiperSlide } from "swiper/react";
import ProductCard from "../../components/common/productCard";
import { productsArray } from "../products/productData";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { useParams } from "react-router-dom";
import FeaturesSection from "../../components/common/FeaturesSection";
import CatSection from "../../components/common/CatSection";
import TrendingProductsSlider from "../../components/common/TrendingSolider";
import styled from "styled-components";
const HomeContainer=styled.section`
    

`
const Homepage=()=>{


        
    return(
        <HomeContainer>

        <AppTemplate>
            <HeroSection/>
           <TrendingProductsSlider/>
                        <FeaturesSection/>
                        <CatSection/>

        </AppTemplate>
        </HomeContainer>
    )
};
export default Homepage;