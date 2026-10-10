import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { FiMail, FiLock, FiEyeOff, FiEye } from "react-icons/fi";
import { FaGoogle, FaFacebookF } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";


import {
  LoginPageContiner,
  FormCardLogin,
  FormTitleLogin,
  SubTitelLogin,
  InputGroupLogin,
  ForgetPasswordLink,
  RememberContainer,
  SubmitButtonLogin,
  DividerRow,
  SocialLoginContainer,
  FooterTextLogin,
  BackToHomeLink,
  WelcomText
} from "./styled";
import { useDispatch } from "react-redux";
import { LoginSuccces } from "../../redux/userSlice";
import environment from "../../environment";
import { useTranslation } from "react-i18next";
import AppTemplate from "../../components/app-template";

const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch=useDispatch();
  const {t}=useTranslation();

const[showPassword,setShowPassword]=useState(false);
const[welcomMessage,setWelcomMessage]=useState();

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email address is required"),
      password: Yup.string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters")
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      rememberMe: false
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log("Formik Submitted Data:", values);
      dispatch(LoginSuccces({email:values.email}));
      setWelcomMessage(`welcom back,${values.email}`);
      // Cookies.set(environment.TOKEN_KEY,'mock-jwy-token-xyz',{expires:7});
      formik.resetForm();
      setTimeout(()=>navigate('/Products'),3000);

    }
  });

  return (
    <AppTemplate showNavbar={true}
    showFooter={false}>

    <LoginPageContiner>
      <FormCardLogin onSubmit={formik.handleSubmit}>
        <FormTitleLogin>{t('Welcome Back')}</FormTitleLogin>
        <SubTitelLogin>{t('Sign in to your DKUST account')}</SubTitelLogin>
{/* {welcomMessage&& (
  <WelcomText >{welcomMessage}</WelcomText>
)} */}
        <InputGroupLogin>
          <label htmlFor="email">{t('Email Address')}</label>
          <div style={{ position: "relative" }}>
            <FiMail style={{ position: "absolute", left: "12px", top: "50%", transform: "translateY(-50%)", color: "#94a3b8" }} />
            <input
              id="email"
              type="email"
              name="email"
              placeholder={t("you@example.com")}
              style={{ paddingLeft: "38px" }} 
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </div>
          {formik.touched.email && formik.errors.email && (
            <div className="error-message">{t(formik.errors.email)}</div>
          )}
        </InputGroupLogin>

        <InputGroupLogin>
          <ForgetPasswordLink onClick={() => console.log("Redirect to forgot password")}>
            {t('Forgot password?')}
          </ForgetPasswordLink>
          <label htmlFor="password">{t('Password')}</label>
          <div style={{ position: "relative" }}>
            <FiLock style={{ position: "absolute", left: "12px", top: "50%", transform: "translateY(-50%)", color: "#94a3b8" }} />
            <input
              id="password"
              type="password"
              name="password"
              placeholder="Enter your password"
              style={{ paddingLeft: "38px", paddingRight: "38px" }}
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <span onClick={()=>setShowPassword(!showPassword)}
              
             style={{ position: "absolute", right: "12px", top: "50%", transform: "translateY(-50%)", color: "#94a3b8", cursor: "pointer" }} 
              >
                {showPassword ?<FiEye style={{color:"#94a3b8"}}/>:<FiEyeOff style={{color:'#94a3b8'}} />}
            </span>
          </div>
          {formik.touched.password && formik.errors.password && (
            <div className="error-message">{t(formik.errors.password)}</div>
          )}
        </InputGroupLogin>

        <RememberContainer>
          <div className="remember-me">
            <input
              id="rememberMe"
              type="checkbox"
              name="rememberMe"
              checked={formik.values.rememberMe}
              onChange={formik.handleChange}
            />
            <label htmlFor="rememberMe">{t('Remember me')}</label>
          </div>
        </RememberContainer>

        <SubmitButtonLogin type="submit">{t('SIGN IN')}</SubmitButtonLogin>

        <DividerRow>{t('or continue with')}</DividerRow>

        <SocialLoginContainer>
          <button type="button" className="social-btn" onClick={() => console.log("Google Login")}>
            <FaGoogle style={{ marginRight: "8px", color: "#db4437" }} /> {t('Google')}
          </button>
          <button type="button" className="social-btn" onClick={() => console.log("Facebook Login")}>
            <FaFacebookF style={{ marginRight: "8px", color: "#4267b2" }} /> {t('Facebook')}
          </button>
        </SocialLoginContainer>

        <FooterTextLogin>
          {t('Dont have an account?')} <Link to="/src/pages/register/index.jsx">{t('Sign up')}</Link>
        </FooterTextLogin>
      </FormCardLogin>

      <BackToHomeLink onClick={() => navigate("/")}>
        {t('Back to Home')}
      </BackToHomeLink>
    </LoginPageContiner>
    </AppTemplate>
  );
};

export default LoginForm;