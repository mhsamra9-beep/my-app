import React from 'react';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { productsArray } from '../../pages/products/productData';
import ProductCard from './productCard';
import { Link } from 'react-router-dom';

const SectionWrapper = styled.section`
  padding: 80px 24px;
  width: 100%;
  box-sizing: border-box;
`;

const InnerContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 40px;
  text-align: left;
`;

const Badge = styled.span`
  color: #22c55e;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  display: block;
  margin-bottom: 4px;
  letter-spacing: 0.05em;
`;

const Title = styled.h2`
  font-size: 2rem;
  font-weight: 800;
  color: #000000;
  margin: 0;
  font-family: sans-serif;
`;

const Description = styled.p`
  color: #94a3b8;
  font-size: 0.9rem;
  margin-top: 6px;
  margin-bottom: 0;
  font-family: sans-serif;
`;

const ViewAllBtn = styled(Link)`
  background: none;
  padding: 15px;
  padding-right: 30px;
  padding-left: 20px;
  border-radius: 10px;
  border: 1px solid #22c55e;
  color: #22c55e;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 4px;
  white-space: nowrap;
  transition: color 0.2s ease;

  &:hover {
    color: #247a44;
  }
`;

const SwiperContainer = styled.div`
  width: 100%;
  
  .swiper-button-next, .swiper-button-prev {
    color: #22c55e !important;
  }
  .swiper-pagination-bullet-active {
    background: #22c55e !important;
  }
  .swiper-pagination-bullet {
    background: #ffffff;
  }
`;

export default function TrendingProductsSlider() {
  const swiperSettings = {
    spaceBetween: 30,
    slidesPerView: 1,
    navigation: true,
    pagination: { clickable: true },
    autoplay: { delay: 3000, disableOnInteraction: false },
    breakpoints: {
      768: { slidesPerView: 2, spaceBetween: 20 },
      1024: { slidesPerView: 3, spaceBetween: 25 }
    }
  };

  return (
    <SectionWrapper>
      <InnerContainer>
        <HeaderContainer>
          <div>
            <Badge>HOT RIGHT NOW</Badge>
            <Title>Trending Products</Title>
            <Description>Our most popular tools and solutions, loved by teams around the world.</Description>
          </div>
          <ViewAllBtn to="/products">
            View All <span style={{ fontSize: '10px' }}>❯</span>
          </ViewAllBtn>
        </HeaderContainer>

        <SwiperContainer>
          <Swiper modules={[Navigation, Pagination, Autoplay]} {...swiperSettings}>
            {productsArray.map((product) => (
              <SwiperSlide key={product.id}>
                <ProductCard
                  viewMode="grid"
                  product={product}
                  onAddCard={() => console.log(product)}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </SwiperContainer>
      </InnerContainer>
    </SectionWrapper>
  );
}