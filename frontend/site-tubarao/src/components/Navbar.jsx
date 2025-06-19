import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logoTubarao from '../assets/logo-tubarao.svg';

function Navbar() {
  const [open, setOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(false);

  useEffect(() => {
    if (!open) setSubmenuOpen(false); // Fecha o submenu quando o menu principal é fechado
  }, [open]);

  const handleCloseMenus = () => {
    setOpen(false);
    setSubmenuOpen(false);
  };

  return (
    <>
      <style>
        {`
        .navbar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: #222;
          padding: 1rem 2rem;
          color: #fff;
          position: relative;
        }

        .logo-tubarao {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          height: 20px;
        }
        .logo-tubarao img {
          height: 65px;
        }

        .bar {
          height: 4px;
          width: 100%;
          background: #fff;
          border-radius: 2px;
          transition: 0.3s;
        }
        .hamburger.open .bar1 {
          transform: rotate(45deg) translate(12.5px);
        }
        .hamburger.open .bar2 {
          opacity: 0;
        }
        .hamburger.open .bar3 {
          transform: rotate(-45deg) translate(12.5px);
        }

        .header-menu-icon {
          display: none;
          flex-direction: column;
          cursor: pointer;
          width: 30px;
          height: 22px;
          justify-content: space-between;
        }

        .nav-links {
          display: flex;
          gap: 1.5rem;
          list-style: none;
          min-height: 640px;
        }

        .nav-links li {
          position: relative;
        }

        .nav-links li a {
          color: #fff;
          font-size: 1.5rem;
          text-decoration: none;
          font-weight: 500;
          padding: 1rem;
          display: block;
        }

        /* Submenu absoluto */
        .nav-links li.has-submenu .submenu {
          flex-direction: column;
          position: absolute;
          left: 0;
          top: 100%;
          background: #222;
          min-width: 180px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.15);
          z-index: 100;
          opacity: 0;
          max-height: 0;
          overflow: hidden;
          transition: opacity 0.3s ease, max-height 0.3s ease;
          pointer-events: none;          
        }
        .nav-links li.has-submenu.active .submenu {
          opacity: 1;
          max-height: 500px;
          pointer-events: auto;
        }
        .submenu li a {
          font-size: 1.2rem;
          padding: 0.8rem 1.5rem;
          white-space: nowrap;
        }

        /* Hover para desktop */
        @media (min-width: 769px) {
          .nav-links li.has-submenu:hover .submenu {
            opacity: 1;
            max-height: 500px;
            pointer-events: auto;
          }
        }

        @media (max-width: 768px) {
          .hamburger {
            display: flex;
          }

          .nav-links {
            position: absolute;
            top: 50px;
            right: 0;
            background: #222;
            flex-direction: column;
            width: 100%;
            gap: 1rem;
            display: flex;
            opacity: 0;
            max-height: 0;
            overflow: hidden;
            transition: opacity 0.3s ease, max-height 0.3s ease;
            padding: 0;
            text-align: center;
            justify-content: flex-start;
            z-index: 10;
          }

          .nav-links.active {
            opacity: 1;
            max-height: 300px;
            padding: 1rem 0;
          }

          .nav-links li {
            padding: 0.8rem 1.5rem;
          }

          .nav-links li.has-submenu .submenu {
            list-style: none;
            position: absolute;
            left: 50%;
            top: 100%;
            transform: translateX(-50%);
            width: 90vw;
            min-width: 0;
            box-shadow: 0 2px 8px rgba(0,0,0,0.15);
            opacity: 0;
            max-height: 0;
            overflow: hidden;
            transition: opacity 0.3s ease, max-height 0.3s ease;
            pointer-events: none;
          }

          .nav-links li.has-submenu.active .submenu {
            opacity: 1;
            max-height: 500px;
            pointer-events: auto;
          }
        `}
      </style>
      <nav className="navbar">
        <div className="logo-tubarao">
          <img src={logoTubarao} alt="Logo" />
        </div>
        <div
          className={`header-menu-icon hamburger ${open ? "open" : ""}`}
          onClick={() => setOpen(!open)}
        >
          <div className="bar bar1"></div>
          <div className="bar bar2"></div>
          <div className="bar bar3"></div>
        </div>
        <ul className={`nav-links${open ? " active" : ""}`}>
          <li><Link to="/" onClick={handleCloseMenus}>HOME</Link></li>
          <li><Link to="/institutotubarao" onClick={handleCloseMenus}>INSTITUTO</Link></li>
          <li><Link to="/cadastro" onClick={handleCloseMenus}>CADASTRO</Link></li>
          <li
            className={`has-submenu${submenuOpen ? " active" : ""}`}
            onClick={() => setSubmenuOpen((prev) => !prev)}
            style={{ cursor: "pointer", userSelect: "none" }}
          >
            <Link to="/">TUBARÃO</Link>
            <ul className="submenu">
              <li>
                <Link to="/tubarao/historia" onClick={handleCloseMenus}>HISTÓRIA</Link>
              </li>
              <li>
                <Link to="/tubarao/ficha-tecnica" onClick={handleCloseMenus}>FICHA TÉCNICA</Link>
              </li>
            </ul>
          </li>
          <li><Link to="/noticias" onClick={handleCloseMenus}>NOTÍCIAS</Link></li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;