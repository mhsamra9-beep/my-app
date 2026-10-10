import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux"

const Appprovider=({children})=>{
const dispatch=useDispatch();
const {i18n}=useTranslation();
useEffect(() => {
    const dir = i18n.language === "ar" ? "rtl" : "ltr";
    document.documentElement.setAttribute("dir", dir);
    document.documentElement.setAttribute("lang", i18n.language);
  }, [i18n.language]);
  return<>
 {children}
  </>
};
export default Appprovider;
