import { useTranslation } from "react-i18next";
import styled from "styled-components";

const Button=styled.button`
background-color:${props=>props.variant==='primary'?'#28a745':'#EEE'};
color:${props=>props.variant==='primary'?"#eee":"#000"};
padding:10px 20px;
border-color:#28a745;
border-radius:8px;

cursor:pointer;

`;
const CustomButtom=({ color, variant,buttonText,onclickfunction,MdAddShoppingCart})=>{
const {t}=useTranslation();
    return(
        <Button color={color} variant= {variant}   onClick={onclickfunction}
        >
{MdAddShoppingCart && MdAddShoppingCart }
{t(buttonText)}
        </Button>
    );
};
export default CustomButtom;