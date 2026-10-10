import { ButtonGroup, CardBadge, CardContent, CardFooter, CardWrapper, ImageArea, ListHeaderRow, PricePeriod, ProductCategory, ProductDescription, ProductPrice, ProductTitle, ReviewsText, RivewTextList } from "../../pages/products/styles";
import CustomButtom from "./buttomcomponents";
import { MdAddShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";
import { SiHackthebox } from "react-icons/si";
import { FaStar } from "react-icons/fa6";
import { useTranslation } from "react-i18next";
const ProductCard =({product,viewMode,onAddCard,onClick })=>{
    const isList= viewMode==='list';
const {t}=useTranslation();
    if (isList){
return(
    <CardWrapper isList={true} onClick={onClick} style={{cursor:'pointer'}}>
<ImageArea isList={true}>
<SiHackthebox className="image-placholder" />
</ImageArea>
<CardContent isList={true}>
    <ListHeaderRow>
<div>

{product.badge &&<CardBadge isList={true}>{product.badge}</CardBadge>}
    <ProductTitle isList ={true}> {product.name} </ProductTitle>
    <ProductCategory>${product.category}</ProductCategory>
</div>
<ProductPrice isList={true}>{product.price} <PricePeriod>/OM</PricePeriod></ProductPrice>
    </ListHeaderRow>
<ProductDescription isList ={true}>{product.description}</ProductDescription>
<RivewTextList >
    {[...Array(5)].map((_,index)=>(
    <FaStar  key={index}  color="yellow" />))}
    {product.rating} ({product.reviewsCount}reviews)
</RivewTextList>
<ButtonGroup isList={true}>
    <Link to={`/products/${product.id}`}>
    <CustomButtom
    buttonText={'view Detils'}
    variant={'secondary'}
    />
    </Link>
    <CustomButtom 
    buttonText={'Add To Card'}
    variant={'primary'}
    // MdAddShoppingCart={<MdAddShoppingCart size={20} />} 
    onclickfunction={onAddCard(product)}
    />

</ButtonGroup>
</CardContent>
    </CardWrapper >
);
    }
    return(
         <CardWrapper isList={false} onClick={onClick} style={{cursor:'pointer'}}>
<ImageArea isList={false}>
    <SiHackthebox className="image-placholder"  size={65}/>

{product.badge &&<CardBadge isList={false}>{product.badge}</CardBadge>}
</ImageArea>
<CardContent isList={false}>
    

    <ProductCategory>${product.category}</ProductCategory>
    <ProductTitle isList ={false}> {product.name} </ProductTitle>
<ProductDescription isList ={false}>{product.description}</ProductDescription>
<CardFooter>
<ProductPrice isList={true}>{product.price} <PricePeriod>/OM</PricePeriod></ProductPrice>
<ReviewsText>
    {[...Array(5)].map((_,index)=>(

<FaStar  key={index} color="yellow" />))} ( {product.rating}) 
</ReviewsText>
<ButtonGroup isList={false}>
   <Link to={`/products/${product.id}`} >
    <CustomButtom
    buttonText={'Detils'}
    variant={'#EEE'}
    color={"#000"}
    />
    </Link>
    <CustomButtom 
    buttonText={'Add'}
    variant={'primary'}
        // MdAddShoppingCart={<MdAddShoppingCart size={20} />} 

    onclickfunction={onAddCard(product)}
    />

</ButtonGroup>
    </CardFooter>
</CardContent>
    </CardWrapper>

    );
};
export default ProductCard;