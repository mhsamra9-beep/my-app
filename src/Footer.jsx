import React, { useState } from "react";
import { useTranslation } from "react-i18next";


import styled from 'styled-components'; 


const FooterContainer = styled.footer`
  background-color: #f8fafc; 
  padding: 40px 50px 20px 50px;
  width: 100%;
  box-sizing: border-box;
  margin-top: auto; 
  border-top: 1px solid #e2e8f0;
  font-family: sans-serif;
  `;

const FooterGrid = styled.div`
display: grid;
grid-template-columns: repeat(3, 1fr); 
gap: 40px;
align-items: start;
`;

const FooterColumn = styled.div`
display: flex;
flex-direction: column;
gap: 12px;

h6 {
    color: #1e293b;
    font-size: 16px;
    font-weight: bold;
    text-transform: uppercase;
    margin: 0 0 10px 0;
    }
    
    p {
        color: #64748b;
        font-size: 14px;
        margin: 0;
        line-height: 1.5;
        }
        
        ul {
            list-style: none; 
            padding: 0;
            margin: 0;
            display: flex;
            flex-direction: column;
            gap: 8px;
            }
            
            a {
                color: #64748b;
                text-decoration: none;
                font-size: 14px;
                transition: color 0.3s;
                
                &:hover {
                    color: #0f172a; 
                    }
                    }
                    
                    
                    .subscri-form {
                        display: flex;
                        gap: 8px;
                        margin-top: 8px;
                        
                        input {
                            padding: 8px 12px;
                            border: 1px solid #cbd5e1;
                            border-radius: 4px;
      font-size: 14px;
      flex: 1;
      }
      
      button {
        background-color: #10b981; 
        color: white;
        border: none;
        padding: 8px 16px;
        border-radius: 4px;
        cursor: pointer;
        font-weight: bold;
        transition: background 0.3s;
        
        &:hover {
            background-color: #059669;
      }
      }
      }
      `;
      
      
      const Footer = () => {
          const {t}=useTranslation();
              const[email,setEmail] = useState('');
              const handlesubscribe = (e) => {
                  e.preventDefault();
              console.log('subscribe Emali:',email);
              alert('thank you for subscribing');
          setEmail('');
            };
            
  return (
    <FooterContainer>
      <FooterGrid>
        
        <FooterColumn>
          <h6>{t('contact ditalis')}</h6>
          <p>123 Business street, New york</p>
          <p>{t('phone')}: 0932385230</p>
          <p>{t('Email')}: mhsamra9@gmail.com</p>
        </FooterColumn>

        <FooterColumn>
          <h6>{t('Quick Links')}</h6>
          <ul>
            <li><a href="#about">{t('ABOUT')}</a></li>
            <li><a href="#service">{t('service')}</a></li>
            <li><a href="#protfolio">{t('protfolio')}</a></li>
            <li><a href="#blog">{t('BLOG')}</a></li>
            <li><a href="#contact us">{t('CONTACT US')}</a></li>
          </ul>
        </FooterColumn>

        <FooterColumn>
          <h6>subcribe to newsleteer</h6>
          <p>get the laste updates and news</p>
          <form onSubmit={handlesubscribe} className="subscri-form">
            <input type="email" placeholder="Email Address" required />
            <button type="submit">{t('subscribe')}</button>
          </form>
        </FooterColumn>

      </FooterGrid>
    </FooterContainer>
  );
};

export default Footer;