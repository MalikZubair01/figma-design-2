import React from "react";
import logo from "../Assets/Header/logo.jpg";

function Header() {
  return (
    <div className="h-[80px] flex items-center justify-between text-[#FFFFFF] w-[89%] mx-auto flex-wrap">
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="mr-4" />
        <ul className="hidden md:flex space-x-4">
          <li className="hover:text-[#2196F3] text-[#212121] font-roboto">
            <a href="/#">Студия</a>
          </li>
          <li className="hover:text-[#2196F3] text-[#212121] font-roboto">
            <a href="/portfolio">Портфолио</a>
          </li>
          <li className="hover:text-[#2196F3] text-[#212121] font-roboto">
            <a href="/contacts">Контакты</a>
          </li>
        </ul>
      </div>
      <ul className="hidden md:flex space-x-4">
        <li className="hover:text-[#2196F3] text-[#212121] font-roboto">
          <a href="mailto:info@devstudio.com">info@devstudio.com</a>
        </li>
        <li className="hover:text-[#2196F3] text-[#212121] font-roboto">
          <a href="tel:+380961111111">+38 096 111 11 11</a>
        </li>
      </ul>
    </div>
  );
}

export default Header;
