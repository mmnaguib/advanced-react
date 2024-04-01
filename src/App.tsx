import "./TranslationUtil";
import "./App.css";
import Header from "./component/header/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./component/home/Home";
import useLocalStorage from "use-local-storage";
import { UpdateBodyDirection } from "./repeatFunction";
const App = () => {
  UpdateBodyDirection();
  const [isDark, setIsDark] = useLocalStorage("isDark", false);
  return (
    <BrowserRouter>
      <div className="app" data-theme={isDark ? "dark" : "light"}>
        <Header isDark={isDark} setIsDark={setIsDark} />
        <Routes>
          <Route index path="/" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
