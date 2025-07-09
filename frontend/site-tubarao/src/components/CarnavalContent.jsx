// components/CarnavalContent.jsx
import { useState, useRef, useEffect } from "react";

function CarnavalContent({
  year,
  enredoTitle,
  enredoContent,
  sambaContent,
  sambaVideoUrl,
  desfileContent,
}) {
  const [aba, setAba] = useState("enredo");
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleSelect = (tab) => {
    setAba(tab);
    setOpen(false);
  };

  return (
    <>
      <style>{`
        /* Seus estilos CSS. (Idealmente movido para um arquivo CSS separado) */
        .container {
          max-width: 1200px;
          background: #fff;
          border-radius: 16px;
          min-height: 60vh;
          box-shadow: 0 4px 16px rgba(0,0,0,0.1);
        }

        .negrito {
            margin-bottom: 1rem;
            font-family: "Inter", sans-serif;
            font-weight: bold;
            white-space: pre-wrap; /* Essencial para manter quebras de linha e espaços */
            text-align: center; /* Centraliza o texto do poema */
            padding: 0.5rem 2rem;
        }

        .submenu-dropdown {
            position: relative;
            display: inline-block;
            margin-bottom: 1rem;
        }

        .submenu-toggle {
            font-size: 2rem;
            font-weight: bold;
            color: #222;
            background: none;
            border: none;
            cursor: pointer;
            padding: 0.2em 0.7em;
            transition: color 0.2s;
            border-radius: 8px;
        }

        .submenu-toggle.open,
        .submenu-toggle:focus {
            color: #CB910F;
            outline: none;
        }

        .submenu-list {
            display: ${open ? "block" : "none"};
            position: absolute;
            left: 0;
            top: 110%;
            background: #fff;
            box-shadow: 0 4px 16px rgba(0,0,0,0.18);
            border-radius: 10px;
            min-width: 220px;
            z-index: 10;
            padding: 0.5rem 0;
            overflow: hidden;
        }

        .submenu-list button {
            width: 100%;
            background: none;
            border: none;
            font-size: 1.3rem;
            font-weight: bold;
            color: #222;
            text-align: left;
            padding: 0.7em 1.2em;
            cursor: pointer;
            transition: background 0.2s, color 0.2s;
        }

        .submenu-list button.active,
        .submenu-list button:hover {
            background: #C8910F;
            color: #fff;
        }

        .video-samba {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-top: 3rem;
            margin-bottom: 2rem;
            border-radius: 10px;
        }
        .video-samba iframe {
            border-radius: 5px;
            box-shadow: 0 4px 16px rgba(0,0,0,0.7);
            width: 90%;
            max-width: 800px;
            height: 200px;
        }


        .container h3 {
            margin-bottom: 2.5rem;
            font-size: 1.5rem;
            font-weight: bold;
        }

        .container p {
            margin-bottom: 1rem;
            color: #444;
            text-align: left;
        }

        .samba-enredo {
            white-space: pre-wrap;
            font-family: 'Courier New', monospace;
            background-color: #f8f8f8;
            border: 1px solid #ddd;
            padding: 1.5rem;
            border-radius: 8px;
            margin-top: 1.5rem;
            font-size: 0.95rem;
            line-height: 1.5;
            color: #333;
        }

        .desfile-media {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-top: 2rem;
            margin-bottom: 2rem;
        }

        .desfile-media img {
            max-width: 100%;
            height: auto;
            border-radius: 8px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.2);
        }

        @media (max-width: 600px) {
            .submenu-list button { font-size: 1.2rem; }
            .samba-enredo { font-size: 0.85rem; padding: 1rem; }
        }

        @media (min-width: 768px) {
            .video-samba iframe {
                height: 400px;
            }
            .container {
                padding: 2rem;
            }
            .container p {
                font-size: 1.1rem; /* Aumentei um pouco aqui para melhor leitura */
                text-align: justify;
                line-height: 1.5;
            }
            .negrito {
                font-size: 1rem; /* Aumentei para mobile tbm */
            }
        }

        @media (min-width: 1024px) {
            .submenu-toggle { font-size: 2.5rem; }
            .submenu-list button { font-size: 1.5rem; }
            .video-samba iframe {
                height: 450px;
            }
            .negrito {
                font-size: 1.2rem;
            }
        }
      `}</style>
      <div className="container">
        <h1>Carnaval {year}</h1>
        <hr />
        <br /><br />
        <div className="submenu-dropdown" ref={dropdownRef}>
          <button
            className={`submenu-toggle ${aba === "enredo" ? "active" : ""} ${open ? "open" : ""}`}
            onClick={() => setOpen((o) => !o)}
            aria-haspopup="listbox"
            aria-expanded={open}
            type="button"
          >
            {aba === "enredo"
              ? "ENREDO"
              : aba === "samba"
                ? "SAMBA-ENREDO"
                : "DESFILE"}
            {" "}▼
          </button>
          <div className="submenu-list" role="listbox">
            <button
              className={aba === "enredo" ? "active" : ""}
              onClick={() => handleSelect("enredo")}
              type="button"
            >
              ENREDO
            </button>
            <button
              className={aba === "samba" ? "active" : ""}
              onClick={() => handleSelect("samba")}
              type="button"
            >
              SAMBA-ENREDO
            </button>
            <button
              className={aba === "desfile" ? "active" : ""}
              onClick={() => handleSelect("desfile")}
              type="button"
            >
              DESFILE
            </button>
          </div>
        </div>

        {aba === "enredo" && (
          <>
            <h3>{enredoTitle}</h3>
            {enredoContent.map((item, index) => {
              if (item.startsWith("### ")) { // Se o item começar com '### ', renderiza como h3
                return <h3 key={index}>{item.substring(4)}</h3>;
              }
              if (item.startsWith("negrito:")) { // Se o item começar com 'negrito:', renderiza com <pre className="negrito">
                return <pre key={index} className="negrito">{item.substring(8)}</pre>;
              }
              return <p key={index}>{item}</p>; // Senão, renderiza como parágrafo
            })}
          </>
        )}

        {aba === "samba" && (
          <>
            <pre className="samba-enredo">{sambaContent}</pre>
            {sambaVideoUrl && (
              <div className="video-samba">
                <iframe
                  width="90%"
                  height="200"
                  src={sambaVideoUrl}
                  title={`Samba de ${year}. Tubarão de Mesquita`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
            )}
          </>
        )}

        {aba === "desfile" && (
          <>
            {Array.isArray(desfileContent) ? (
              desfileContent.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))
            ) : (
              <div className="desfile-media">
                {desfileContent}
              </div>
            )}
          </>
        )}
      </div>
    </>
  );
}

export default CarnavalContent;