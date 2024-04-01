import i18n from "i18next";
import { useEffect } from "react";
import cookies from 'js-cookie';
import { useTranslation } from "react-i18next";
import './header.css';
import { NavLink } from "react-router-dom";
import Toggle from "../toggle/Toggle";
interface Props{
  setIsDark: (value: boolean) => void;
  isDark: boolean
}
const Header = ({isDark, setIsDark}: Props) => {
    const { t } = useTranslation();
    const lng = cookies.get('i18next') || 'en';
    useEffect(()=> {
      document.body.lang = i18n.language;
      document.body.dir = i18n.dir();
    }, [lng])
    const handleChange = () => {
      setIsDark(!isDark)
    }
  return (
    <header>
        <div className = 'logo'>
        <strong>{t('naguib_store')}</strong>
        <i className="bi bi-pencil"></i>
        </div>
        <div className = "links">
          <ul>
            
            <li><NavLink to='/'>{t('home')}</NavLink></li>
            <li><NavLink to='/contact'>{t('contact us')}</NavLink></li>
            <li><NavLink to='/products'>{t('products')}</NavLink></li>
            <li><NavLink to='/admin-dashboard'>{t('admin-dashboard')}</NavLink></li>
          </ul>
        </div>
        <div className='navBtns'>
          {i18n.language === 'en' && <button onClick={() => i18n.changeLanguage('ar')}>Ar</button>}
          {i18n.language === 'ar' && <button onClick={() => i18n.changeLanguage('en')}>En</button>}
          <Toggle handleChange={handleChange} isChecked={isDark} />
          <button>{t('logout')}</button>

        </div>
        
    </header>
  )
}

export default Header