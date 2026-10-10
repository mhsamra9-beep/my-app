import React from "react";
import styled from "styled-components"; 
import {Link}  from "react-router-dom";
import {useAppTheme} from "../src/context/themeContext";
import { MdDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./components/language-switcher";

const NavbarContainer = styled.header`
  display: flex;
  justify-content: space-between; 
  align-items: center; 
  background-color: #0a192f; 
  padding: 15px 40px;
  width: 100%;
  box-sizing: border-box;
  font-family: sans-serif;
  position: sticky; 
  top: 0;
  z-index: 1000;
`;

const Logo = styled.div`
  color: white;
  font-size: 22px;
  font-weight: bold;
  letter-spacing: 1px;
`;

const NavLinks = styled.nav`
  display: flex;
  align-items: center;
  position:absolute;
  /* right:px ; */
  gap: 20px; 
  right: 250px;

  a {
    color: #cbd5e1; 
    text-decoration: none;
    font-size: 13px;
    font-weight: 600;
    text-transform: uppercase; 
    transition: color 0.3s ease;

    &:hover {
      color: #10b981; 
    }
  }

  .login-link {
    color: white;
    margin-left: 15px;
    border: 1px solid #10b981;
    padding: 7px 20px ;
    border-radius: 6px;
    /* padding-left: 10px;
    padding-right: 10px; */
    &:hover {
      color: #10b981;
    }
  }

  .register-btn {
    /* background-color: #10b981;  */
    color: white;
    padding: 8px 16px;
    border-radius: 4px;
    font-weight: bold;
    transition: background-color 0.3s ease;
border: 1px solid #10b981;
    &:hover {
      background-color: #059669; 
      color: white;
    }
  }
`;
const ThemeTogglerButtun=styled.button`
  background: transparent;
  border: 1px solid var(--color-border);
  color: white;
padding: 6px 12px;
/* margin: 50px; */
border-radius: var( --border-radius);
cursor: pointer;
font-weight: 600;
font-size: 0.8rem;
transition: all 0.2s ease;
margin-left: 15px;
 &:hover{
  background-color: var(--color-border);
  color: black;
 }




`;
const HeaderWarpper=styled.div`
display: flex;
align-items: center;
`;
const welcomHello=styled.span`
  color: #10b981;
  font-weight: 600;
  padding: 6px 14px;
  border-radius: 8px;
  font-size: 14px;
  margin-left: 15px;
  display: inline-block;


`


const Header = () => {
  const { t } = useTranslation();
  const {theme,toggleTheme}=useAppTheme();
  const {userInfo,isloggedIn}=useSelector((state)=>state.user);
  return (
    <NavbarContainer>
      <HeaderWarpper>

      <Logo>DKUST</Logo>
      <ThemeTogglerButtun onClick={toggleTheme} >
        {theme==='light' ? <MdDarkMode size={20}  /> :<CiLight size={20} />  }
      </ThemeTogglerButtun>
      <LanguageSwitcher/>
      </HeaderWarpper>

      <NavLinks>
        <Link to="/">{t('HOME')}</Link>
        <Link to="/about"> {t('ABOUT')} </Link>
        <Link to="/protfolio">{t('protfolio')}</Link>
        <Link to="/blog">{t('BLOG')}</Link>
        <Link to="/Products">{t('PRODUCTS')}</Link>
        <Link to="/Quiz">{t('QUIZ')}</Link>
        <Link to="/service">{t('service')}</Link>
        <Link to="/content">{t('conteent')}</Link>
        <Link to="/Login" className="login-link">{t('LOGIN')}</Link>
        <Link to="/register" className="register-btn">{t('REGISER')}</Link>
      </NavLinks>
      {isloggedIn&&userInfo&&(
        <span style={{
          color:"#10b981",
          backgroundColor:"white",
          padding:"10px",
  borderRadius: '20px',

        }} >welcome back ,{userInfo.email?.split('@')[0]}</span>

      )}
    </NavbarContainer>
  );
};

export default Header;