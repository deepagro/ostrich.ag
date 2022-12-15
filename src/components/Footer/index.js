import React from "react";
import logo from "../../public/imgs/logos/white.png";

function Footer() {
  return (
    <footer>
      <div className="container">
        <a href="https://deepagro.com" target="_blank">
          <img src={logo} width="150" alt="DeepAgro" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
