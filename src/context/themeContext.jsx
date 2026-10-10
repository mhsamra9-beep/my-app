import { createContext, useContext, useEffect, useState } from "react";
const ThemeContext=createContext();
 export  const ThemeProvider =({children})=>{
    const [theme,setTheme]=useState(()=>{
    return localStorage.getItem('app-theme')|| 'light';
});
useEffect(()=>{
    document.body.setAttribute('data-theme',theme);
    localStorage.setItem('app-theme',theme);

},[theme]);
const toggleTheme=()=>{
setTheme((p)=>(p==='light'?'dark':'light' ));
}

return(
    <ThemeContext.Provider value={{theme,toggleTheme}}>
        {children}
    </ThemeContext.Provider>
);

};
export  const useAppTheme=()=>useContext(ThemeContext);

