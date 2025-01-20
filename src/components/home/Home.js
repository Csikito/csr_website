import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import { Link } from "react-scroll";

function Home({ content }) {
  const [textHun] = useTypewriter({
    words: [
      "Frontend Fejlesztő",
      "Webfejlesztő",
      "Autodidakta Módon Tanult Programozó",
    ],
    loop: true,
    typeSpeed: 40,
    deleteSpeed: 20,
    delaySpeed: 2000,
  });

  const [textEng] = useTypewriter({
    words: [
      "Frontend Developer",
      "Web Developer",
      "Self-taught Frontend Programmer",
    ],
    loop: true,
    typeSpeed: 40,
    deleteSpeed: 20,
    delaySpeed: 2000,
  });

  return (
    <section
      id="home"
      className="w-full px-4 py-36 flex flex-colom mdl:px-6 font-titleFont relative "
    >
      <div className="absolute top-0 left-0 w-full h-full bg-banner bg-cover"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-white dark:bg-bodyColor bg-opacity-90 dark:bg-opacity-95"></div>
      <div className="w-full max-w-screen-xl mx-auto z-10 lgl:w-2/3 ">
        <div className="flex flex-col gap-5">
          <h4 className="text-lg font-normal uppercase">{content.title_h4}</h4>
          <h1 className="text-5xl font-bold dark:text-white text-black ">
            {content.title_h1_1}
            <span className="text-designColor capitalize">
              {" "}
              {content.title_span}
            </span>{" "}
            {content.title_h1_2}
          </h1>

          <h2 className="text-3xl font-bold dark:text-white text-black h-[100px] sml:h-[70px] pt-2">
            {`${content.title_h1_2 ? "" : "a "}`}
            <span className="dark:text-blue-300   text-gray-600">{`${
              content.title_h1_2 ? textHun : textEng
            }`}</span>
            <Cursor cursorStyle="_" cursorColor="#00abf0" />
          </h2>
          <div className="flex flex-col gap-8 pt-16">
            <div className="">
              <p className="text-base font-bodyFont leading-6 tracking-wide mb-1">
                {content.moti_text1}
              </p>
              <p className="text-end text-designColor font-semibold opacity-70">
                / {content.moti_author1} /
              </p>
            </div>
            <div>
              <p className="text-base font-bodyFont leading-6 tracking-wide mb-1">
                {content.moti_text2}
              </p>
              <p className="text-end text-designColor font-semibold opacity-70">
                / {content.moti_author2} /
              </p>
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-base uppercase mb-5 mt-[90px] font-[500]">
            {content.contact}{" "}
            <span className="text-designColor"> {content.contact_span}</span>
          </h2>
          <div className="flex gap-5">
            <a
              href="https://hu.linkedin.com/in/ronald-csikos"
              className="dark:homeIcon homeIcon shadow-lg shadow-blue-500/50 bg-white bg-opacity-20 text-blue-800"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/Csikito"
              className="dark:homeIcon homeIcon shadow-lg shadow-blue-500/50 bg-white bg-opacity-20 text-blue-800"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>
            <Link
              className="dark:homeIcon homeIcon shadow-lg shadow-blue-500/50 bg-white bg-opacity-20 text-blue-800"
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <GrMail />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
