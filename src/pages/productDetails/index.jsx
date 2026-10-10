import { Link, useParams } from "react-router-dom"
import { productsArray } from "../products/productData";
import { useState } from "react";
import { ActionButton, BackLink, Breadcrump, DetialsContier, FeaturesItem, FeaturesList, ImageSection, InfoSection, MainContent, ProductCat, ProductDesc, ProductPrice, ProductTitel, QtyBtn, QtyInput, QuantityContianer, RealtedGrid, RelatedSection, RelatedTitle, SwiperWrapper, WarrpCard } from "./style";
import CustomButtom from "../../components/common/buttomcomponents";
import ProductCard from "../../components/common/productCard";
import { MdAddShoppingCart } from "react-icons/md";
import { SiHackthebox } from "react-icons/si";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { click } from "@testing-library/user-event/dist/click";
import { FaStar } from "react-icons/fa6";
import { ReviewsText } from "../products/styles";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import AppTemplate from "../../components/app-template";

const ProductDetailsPage = () => {

    const { id } = useParams();
    const product = productsArray.find((p) => p.id === parseInt(id));
    const [quantity, setQuantity] = useState(1);

    const handelIncrees = () => {
        setQuantity((p) => p + 1);
    }
    const handelDecreas = () => {
        if (quantity > 1)
            setQuantity((p) => p - 1);
    }
    const handeleAddToCard = () => {
        const cardData = {
            ...product,
            quantity: quantity
        }
        console.log(cardData);


    }
    const handeleBuyNow = () => {
        const BuyData = {
            ...product,
            quantity: quantity
        }
        console.log(BuyData);
    }
    const RelatedProduct = productsArray.filter((p) => p.id !== product?.id );
        const SwiperSetting={
            spaceBetween:30,
            slidesPerView:1,
            navigation:true,
            Pagination:{clickable:true},
            autoplay:{delay:3000,disableOnInteraction:false},
            breakpoints:{
    768:{slidesPerView:2,spaceBetween:20},
    1024:{slidesPerView:3,spaceBetween:25}
}
        }
    return (
        <AppTemplate>

            <WarrpCard >
        <DetialsContier>

            <Breadcrump>
                <Link to='/'>Home</Link> / <Link to='/products'>product</Link> /{product.name}
            </Breadcrump>
            <BackLink to='/products'>Back to products </BackLink>
            <MainContent>
                <ImageSection>
                    {product.badge && <span className="badge">{product.badge}</span>}
                    <SiHackthebox className="image-placholder" />
                </ImageSection>

                <InfoSection>
                    <ProductCat> {product.category} </ProductCat>
                    <ProductTitel> {product.name} </ProductTitel>
                       <reviewsText >
                        
                        {[...Array(5)].map((_,index)=>(
                            <FaStar  key={index}  color="yellow" />))}
                        {product.rating} ({product.reviewsCount}reviews)
                            </reviewsText>
                    <ProductDesc>  {product.description}  </ProductDesc>
                    <FeaturesList>
                        {product.features.map((features, index) => (
                            <FeaturesItem key={index}>
                               <IoMdCheckmarkCircleOutline color="green" />
                                {features}

                            </FeaturesItem>
                        )
                        
                    )}
                    <ProductPrice> ${product.price} <span>/Month</span> </ProductPrice>


                    </FeaturesList>
                    <QuantityContianer>
                        <label>Qty:</label>
                        <QtyBtn onClick={handelDecreas} disabled={quantity === 1}>-</QtyBtn>
                        <QtyInput type="text" value={quantity} />
                        <QtyBtn onClick={handelIncrees}>+</QtyBtn>
                    </QuantityContianer>
                    <ActionButton>
                       
                        <CustomButtom 
                            MdAddShoppingCart={<MdAddShoppingCart size={20} />}
                            variant='primary'
                            buttonText='Add To Card'
                            onclickfunction={handeleAddToCard}

                            />
                        <CustomButtom
                            variant='secoudry'
                            buttonText='Buy Now'
                            onclickfunction={handeleBuyNow}
                            color={'#28a745'}
                            />
                    </ActionButton>
                </InfoSection>
            </MainContent>
            {RelatedProduct.length > 0 && (
                <RelatedSection>

                    <RelatedTitle> Related producat</RelatedTitle>
                    <SwiperWrapper>

                    <Swiper modules={[Navigation,Pagination,Autoplay]}{...SwiperSetting}>
                        



                        {RelatedProduct.map((itms) => (
                            <SwiperSlide key={itms.id}>

                            <ProductCard
                                key={itms.id}
                                viewMode='grid'
                                product={itms}
                                onAddCard={() => console.log(itms)}
                                />
                                </SwiperSlide>
                            )
                            
                        )}
                        
                        
                        
                    </Swiper>
                        </SwiperWrapper>
                </RelatedSection>
            )}


        </DetialsContier>
            </WarrpCard>
            </AppTemplate>
    );


};
export default ProductDetailsPage;