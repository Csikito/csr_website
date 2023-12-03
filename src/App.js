import React, { useState, useEffect } from "react";

import Eng from "./constants/English";
import Hun from "./constants/Hungarian";

import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Project from "./components/project/Project";
import Resume from "./components/resume/Resume";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

function App() {
  const [isEng, setIsEng] = useState(
    localStorage.language === "Eng" ? true : false
  );
  const [language, setLanguage] = useState(
    localStorage.language === "Eng" ? Eng : Hun
  );
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "dark"
  );

  const handleEng = (e) => {
    e.preventDefault();
    setIsEng(true);
  };
  const handleHun = (e) => {
    e.preventDefault();
    setIsEng(false);
  };

  useEffect(() => {
    if (isEng) {
      setLanguage(Eng);
      localStorage.setItem("language", "Eng");
    } else {
      setLanguage(Hun);
      localStorage.setItem("language", "Hun");
    }
  }, [isEng]);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  const handleTheme = (e) => {
    e.preventDefault();
    setTheme((oldTheme) => (oldTheme === "light" ? "dark" : "light"));
  };

  return (
    <div
      className={`w-full h-auto dark:bg-bodyColor dark:text-lightText  bg-gray-100 text-black dark:font-normal`}
    >
      <Navbar
        content={language.nav}
        handleEng={handleEng}
        handleHun={handleHun}
        isEng={isEng}
        handleTheme={handleTheme}
        theme={theme}
      />

      <Home content={language.home} />
      <About content={language.about} />
      <Project content={language.projects} />
      <Resume contents={language.resume} />
      <Contact content={language.contact} />
      <Footer />
    </div>
  );
}

export default App;
