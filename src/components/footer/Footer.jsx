import React from "react";
import "./footer1.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">NickRudoy</h1>
        <p>Frontend Developer</p>

        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>
          <li>
            <a href="#portfolio" className="footer__link">
              Projects
            </a>
          </li>
          <li>
            <a href="#testimonials" className="footer__link">
              Testimonials
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <a
            href="https://www.instagram.com/"
            className="footer__social-link"
            target="_blank"
            rel="noreferrer"
          >
            <i className="uil uil-telegram"></i>
          </a>

          <a
            href="https://dribbble.com/"
            className="footer__social-link"
            target="_blank"
            rel="noreferrer"
          >
            <i className="uil uil-dribbble"></i>
          </a>

          <a
            href="https://github.com/NickRudoy"
            className="footer__social-link"
            target="_blank"
            rel="noreferrer"
          >
            <i className="uil uil-github-alt"></i>
          </a>
        </div>

        <span className="footer__copy">
          &#169; NickRudoy. All rigths reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;
