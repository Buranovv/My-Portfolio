import { useContext } from "react";

import { ThemeContext } from "../context/theme/ThemeContext";
import DarkLight from "../switches/dark-light";

import "./_header.scss";

const Header = () => {
  const state = useContext(ThemeContext);
  console.log(state);

  window.addEventListener("scroll", () => {
    const nav = document.querySelector("ul");

    nav?.classList.toggle("sticky", window.scrollY > 0);
  });

  return (
    <div className="nav">
      <div className="container">
        <ul className="nav__list">
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
          <li className="nav__item">
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
