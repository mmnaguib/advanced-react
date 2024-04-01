import i18n from "i18next";
import cookies from 'js-cookie';
import { useEffect, useState } from "react";
import  './TranslationUtil';
import './App.css';
import Header from "./component/header/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./component/home/Home";
import useLocalStorage from 'use-local-storage';
const App = () => {
  const lng = cookies.get('i18next') || 'en'
  useEffect(()=> {
    document.body.lang = i18n.language;
    document.body.dir = i18n.dir();
  }, [lng])
  const [isDark, setIsDark] = useLocalStorage("isDark",false);
  const GetPrefferedCultureFromLocalStorage = (): string => {
    var PreferedCulture = localStorage.getItem("PreferedCulture");
    return String(PreferedCulture);
};
const [prefferedCulture, setPrefferedCulture] = useState<string>("ar");
const culture = GetPrefferedCultureFromLocalStorage();
if (culture) {
  if (culture.includes("ar")) {
    i18n.changeLanguage("ar");
    setPrefferedCulture("ar");
  }
  if (culture.includes("en")) {
    i18n.changeLanguage("en");
    setPrefferedCulture("en");
  }
}
  return (
    <BrowserRouter>
      <div className= 'app' data-theme={isDark ? "dark" : "light"}>
        <Header isDark={isDark} setIsDark={setIsDark}/>
        <Routes>
          <Route index path="/" element={<Home />}/>
        </Routes>
      </div>
    </BrowserRouter>
    
  );
}

export default App;