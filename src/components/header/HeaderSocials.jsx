import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub, FaSquareXTwitter } from "react-icons/fa6";

const HeaderSocials = () => {
  return (
    <div className="header_socials">
      <a
        href="https://www.linkedin.com/in/akshay-chavan23/"
        target="_blank"
        rel="noreferrer"
        aria-label="LinkedIn"
      >
        <FaLinkedin />
      </a>

      <a
        href="https://github.com/akshaychavan23031998"
        target="_blank"
        rel="noreferrer"
        aria-label="GitHub"
      >
        <FaGithub />
      </a>

      <a
        href="https://twitter.com/AkshayC23480775"
        target="_blank"
        rel="noreferrer"
        aria-label="Twitter"
      >
        <FaSquareXTwitter />
      </a>
    </div>
  );
};

export default HeaderSocials;
