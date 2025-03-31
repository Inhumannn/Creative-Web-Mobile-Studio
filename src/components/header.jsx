import { Menu } from "lucide-react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="max-w-[1120px] m-auto flex justify-between items-center py-[50px]">
      <a href="index.html">
        <img src="img/logo.svg" alt="Logo de la marque" className="w-[36px]" />
      </a>
      <nav className="flex gap-[5px]">
        <ul
          className={`${
            isMenuOpen ? "block" : "hidden"
          } sm:flex gap-[50px] text-end`}
        >
          <li>
            <NavLink to="/" className="text-[#777] text-[16px]">
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink to="/ourstudio" className="text-[#777] text-[16px]">
              Our Studio
            </NavLink>
          </li>
          <li>
            <NavLink to="/blog" className="text-[#777] text-[16px]">
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className="text-[#777] text-[16px]">
              Contact
            </NavLink>
          </li>
        </ul>
        <Menu
          className="sm:hidden block text-[#777] text-[24px]"
          onClick={toggleMenu}
        />
      </nav>
    </header>
  );
}

export default Header;
