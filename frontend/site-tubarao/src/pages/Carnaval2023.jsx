import { useState, useRef, useEffect } from "react";

function Carnaval2023() {
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
            <h1>Carnaval 2023</h1>
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

                <h3>Levante Baixada! Samba sua arte!</h3>

                <p>
                    A história da Baixada Fluminense pode ser contada desde a presença dos índios na região ou da formação das freguesias.
                </p>
                <p>
                    Porém, como marco inicial da Baixada colocamos, aqui, a manhã do dia 30 de abril de 1854, quando na antiga freguesia de Nossa Senhora da Guia de Pacobaíba, atual Magé, foi que o apito da locomotiva “ Baronesa” soou pela primeira vez.
                </p>
                <p>
                    Estava inaugurada a 1ª estrada de ferro do Brasil por Irineu Evangelista de Souza, o Barão de Mauá, com a ilustre presença de D. Pedro II.
                </p>
                <p>
                    A chegada dos trens mudou o perfil da região, antes voltada para o transporte fluvial e os portos. A ferrovia se tornou o símbolo das mudanças urbanas e econômicas.
                </p>
                <p>
                    E assim, nos trilhos da história a Baixada se fez, perfumada pelos laranjais que se estendiam ao longo da ferrovia.
                </p>
                <p>
                    Hoje, a Baixada com mais de três milhões de habitantes cresceu tendo que lidar com problemas de infraestrutura como falta de saneamento e as marcas de violência.
                </p>
                <p>
                    Mas sempre reage. É pra cima! É pro alto! Não se abate e luta pela melhoria da qualidade de vida da região tanto social quanto culturalmente.
                </p>
                <p>
                    Faz das artes seu caminho, seu escudo contra a ignorância e tira delas sua força para impulsionar o desenvolvimento de sua gente.
                </p>
                <p>
                    Arte é vida. A Baixada vive! Nela pulsa um coração criativo, vibrante, ávido para mostrar seu valor, sua capacidade, o seu fazer, a sua alegria.
                </p>
                <p>
                    A Baixada tem o que comemorar, tem do que se orgulhar. Belezas naturais, relíquias históricas, diversos centros culturais que abrigam teatros, bibliotecas, cineclubes. Personalidades do mundo artísticos são geradas no seu seio, conhecidas dentro e fora do país e principalmente o orgulho maior “gente que faz”, aqueles que estão na linha de frente, agindo, criando com competência e coragem oportunidades para que os baixadenses possam revelar seu rico panorama cultural.
                </p>
                <p>
                    É esse rico panorama cultural, é a Baixada produzindo e consumindo sonhos, se nutrindo pela arte que o G.R.E.S Tubarão de Mesquita vai apresentar.
                </p>
                <p>
                    Dos seus 13 municípios, muita coisa para mostrar, porém o tempo voa e, por isso, reunidos pontos relevantes de cada um, vamos pintar uma grande aquarela com alegria para celebrar os vários movimentos culturais da Baixada. Mostrar que ela tem educação e cultura.
                </p>
                <p>
                    Caso todos queiram saber mais sobre a região, sigam os trilhos da antiga Baronesa. Viagem mais lenta, porém com surpreendentes descobertas ao longo da estrada. 
                </p>
                <pre className="negrito">{`
        Não busques com egoísmo
        somente as coisas formosas:
        -olha que há flores no abismo!
        -olha que há espinhos nas rosas!
                        (SERGIO FONSECA)
        `}
                </pre>
                
                <br /><br /><br />

                </>
            )}  

        {aba === "samba" && (
          <>
            <pre className="samba-enredo">{`
  A BAIXADA SE LEVANTA        (
  PRA MOSTRAR COMO É QUE É    (
  QUE SE CONTA E QUE SE CANTA (
  E SE FAZ SAMBA NO PÉ.       ( BIS

  MEU ESTANDARTE LEVA O SAMBA A TODA PARTE
  E FAZ DELE A OITAVA ARTE COM MEU SONHO DE CETIM:
  PALAVRA, ESPAÇO, CORPO, SOM, VOLUME E TELA
  TÊM MAIS COR NA PASSARELA QUE SE ABRE PARA MIM.
  O POVO E A TERRA SÃO MOTIVOS DE MEUS TEMAS;
  A RAZÃO DE MEUS POEMAS CORRE O CHÃO, O CÉU E O MAR...
  SOU PRETO E BRANCO, COM NUANCES DE DOURADO.
  VIM DOS CAMPOS DO PASSADO, TRAGO EM MIM O MEU LUGAR.

  DO APITO DE UM TREM AO APITO DO SAMBA,             (
  MINHA ESCOLA TAMBÉM EVOLUI PRA CARAMBA:            (
  NELA SAI QUEM NÃO TEM DOR NA MÃO, PERNA BAMBA;     (
  QUANDO VAI, QUANDO VEM, ELA É CORDA E EU, CAÇAMBA. 
  (BIS
  (MAS EU SOU

  BATUQUEIRO, SOU PAPA-GOIABA DA PERIFERIA
  QUE DÁ ASA E ABA A QUALQUER FANTASIA,
  NA LUTA SE ACABA E É O REI DA FOLIA.
  COM GARRA E SEM JUBA HÁ EM MIM UM LEÃO
  E UM GATO NA TUBA DO MEU CORAÇÃO.
  SE HÁ QUEM NÃO SUBA COM MEDO DE CHÃO,
  NINGUÉM MAIS DERRUBA O MEU TUBARÃO.
                `}</pre>

                <div className="video-samba">
                    <iframe width="90%" height="200" src="https://www.youtube.com/embed/mb4exq-fmLs?list=RDmb4exq-fmLs" title="Tubarão de Mesquita 2023 - Samba Oficial l TV SUPERLIGA" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> 
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
export default Carnaval2023;
