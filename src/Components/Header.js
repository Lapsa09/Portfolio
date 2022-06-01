import i18next from "i18next";
import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import TypeWriter from "react-typewriter";
import "../App.css";

const Header = ({ data, lng }) => {
  const { t } = useTranslation("home");
  if (data) {
    var name = data.name;
    var occupation = data.occupation;
    var city = data.address.city;
    var networks = data.social.map(function (network) {
      return (
        <li key={network.name}>
          <a href={network.url}>
            <i className={network.className}></i>
          </a>
        </li>
      );
    });
  }
  useEffect(() => {
    if (localStorage.getItem("i18nextLng")?.length > 2) {
      i18next.changeLanguage("es");
    }
  }, []);

  const handleLanguageChange = (_lng) => {
    i18next.changeLanguage(_lng);
    lng(_lng);
  };

  return (
    <header id="home">
      <nav id="nav-wrap">
        <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
          Show navigation
        </a>
        <a className="mobile-btn" href="#home" title="Hide navigation">
          Hide navigation
        </a>

        <ul id="nav" className="nav">
          <ul className="lng">
            <li onClick={() => handleLanguageChange("es")}>
              <img src="/assets/img/flag_of_spain.svg" />
            </li>
            <li onClick={() => handleLanguageChange("en")}>
              <img src="/assets/img/British_Flag_clip_art.svg" />
            </li>
          </ul>
          <li className="current">
            <a className="smoothscroll" href="#home">
              {t("home")}
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#about">
              {t("about")}
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#portfolio">
              {t("portfolio")}
            </a>
          </li>
        </ul>
      </nav>

      <div className="row banner">
        <div className="banner-text">
          <h1 className="responsive-headline">
            <TypeWriter typing={0.5}>
              {name ? `${t("im")} ${name}.` : null}
            </TypeWriter>
          </h1>
          <h3>
            <span>{occupation}</span>. {`${t("basedIn")} ${city}`}.
          </h3>
          <hr />
          <ul className="social">{networks}</ul>
        </div>
      </div>

      <p className="scrolldown">
        <a className="smoothscroll" href="#about">
          <i className="icon-down-circle"></i>
        </a>
      </p>
    </header>
  );
};

export default Header;
