import i18n from "i18next";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import "./header.css";
import { NavLink } from "react-router-dom";
import Toggle from "../toggle/Toggle";
import imgAvatar from "../../assets/images/avatar.png";
import arFlag from "../../assets/images/eg-flag.jpeg";
import enFlag from "../../assets/images/en-flag.jpeg";
import { AddClassToApp, UpdateBodyDirection } from "../../repeatFunction";
interface Props {
  setIsDark: (value: boolean) => void;
  isDark: boolean;
}
const Header = ({ isDark, setIsDark }: Props) => {
  const [showLinks, setShowLinks] = useState<boolean>(false);
  const [showUserDrop, setShowUserDrop] = useState<boolean>(false);
  const { t } = useTranslation();
  UpdateBodyDirection();
  useEffect(() => {
    AddClassToApp();
  });
  const handleChange = () => {
    setIsDark(!isDark);
  };
  return (
    <header>
      <div className="logo">
        <strong>{t("naguib_store")}</strong>
        <i className="bi bi-pencil"></i>
      </div>
      <div className="links">
        <ul
          style={{
            clipPath: showLinks
              ? "polygon(0 0, 100% 0, 100% 100%, 0 100%)"
              : "",
          }}
        >
          <li>
            <NavLink to="/">
              <i className="bi bi-house"></i>
              {t("home")}
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact">{t("contact us")}</NavLink>
          </li>
          <li>
            <NavLink to="/products">{t("products")}</NavLink>
          </li>
          <li>
            <NavLink to="/admin-dashboard">{t("admin-dashboard")}</NavLink>
          </li>
        </ul>
      </div>
      <div className="navBtns">
        <div className="linkToggle" onClick={() => setShowLinks(!showLinks)}>
          {showLinks ? (
            <i className="bi bi-x"></i>
          ) : (
            <i className="bi bi-list"></i>
          )}
        </div>
        {i18n.language === "en" && (
          <button className="flagBtn" onClick={() => i18n.changeLanguage("ar")}>
            <img src={arFlag} width="30px" alt="ar flag" />
          </button>
        )}
        {i18n.language === "ar" && (
          <button className="flagBtn" onClick={() => i18n.changeLanguage("en")}>
            <img src={enFlag} width="30px" alt="en flag" />
          </button>
        )}
        <div className="userProfile">
          <img
            src={imgAvatar}
            onClick={() => setShowUserDrop(!showUserDrop)}
            alt="avatar"
            width="30px"
          />
          {showUserDrop && (
            <div className="user_dropdown">
              <NavLink to="/profile">
                <i
                  className="bi bi-file-person"
                  style={{ marginLeft: "2px" }}
                ></i>
                Profile
              </NavLink>
              <NavLink to="/logout">
                <i className="bi bi-box-arrow-in-left"></i> Logout
              </NavLink>
            </div>
          )}
        </div>
        <Toggle handleChange={handleChange} isChecked={isDark} />
      </div>
    </header>
  );
};

export default Header;
