import { useEffect } from "react";
import i18n from "i18next";

export function AddClassToApp() {
  if (String(localStorage.getItem("i18nextLng")) === "ar") {
    document.querySelector(".app")?.classList.add("rtl");
    document.querySelector(".app")?.classList.remove("ltr");
  } else {
    document.querySelector(".app")?.classList.add("ltr");
    document.querySelector(".app")?.classList.remove("rtl");
  }
}

export function UpdateBodyDirection() {
  const lng = localStorage.getItem("i18nextLng") || "en";
  useEffect(() => {
    document.body.lang = i18n.language;
    document.body.dir = i18n.dir();
  }, [lng]);
}
