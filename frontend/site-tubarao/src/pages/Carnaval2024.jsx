import { useState, useRef, useEffect } from "react";

function Carnaval2024() {
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
            p {
                text-align: justify;
                text-indent: 2em;
                margin-bottom: 0rem;
                margin-top: 0rem;
            }

            .samba-enredo {
                font-size: 0.65rem;
            }
            .negrito {
                font-size: 0.8rem;
                margin-top: 2rem;
                margin-bottom: 2rem;
                font-weight: bold;
                white-space: pre-wrap;
                }
            .submenu-dropdown {
                position: relative;
                display: inline-block;
                margin-bottom: 2rem;
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
            }
            @media (max-width: 600px) {
                .submenu-toggle { font-size: 1.2rem; }
                .submenu-list button { font-size: 1rem; }
                }
        `}
        </style>
        <div className="container">
            <h1>Carnaval 2024</h1>
            <hr />
            <br /><br />
            <div className="submenu-dropdown" ref={dropdownRef}>
                <button
                    className={`submenu-toggle ${open ? "open" : ""}`}
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

                <h3>A água de nossos rios desagua num rio maior</h3>

                <p>
                  Água, substância essencial para a vida humana, não só biológica, mas também social.
                </p>
                <p>
                  Está por toda parte. Compõe os oceanos, mares, rios riachos, nascentes, poços. É a parte da seiva das plantas, do líquido dos frutos, de nosso sangue e suor. Como vapor, espalha-se na atmosfera e gera nuvens, granizo, geleira. Por ser a única substância que pode ser encontrada na natureza nos estados líquido, sólido e gasoso, isso faz dela também uma substância única no Planeta.
                </p>
                <p>
                  Tanto as águas marinhas (oceanos e mares) e as continentais (rios, lagos e geleiras) são importantes para a sobrevivência da vida na Terra.
                </p>
                <p>
                  Próximo a rios e mares muitas cidades foram erguidas. Rios foram responsáveis pela construção e desenvolvimento das primeiras civilizações que marcaram o mundo. A proximidade com os rios possibilitava o encontro com áreas extremamente férteis, o que atendia às necessidades daqueles que buscavam um lugar para fincar raízes, aproveitando o curso da água e seguindo o curso da vida.
                </p>
                <p>
                  Esse precioso líquido, de valor social, cultural e ambiental tem seu uso intensificado com a urbanização, aumento da população e a industrialização, sobretudo a partir do Século XVIII com a primeira Revolução Industrial que simboliza um novo patamar alcançado no desenvolvimento da civilização humana. É nesse momento que esse líquido tão importante para a vida passa a ser chamado “recurso hídrico”.
                </p>
                <p>
                  É desse líquido precioso e dos nossos rios que tanto nos alimentam, encantam e orgulham pela capacidade de levar em seu leito, ao outro, o bem maior, a água, que nós da Baixada Fluminense, da Tubarão de Mesquita queremos falar, cantar, porque fazem parte de nós.
                </p>
                <p>
                  Rios que desde tempos idos, dividem generosamente suas águas com o “irmão maior” – o Rio de Janeiro, mesmo correndo o risco de provocar carência entre seus não menos importantes irmãos baixadenses.
                </p>
                <p>
                  Contar a história, falar dos caminhos e descaminhos dos nossos rios, da nossa água, não só a que chega até as nossas torneiras, ou não, mas também da água e seus simbolismos, da água que está presente em todas as fases da humanidade, da água que precisamos cuidar, preservar para não faltar, pelo bem de todos nós é mostrar que a Baixada Fluminense fez e faz história, tem vida e qualidade.
                </p>

                <br /><br /><br />

                </>
            )}  

        {aba === "samba" && (
          <>
            <pre className="samba-enredo">{`
  OS RIOS VÃO DE VENCIDA;
  AS PEDRAS FICAM NO FUNDO.
  A ÁGUA É QUE MOVE ESSA VIDA;
  A VIDA É QUE MOVE ESSE MUNDO.
  DESDE A GOTA QUE BATIZA ATÉ A LAGRIMA DO FIM,
  A GENTE SE REALIZA ENTRE O QUE É BOM E É RUIM.
  CHORO DE TEIMA É PIRRAÇA, CAMA DE ORVALHO É CHAPÉU,
  ÁGUA QUE QUEIMA É CACHAÇA, CHUVA QUE CAI VEM DO CÉU.
                                              (Ô, BÊNÇAO)

  BÊNÇÃO QUE JORRA DA BICA,   (
  DAS MÃOS DE IARA E DE OXUM, ( (OXUM)
  QUE OXALÁ PURIFICA          (
  É NOSSO BEM MAIS COMUM.     (BIS

  AS NOSSAS VIDAS E VILAS, NEM SEMPRE TRANQUILAS,
  CRESCERAM AO REDOR
  DOS CURSOS DE UMA NASCENTE
  QUE PUXA A CORRENTE DE UM RIO MAIOR.
  SE A MEMÓRIA NÃO ME ESCAPA, NAS ONDAS QUE VÃO E QUE VÊM,
  ATÉ OS ARCOS DA LAPA ROLARAM ÁGUA TAMBÉM.
  NO TEMPO DO IMPERADOR,
  HOUVE ALGUEM QUE LANCOU O MAIOR DESAFIO.
  A ENGENHARIA PROPÔS E DEPOIS CONSTRUIU O SONHADO DESVIO.
  E A CADA NOVO PODER, FOI SE ALARGANDO O FAVOR,
  QUE FEZ O POVO SOFRER, QUASE MORRER DE CALOR.

  SÁBIO É QUEM ACREDITA      (
  NO QUE É MELHOR PARA SI.   (
  SOU TUBARÃO DE MESQUITA:   (
  O MEU LUGAR É AQUI.        (BIS
                `}</pre>

                <div className="video-samba">
                    <iframe width="90%" height="200" src="https://www.youtube.com/embed/w1vEIsmmWOM" title="Enredo 2024: &quot;A água de nossos rios deságua num rio maior&quot; - Clipe oficial do samba enredo!" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>

          </>
        )}

        {aba === "desfile" && (
          <>

          </>
        )}

        </div>
        </>
  );
}
export default Carnaval2024;
