import DarkLight from "../switches/dark-light";

import "./_header.scss";
import { useColorMode } from "@chakra-ui/react";

const Header = () => {
  const { colorMode } = useColorMode();

  window.addEventListener("scroll", () => {
    const nav = document.querySelector("ul");

    nav?.classList.toggle("sticky", window.scrollY > 0);
  });

  return (
    <div className="container">
      <div className="nav">
        <ul
          className={`nav__list ${
            colorMode === "dark" ? "header-dark-bg" : ""
          }`}
          style={{ width: "100%" }}
        >
          <li className="nav__item">
            <a href="#home" className="nav__link">
              Home
            </a>
          </li>
          <li className="nav__item">
            <a href="#about" className="nav__link">
              About
            </a>
          </li>
          <li className="nav__item">
            <a href="#service" className="nav__link">
              Service
            </a>
          </li>
          <li style={{ margin: "0 70px" }} className="nav__item">
            <div className="nav__link">
              <DarkLight />
            </div>
          </li>
          <li className="nav__item">
            <a href="#project" className="nav__link">
              Project
            </a>
          </li>
          <li className="nav__item">
            <a href="#resume" className="nav__link">
              Resume
            </a>
          </li>
          <li className="nav__item">
            <a href="#contact" className="nav__link">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
