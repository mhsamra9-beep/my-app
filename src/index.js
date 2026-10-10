import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './assets/styles/index.css'
import { ThemeProvider } from './context/themeContext'
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { I18nextProvider, initReactI18next, useTranslation } from 'react-i18next';
import { resources } from "./assets/locals";
import Cookies from "js-cookie";

import i18next from 'i18next';
import environment from './environment';
i18next.use(initReactI18next).init({
  interpolation: { escapeValue: false },
  lng:Cookies.get('locallang') ||localStorage.getItem(environment.lang) || "ar",
  resources,
});
const MainApp=()=>{
const {i18n}=useTranslation();
return(
  <React.StrictMode>
    <ThemeProvider>
      <Provider store={store}>
        <I18nextProvider>

<div dir={i18n.language==='ar'?"rtl":"ltr"} >
  

    <App />
</div>

        </I18nextProvider>
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);
};
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MainApp/>)

