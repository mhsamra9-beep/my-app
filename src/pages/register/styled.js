import styled from 'styled-components';
import { Form } from "formik";


export const RegisterPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 70vh;
  background: linear-gradient(180deg, #0a192f 0%, #20427c 100%);
  font-family: sans-serif;
  padding: 40px 20px;
  box-sizing: border-box;
  
`;

export const FormCard = styled.form`
  background: white;
  padding: 40px;
  border-radius: 12px; 
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.05); 
  width: 100%;
  max-width: 550px; 
  box-sizing: border-box;
  border-top: 5px solid #10b981 ;
`;

export const FormTitle = styled.h2`
  text-align: center;
  margin-bottom: 30px;
  color: #1f2937;
  font-size: 24px;
  font-weight: bold;
`;

export const RowContainer = styled.div`
  display: flex;
  gap: 20px; 
  width: 100%;
  margin-bottom: 20px;

  & > div {
    flex: 1; 
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
  margin-bottom: 20px;
  .lab{
    color: #1e293b;
    font-size: 13px;
    font-weight: 600;
  }

  label {
    font-size: 14px;
    color: var(--color-text-muted);
    font-weight: 500;
  }

  input {
    width: 100%;
    padding: 12px;
    border: 1px solid var(--color-border);
    border-radius: 6px;
    font-size: 14px;
    box-sizing: border-box;
    transition: border-color 0.3s;

    &:focus {
      border-color:var(--color-primary); 
      outline: none;
    }
  }
`;

export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 20px 0;
  font-size: 14px;
  color: var(--color-text-muted);

  input {
    cursor: pointer;
    width: 16px;
    height: 16px;
    accent-color: var(--color-primary); 
  }

  label {
    cursor: pointer;
    
    a {
      color: var(--color-primary);
      text-decoration: none;
      font-weight: 600;
    }
  }
`;

export const SubmitButton = styled.button`
  width: 100%;
  background-color: var(--color-primary); 
  color: white;
  padding: 14px;
  border: none;
  border-radius: 6px;
  font-size: 15px;
  font-weight: bold;
  text-transform: uppercase;
  cursor: pointer;
  transition: background-color 0.3s;
  margin-bottom: 20px;

  &:hover {
    background-color: var(--color-primary-hover); 
  }
`;

export const DividerRow = styled.div`
  display: flex;
justify-content: center;
  align-items: center;
  margin: 25px 0;
  color: var(--color-text-muted);
  font-size: 13px;

  
  

  span {
    padding: 0 15px;
  }
`;

export const SocialButtonsContainer = styled.div`
  display: flex;
  gap: 15px;
  width: 100%;
  margin-bottom: 25px;

  a, button {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding: 12px;
    background-color: white;
    color: var(--color-text-muted);
    border: 1px solid var(--color-border);
    border-radius: 6px;
    font-size: 14px;
    font-weight: 500;
    text-decoration: none;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
      background-color: var(--color-bg-light);
    }
  }
`;

export const FooterText = styled.p`
  text-align: center;
  font-size: 14px;
  color: var(--color-text-muted);
  margin: 0;

  a {
    color: var(--color-primary);
    text-decoration: none;
    font-weight: bold;
    
    &:hover {
      text-decoration: underline;
    }
  }
`;
