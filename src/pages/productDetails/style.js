import { Link } from 'react-router-dom';
import styled from 'styled-components';
export const DetialsContier=styled.div `
max-width: 1500px;
margin: 0 auto;
font-family: var( --primary-font);
padding: 40px 20px;
`;
export const WarrpCard=styled.div`
background-color: #eee;

`;
export const Breadcrump=styled.div`
font-size: 0.9rem;
color: var(--color-text-muted);
margin-bottom: 20px;
font-family: var( --primary-font);
a{
    color: var(--color-primary);
    text-decoration: none;
    font-weight: 500;
     
    &:hover{
        text-decoration: underline;
        color: var(--color-primary-hover);

    }
}

`;
export const BackLink=styled(Link)`
display: inline-block;
color: var(--color-text-muted);
text-decoration: none;
font-weight: 600;
margin-bottom: 30px;
font-family: var(--primary-font);
transition: color 0.2s  ease ;
&:hover{
    color: var(--color-primary);

}

`;
export const MainContent=styled.div`
display:flex;
background-color: white;
gap: 50px;
margin-bottom: 60px;
border-radius: 8px;



`;
export const ImageSection=styled.div`
flex: 1;
background-color: var( --color-secondry);
height: auto;
border-radius: var(--border-radius);
position: relative;
display: flex;
align-items: center;
justify-content: center;
 .badge{
    background-color: var(--color-primary);
    color: #ffffff;
    border-radius: 4px ;
    padding: 6px  14px ;
    font-weight: bold;
    font-size: 0.8rem;
    text-transform: uppercase;
    text-align: center;
    position: relative;
    top: 85px;
    left: 40px;
margin-top:50 px;
 }
 .image-placholder{
    font-size: 6rem;
    position: relative;
    right: 40px;
    text-align: center;
color: #ffffff;
 }
`;
export const InfoSection=styled.div`
flex: 1;
display: flex;
background-color: white;
flex-direction: column;
padding: 20px 20px 20px 0;
border-radius: 6px;
gap: 20px;

`;
export const ProductCat=styled.span`
color: var( --color-text-muted);
border: 0;
border-radius: 6px;
background-color: #e4ecf8;
width: 20%;
padding: 15px;
font-size: 00.85rem;
font-weight: 700;
text-transform: uppercase;
letter-spacing: 1px;
`;
export const ProductTitel=styled.h1`
font-size: 2.5rem;
margin: 0;
color: var( --color-text-main);
font-weight: 700;
`;
export const ProductPrice=styled.div`
font-size: 2.2rem;
color: var(--color-primary );
font-weight: 700;
 
 span{
    font-size: 1.1rem;
    color: var(--color-text-muted);
    font-weight: normal;

 }
`;
export const ProductDesc=styled.p`
color: var(  --color-text-main);
line-height: 1.7;
font-size: 1rem;
opacity: 0.9;

`;
export const QuantityContianer=styled.div`
display: flex;
gap: 12px;
align-items: center;
margin: 15px 0;
  
  label{
    font-weight: 700;
    font-size: 1rem;
    color: var(  --color-text-main);

  }
`;
export const QtyBtn=styled.button`
width: 40px ;
height: 40px;
border: 1px solid var(--color-border);
background-color: #ffffff;
cursor: pointer;
font-size: 1.3rem;
border-radius: 4px;
display: flex;
align-items: center;
justify-content: center;
transition:  all 0.2 ease;
color: var(--color-text-main);
&:hover:not(:disabled){
    background-color: var(--color-border);
    border-color: var(--color-text-muted);
    &:disabled{
        opacity: 0.4;
        cursor: not-allowed;


    }
}

`;
export const QtyInput=styled.input`
width: 55px ;
height: 40px;
text-align: center;
border: 1px solid var(--color-border );
border-radius: 4px ;
font-size: 1rem;
font-weight: 600;
color: var(--color-text-main);
background-color: #ffffff;
&:hover{
    outline: none;
    border-color: var(--color-primary);

}

`;
export const ActionButton=styled.div`
display: flex;
gap: 15px;
margin-top: 10px;
width: ${props=>props.variant==='primary'?"200px":""};
button{
    padding: 14px 35px;
    font-size: 1rem;
    font-weight: 600;
    border-radius: var(--border-radius);
    width: 100%;
    

}



`;



    

export const RelatedSection=styled.div`
border-top: 1px solid var(--color-border);
padding-top:50px ;
margin-top: 20px;

`;
export const RelatedTitle=styled.h2`
font-size: 1.8rem;
color: var( --color-text-main);
margin-bottom: 35px;
font-weight: 700;

`;
 export const RealtedGrid=styled.div`
display: grid;
grid-template-columns: repeat(3,1fr);
gap: 30px;
@media (max-width: 968px) {
    grid-template-columns: repeat(2,1fr);
}
    

`;
export const FeaturesList=styled.ul`
margin: 20px 0;
padding: 0;
display: flex;
flex-direction: column;
gap: 10px;


`;
export const FeaturesItem=styled.li`
display: flex;
align-items: center;
gap: 20;
font-size: 1rem;
color: var(--color-text-main);
font-family: var(--primary-font);


`;
export const SwiperWrapper=styled.div`
width: 100%;
padding: 20px 0 40px 0;
position: relative;
.swiper{
    padding: 10px 5px 30px 5px;

}
.swiper-slide{
    height: auto;
    display: flex;
    justify-content: center;
}
.swiper-button-next,
.swiper-button-prev{
    color: var(--color-primary,#10b981);
    transform: scale(0.7);
    &:hover{
        color: var(--color-primary-hover,#059669);
    }
}
.swiper-pagination-bullet-active{
    background: var(--color-primary,#10b981);
}

`;
export const reviewsText=styled.div`
display: flex;
position: relative;
right: 50px;
flex-direction: column;

`

