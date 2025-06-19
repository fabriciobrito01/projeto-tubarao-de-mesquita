import { useState } from "react";
function Navbar() {
  const [open, setOpen] = useState(false);

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
        
        .logo {
            font-weight: bold;
            font-size: 1.5rem;
            }

            .bar {
              height: 4px;
              width: 100%;
              background: #fff;
              border-radius: 2px;
              transition: 0.3s;
            }
            .hamburger.open .bar1 {
              transform: rotate(45deg) translate(8px);
            }
            .hamburger.open .bar2 {
              opacity: 0;
            }
            .hamburger.open .bar3 {
              transform: rotate(-45deg) translate(8px);
            }
            
        .header-menu-icon {
          display: none;
          flex-direction: column;
          cursor: pointer;
          width: 30px;
          height: 22px;
          justify-content: space-between;
        }

        .header-menu-icon-line {
          display: block;
          height: 4px;
          background: #fff;
          border-radius: 2px;
          transition: 0.3s;
        }

        .nav-links {
          display: flex;
          gap: 1.5rem;
          list-style: none;
        }

        .nav-links li a {
          color: #fff;
          text-decoration: none;
          font-weight: 500;
        }

        @media (max-width: 768px) {
          .hamburger {
            display: flex;
          }
          .nav-links {
            position: absolute;
            top: 60px;
            right: 0;
            background: #222;
            flex-direction: column;
            width: 180px;
            gap: 0;
            display: none;
            padding: 1rem 0;
            border-radius: 0 0 8px 8px;
          }

          .nav-links.active {
            display: flex;
          }

          .nav-links li {
            padding: 0.8rem 1.5rem;
          }
        }
        `}
      </style>
      <nav className="navbar">
        <div className="logo">MeuLogo</div>
        <div
          className={`header-menu-icon hamburger ${open ? "open" : ""}`}
          onClick={() => setOpen(!open)}
        >
          <div className="bar bar1"></div>
          <div className="bar bar2"></div>
          <div className="bar bar3"></div>
        </div>
        <ul className={`nav-links ${open ? "active" : ""}`}>
          <li><a href="/">Home</a></li>
          <li><a href="/sobre">Sobre</a></li>
          <li><a href="/contato">Contato</a></li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;