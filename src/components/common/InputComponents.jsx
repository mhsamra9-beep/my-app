import { type } from "@testing-library/user-event/dist/type";
import { useTranslation } from "react-i18next";
import styled from "styled-components";

const InputContiner =styled.div`
margin:10px 0;

`;
const InputFiled= styled.input`
padding:10;
border:1px solid #333;
border-radius:4px;
width:100%;

`;
const InputComponents=({fieldlabel,fieldvalue,onchangeFuction,placeholder,type})=>{
    const {t}=useTranslation();
    return(
        <InputContiner>
        <label>{t(fieldlabel)}</label>
        <InputFiled type={type}
        value={fieldvalue}
        onChange={onchangeFuction}
        placeholder={placeholder}
         />
        
        
        </InputContiner>
    );
};
export default InputComponents;