import styled from "styled-components";

export const LoginPageContiner = styled.div`
  background: linear-gradient(180deg, #0a192f 0%, #20427c 100%);
  font-family: var(--primary-font, sans-serif);
  
  flex: 1; 
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  padding: 60px 20px; 
  box-sizing: border-box;
  min-height: calc(100vh - 150px); 
`;

export const FormCardLogin = styled.form`
  background: white;
  width: 100%;
  max-width: 420px;
  padding: 40px 30px;
  border-radius: 12px;
  border-top: 4px solid var(--color-primary, #10b981); 
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
  box-sizing: border-box;

  @media (max-width: 480px) {
    padding: 30px 20px;
  }
`;

export const FormTitleLogin = styled.h2`
  color: #1e293b;
  font-size: 26px;
  font-weight: 700;
  margin: 0 0 6px 0;
  text-align: center;
`;

export const SubTitelLogin = styled.p`
  color: #64748b;
  font-size: 13px;
  margin: 0 0 25px 0;
  text-align: center;
`;

export const InputGroupLogin = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-bottom: 18px;
  position: relative;

  label {
    color: #1e293b;
    font-size: 13px;
    font-weight: 600;
  }

  input {
    padding: 10px 14px;
    border: 1px solid #cbd5e1;
    border-radius: 6px;
    font-size: 14px;
    outline: none;
    transition: all 0.3s;
    width: 100%;
    box-sizing: border-box;

    &:focus {
      border-color: var(--color-primary, #10b981);
      box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.1);
    }
  }

  .error-message {
    color: #ef4444;
    font-size: 12px;
    margin-top: 4px;
  }
`;

export const ForgetPasswordLink = styled.span`
  position: absolute;
  right: 0;
  top: 0;
  color: var(--color-primary, #10b981);
  font-size: 12px;
  font-weight: 500;
  cursor: pointer;

  &:hover {
    color: var(--color-primary-hover, #059669);
    text-decoration: underline;
  }
`;

export const RememberContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;

  .remember-me {
    display: flex;
    align-items: center;
    gap: 8px;
    cursor: pointer;

    input {
      accent-color: var(--color-primary, #10b981);
      cursor: pointer;
      width: 15px;
      height: 15px;
    }

    label {
      color: #64748b;
      font-size: 13px;
      cursor: pointer;
      user-select: none;
    }
  }
`;

export const SubmitButtonLogin = styled.button`
  background-color: var(--color-primary, #10b981);
  color: white;
  border: none;
  width: 100%;
  padding: 12px;
  border-radius: 6px;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s;
  margin-bottom: 20px;

  &:hover {
    background-color: var(--color-primary-hover, #059669);
  }
`;

export const DividerRow = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  color: #94a3b8;
  font-size: 12px;
  margin-bottom: 20px;

  &::before,
  &::after {
    flex: 1;
    border-bottom: 1px solid #e2e8f0;
  }

  
  
`;

export const SocialLoginContainer = styled.div`
  display: flex;
  gap: 12px;
  margin-bottom: 20px;

  @media (max-width: 360px) {
    flex-direction: column;
  }

  .social-btn {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    background: white;
    border: 1px solid #e2e8f0;
    border-radius: 6px;
    font-size: 13px;
    font-weight: 600;
    color: #334155;
    cursor: pointer;
    transition: background-color 0.2s;

    &:hover {
      background-color: #f8fafc;
    }
  }
`;

export const FooterTextLogin = styled.p`
  color: #64748b;
  font-size: 13px;
  text-align: center;
  margin: 0 0 20px 0;

  a {
    color: var(--color-primary, #10b981);
    font-weight: 600;
    text-decoration: none;
    margin-left: 4px;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const BackToHomeLink = styled.div`
  color: #94a3b8;
  font-size: 13px;
  margin-top: 15px;
  cursor: pointer;
  transition: color 0.2s;

  &:hover {
    color: white;
    text-decoration: underline;
  }
`;
 export const WelcomText=styled.div`

padding: 12px;
margin-bottom: 20px;
background-color: #d1fae5;
color: #065f46;
border-radius: 6px;
text-align: center;
font-weight: 500;
`;
export const eyePassword=styled.span`
position: absolute;
right: 12px;
top: 50%;
transform: translateY(-50%);
cursor: pointer;
display: flex;

`;
export const FiEye=styled.span`
`;