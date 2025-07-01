import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logoTubarao from '../assets/logo-tubarao.svg';

function Navbar() {
  const [open, setOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const isMobile = window.innerWidth < 769;

  useEffect(() => {
    if (!open) setSubmenuOpen(false);
  }, [open]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
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
          color: #000;
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          transition: box-shadow 0.3s;
          box-shadow: none;
        }
        .navbar.scrolled {
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.62);
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
          height: 0;
        }

        .nav-links li {
          font-family: "Lexend", sans-serif;
          position: relative;
        }

        .nav-links li a {
          color: #fff;
          font-size: 1.5rem;
          text-decoration: none;
          font-weight: 400;
          padding: 1rem;
          allign-items: center;
        }

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
            position: fixed;
            top: 50px;
            left: 0;
            width: 100vw;
            height: 100vh;
            background: #222;
            flex-direction: column;
            gap: 1rem;
            display: flex;
            opacity: 0;
            max-height: 0;
            overflow: hidden;
            transition: opacity 0.3s ease, max-height 0.3s ease;
            padding: 0;
            text-align: center;
            justify-content: flex-start;
            z-index: 2000;
            pointer-events: none;
          }

          .nav-links.active {
            opacity: 1;
            height: 600px;
            max-height: 100vh;
            padding: 1rem 0;
            pointer-events: auto;
            overflow-y: auto;
          }

          .nav-links li {
            padding: 0.8rem 1.5rem;
          }

          .nav-links li.has-submenu .submenu {
            position: static;
            left: auto;
            top: auto;
            transform: none;
            width: 100%;
            min-width: 0;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.50);
            background: rgba(34,34,34,0.95);
            opacity: 0;
            border-radius: 10px;
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
        }

        @media (min-width: 1024px) {
          .navbar {
            padding: 1.8rem 3rem 2rem 0;
          }
          .nav-links {
            gap: 2.5rem;
          }
          .nav-links li a {
            font-size: 1.25rem;
            padding: 0.5rem 0;
            display: inline-block;
          }
          .logo-tubarao img {
            height: 120px;
            width: auto;
          }
          .nav-links {
            position: static;
            flex-direction: row;
            height: auto;
            max-height: none;
            opacity: 1;
            pointer-events: auto;
            overflow: visible;
            justify-content: flex-end;
          }
          .nav-links li.has-submenu .submenu {
            list-style: none;
            position: absolute;
            top: 100%;
            left: 0;
            padding: 0.5rem 1rem;
            border-radius: 0 0 10px 10px;
            min-width: 180px;
            background: #222;
            opacity: 0;
            max-height: 0;
            overflow: hidden;
            pointer-events: none;
            transition: opacity 0.3s ease, max-height 0.3s ease;
          }
          .nav-links li.has-submenu:hover .submenu {
            opacity: 1;
            max-height: 500px;
            pointer-events: auto;
          }
        }
      `}
      </style>
      <nav className={`navbar${scrolled ? " scrolled" : ""}`}>
        <div className="logo-tubarao">
          <Link to="/" onClick={handleCloseMenus}>
            <img src={logoTubarao} alt="Logo" />
          </Link>
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
            onClick={isMobile ? () => setSubmenuOpen((prev) => !prev) : undefined}
            style={{ cursor: "pointer", userSelect: "none" }}
          >
            <Link>TUBARÃO</Link>
            <ul className="submenu">
              <li>
                <Link to="/tubarao/historia" onClick={handleCloseMenus}>HISTÓRIA</Link>
              </li>
              <li>
                <Link to="/tubarao/fichatecnica" onClick={handleCloseMenus}>FICHA TÉCNICA</Link>
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