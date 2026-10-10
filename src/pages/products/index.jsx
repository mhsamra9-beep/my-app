import { useEffect, useState } from "react";
import { IoIosList } from "react-icons/io";
import { IoGridOutline } from "react-icons/io5";
import { productsArray } from "./productData";
import ProductCard from "../../components/common/productCard";
import { CategoryBtn, CategoryButtons, ContentWrapper, FilterBar, HeroSection, NoResults, PageContainer, ProductsGridContainer, ProductsListContainer, ResultsCount, SortLabel, SortSelect, Subtitle, Title, ViewActions, ViewBtn } from "./styles";
import { useNavigate } from "react-router-dom";
import { FaStar } from "react-icons/fa6";
import AppTemplate from "../../components/app-template";
import { useTranslation } from "react-i18next";
const ProductPage=()=>{
    const navigate=useNavigate();
const[viewMode,setViewMode]=useState('grid');
const[selectedCategory,setSelectedCategory]=useState('all');
const categorys=['all','Software','Robotics','AI','Hardware','Security'];
const addToCard=(product)=>{
console.log(product);
};
const { t, i18n } = useTranslation();

// 1. إنشاء المصفوفة الثانية المترجمة داخل الـ State
const [translatedProductsArray, setTranslatedProductsArray] = useState([]);
useEffect(() => {
  const translated = productsArray.map((product) => ({
    ...product,
    // ترجمة الحقول النصية بناءً على الـ id الخاص بالمنتج
    name: t(`prod_${product.id}.name`, { defaultValue: product.name }),
    category: t(`prod_${product.id}.category`, { defaultValue: product.category }),
    description: t(`prod_${product.id}.description`, { defaultValue: product.description }),
    badge: product.badge ? t(`prod_${product.id}.badge`, { defaultValue: product.badge }) : null,
    
    // ترجمة الميزات (features) الملحقة بالمنتج تلقائياً
    features: product.features ? product.features.map((feat) => t(`features.${feat.replace(/[^a-zA-Z0-9]/g, '_')}`, { defaultValue: feat })) : []
  }));

  setTranslatedProductsArray(translated);
}, [i18n.language, t]); // يراقب تغير حالة اللغة
const filteredProduct=translatedProductsArray.filter(product=>
    selectedCategory==='all'?true:product.category===selectedCategory
);
return(
    <>
    <AppTemplate >

    <PageContainer>
    <HeroSection>
<Title>our Product</Title>
<Subtitle>
    Explore our range of softwaer,AI tool ,hardweare kits,and Robotics solution bulit for modern 
</Subtitle>
</HeroSection>
        <ContentWrapper>

<FilterBar >

<CategoryButtons>
{categorys.map(category=>(
    <CategoryBtn key={category}
    active ={selectedCategory===category}
    onClick={()=>setSelectedCategory(category)}  >
{t(category)}
    </CategoryBtn>
    ))};


</CategoryButtons>
<ViewActions>
<SortSelect>
 <option >sort:Defult</option>   
 <option >sort:Defult</option>   
 <option >sort:Defult</option>   
</SortSelect>
    <ViewBtn active={viewMode==='grid'} onClick={()=>setViewMode('grid')} >
<IoGridOutline />
        
    </ViewBtn>
     <ViewBtn active={viewMode==='list'} onClick={()=>setViewMode('list')} >
<IoIosList />
        
    </ViewBtn>
</ViewActions>
    </FilterBar>
    <hr></hr>

<ResultsCount>
{filteredProduct.length > 0
 ? `${filteredProduct.length} product found`
 :`product not found`}
</ResultsCount>
{filteredProduct.length===0?(
    <NoResults> no product</NoResults>
):viewMode==='grid' ?(
    <ProductsGridContainer>
        {filteredProduct.map(product=>(
            <ProductCard
            key={product.id}
            viewMode={viewMode}
            product={product}
            onAddCard={addToCard}
            onClick={()=>navigate(`/products/${product.id}`)}
            />
            
        ))}
    </ProductsGridContainer>
):(
    <ProductsListContainer>

     {filteredProduct.map(product=>(
         <ProductCard
         key={product.id}
         viewMode={viewMode}
         product={product}
         onAddCard={addToCard}
         onClick={()=>navigate(`/products/${product.id}`)}
         />
         
        ))}
        </ProductsListContainer>
)}





    </ContentWrapper>
    </PageContainer>
    
    
</AppTemplate>
    
    </>
)
};
export default ProductPage;