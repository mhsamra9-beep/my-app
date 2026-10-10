// import React, { useState } from "react";
import {
  RegisterPageContainer,
  FormCard,
  FormTitle,
  InputGroup,
  CheckboxContainer,
  SubmitButton,
  DividerRow,
  SocialButtonsContainer,
  FooterText
} from "./styled";
import Header from "../../Header";
import Footer from "../../Footer";
import { type } from "@testing-library/user-event/dist/type";
import registerFiledEnum from "../../constants/registreEnum";
import { Formik, Form, Field, useFormik } from "formik";
import *as Yup from 'yup';
import { Link } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { t } from "i18next";
import AppTemplate from "../../components/app-template";

const registerFiled = [
  { id: 1, name: registerFiledEnum.FIRST_NAME, type: 'text', placeholder: t('enter your first name'), label: t('firstName') },
  { id: 2, name: registerFiledEnum.LAST_NAME, type: 'text', placeholder: t('enter your last name'), label: t('last name') },
  { id: 3, name: registerFiledEnum.EMAIL, type: 'email', placeholder: t('enter yor emial adrres'), label: t('email') },
  { id: 4, name: registerFiledEnum.PASSWOER, type: 'password', placeholder: t('enter your password'), label: t('Password') },
  { id: 5, name: registerFiledEnum.CONFIRM_PASSWOED, type: 'password', placeholder: t('confirm your password'), label: t('confirm password') },
  { id: 6, name: registerFiledEnum.AGREE_TERMS, type: 'checkbox', placeholder: "", label: t("I agree to the terms") },
  
]
const RegisterPage = () => {
  const validationSchema = Yup.object({
    firstName: Yup.string()
    .required('first name required'),
    lastName: Yup.string()
    .required('last name requierd'),
    email: Yup.string()
    .required('email requird')
    .email('email not true'),
    password: Yup.string()
    .required('password required ')
    .min(6,"Password must be at least 6 characters"),
    confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')])
    .required(''),
    // agreeTerms: Yup.boolean()
    //   .oneOf([true]),
  })
  const {t}=useTranslation();



  const formik=useFormik({
      initialValues : {
      // firstName:"",
      // lastName:"",
      // email:'',
      // password:'',
      // confirmPassword:"",
      // agreeTerms:"false",
      [registerFiledEnum.FIRST_NAME]: '',
      [registerFiledEnum.LAST_NAME]: '',
      [registerFiledEnum.EMAIL]: '',
      [registerFiledEnum.PASSWOER]: "",
      [registerFiledEnum.CONFIRM_PASSWOED]: "",
      [registerFiledEnum.AGREE_TERMS]: false
    
    },
      validationSchema:validationSchema,
      onSubmit:(values)=>{
        console.log(values);
    
      }
  })
  


  // const userData = { firstName, lastName, password, email, confirmPassword, agreeTerms };






  const handleGoogleSingUp = () => {
    console.log('sing up whith google');
  };

  const handleFacebookSingUp = () => {
    console.log('sing up whith facebook');
  };


  

  return (
    <AppTemplate>

    <RegisterPageContainer>
      

      
        {/* {({ values, handelChenge, handelBlur, errors, touched }) => ( */}



          <FormCard onSubmit={formik.handleSubmit} >
            <FormTitle>{t('Create Account')}</FormTitle>
            {registerFiled.map((filed) => {
              if (filed.type === 'checkbox') {

                return (
                  <div key={filed.id}>
                    <input type="checkbox"
                      // id={filed.id}
                      name={filed.name}
                      checked={formik.values[filed.name]}
                      onChange={formik.handleChange}
                      // onBlur={formik.handleBlur}

                    />

                    <label htmlFor={filed.name}>
                      {t('I agree to the Terms of Service and Privacy Policy')}
                    </label>

                    {formik.touched[filed.name] && formik.errors[filed.name] && (
                      <div>{formik.errors[filed.name]}</div>
                    )
                    }

                  </div>

                )
              }
              return (
                <InputGroup key={filed.id}>
                  <label className="lab">{filed.label}</label>
                  <input
                    type={filed.type}
                    id={filed.name}
                    placeholder={filed.placeholder}
                    value={formik.values[filed.name]}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    required

                  />
                  {formik.touched[filed.name] && formik.errors[filed.name] && (
                    <div>{formik.errors[filed.name]}</div>
                  )
                  }

                </InputGroup>
              )
            })}

            {/* <CheckboxContainer>
          <input 
          type="checkbox" 
          checked='terms'
            name="terms"
            onChange={HandelChenge}
            required 
            id='terms'
            />
            <label htmlFor="terms">
            I agree to the <a href="#terms">Terms of Service and Privacy Policy</a> */}
            {/* </label>
        </CheckboxContainer> */}

            <SubmitButton type="submit" >{t('CREATE ACCOUNT')}</SubmitButton>

            <DividerRow>
              <span>{t('Or sign up with')}</span>
            </DividerRow>

            <SocialButtonsContainer>
              <button type="button" onClick={handleGoogleSingUp}>
                <FaGoogle color="red" />
                Google

              </button>
              <button type="button" onClick={handleFacebookSingUp}>
               <FaFacebookF color="blue" />
                Facebook
              </button>
            </SocialButtonsContainer>

            <FooterText>
              Already have an account? <Link to="/Login">Sign in</Link>
            </FooterText>
          </FormCard>

        

    </RegisterPageContainer>
    </AppTemplate>
  );
};

export default RegisterPage;