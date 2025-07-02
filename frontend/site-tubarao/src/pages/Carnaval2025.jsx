import { useState, useRef, useEffect } from "react";

function Carnaval2025() {
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

        @media (min-width: 1024px) {
            p {
                padding: 0.12rem;
            }
        }
        `}
      </style>
      <div className="container">
        <h1>Carnaval 2025</h1>
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

            <h3>Repensa, reflita, recicla, vem na onda da sustentabilidade com a Tubarão de Mesquita</h3>

            <p>
              A Baixada Fluminense está no mundo, viva, antenada e também se
              pergunta:
            </p>
            <p>
              _“Meio ambiente, o que estamos fazendo com ele?”
            </p>
            <p>
              É preciso refletir sobre a degradação ambiental, chamar a atenção
              para o desrespeito à natureza.
            </p>
            <p>
              Somos parte integrante do meio ambiente e não é de hoje que a
              situação mostra que mudanças de atitudes, de hábitos e comportamentos
              são necessários e urgentes.
            </p>
            <p>
              “A vida constitui uma enorme teia entrelaçada e somos um dos seus
              fios. A consequência dos nossos atos, recaem sobre nós”
            </p>
            <p>
              É preciso despertar para <strong>o grande desafio: criar uma sociedade
              ambientalmente sustentável,</strong> onde as necessidades e aspirações das
              gerações atuais não diminua suas próprias chances e das gerações futuras
              de ter uma vida saudável, justa, capaz de crescer sem danos à natureza.
            </p>
            <p>
              <strong>Sustentabilidade é a palavra-chave.</strong>
            </p>
            <p>
              Como uma comunidade que está sempre ligada na melhoria da
              qualidade de vida de seus cidadãos, a Baixada Fluminense não pode deixar
              de unir forças para “cuidar da Terra”, a casa de nós todos.
            </p>
            <p>
              A Escola de Samba Tubarão de Mesquita, como boa mesquitense
              que é, reconhece que a hora é agora, que o tempo urge, que a questão é
              séria e que <strong>através da sua arte, do seu canto</strong> pode “aproveitar” (cantando, dançando, batucando) para <strong>ajudar</strong>, de forma leve e criativa, <strong>na
                conscientização de que “não basta saber” o que deve ser feito, é preciso
                “agir”.</strong>
            </p>
            <p>
              <strong>Agir oferecendo aos cidadãos mesquitenses a oportunidade de
                engajamento na causa, incentivando a cidadania ambiental, estimulando
                a responsabilidade e a participação individual e coletiva para a
                transformação local, para a melhoria do nosso município.</strong>
            </p>
            <p>
              <strong>Com trabalho, leveza, arte, cultura acreditamos poder</strong> nos tornar
              uma escola, uma cidade sustentável, capaz de promover, cultivar, respeitar
              e <strong>favorecer a sustentabilidade, sensibilizando o indivíduo, a coletividade o “olhar em volta”, “cuidar da sua parte” e que com isso também
                estará contribuindo para um mundo melhor.</strong>
            </p>
            <p>
              A Tubarão de Mesquita quer que seu canto em defesa do planeta
              ressoe dentro e além, muito além de suas fronteiras.
            </p>
            <p>
              <strong>Vem com a Tubarão!!!</strong>
            </p>

            <br /><br /><br />

          </>
        )}

        {aba === "samba" && (
          <>
            <pre className="samba-enredo">{`
  NUM CLAMOR A CADA UM DE NOS
  MINHA ESCOLA ERGUE A VOZ
  PARA O MUNDO INTEIRO OUVIR
  ANDAM DETURPANDO A REALIDADE
  MAS SUSTENTABILIDADE E CRESCER SEM DESTRUIR
  ENTÃO UM FLORESTEIRO LENDÁRIO
  EM UM GRITO SOLITARIO, PRENUNCIA AS TRAGÉDIAS ATUAIS
  A GANÂNCIA HUMANA EXPLORAVA ALÉM DO NECESSÁRIO OS RECURSOS NATURAIS
  CADÊ A ARARA AZUL, SUMIU O LOBO GUARÁ E SE A ÁGUA SECAR
  NO CHÃO QUE O GANHA PÃO VEM DA SEMENTE.
  NA CONTA DE QUEM VAI FICAR
  O SOFRIMENTO QUE MALTRATA NOSSA GENTE

  SONHEI QUE O BRASIL VOLTOU A SER ALDEIA    (
  ONDE O HOMEM SO COLHE AQUILO QUE SEMEIA    (
  E PREVALECIA O SENTIMENTO                  (
  DE GRATIDÃO À TERRA PELO SEU SUSTENTO      (BIS 

  A MISSÃO É PROTEGER
  FAZER FLORESCER O DEVER DE PRESERVAR
  JÁ NÃO BASTA MAIS SABER
  TEM QUE DEFENDER, SE PRECISO LUTAR
  É HORA DE FAZER UM JURAMENTO
  QUE O DESENVOLVIMENTO
  NÃO SERÁ COM SACRIFÍCIO AMBIENTAL
  DÁ PRA IMPULSIONAR A ECONOMIA, TER TECNOLOGIA
  VEJA O EXEMPLO DO MEU CARNAVAL
  QUE USA, REÚSA, REMONTA, PINTA, BORDA E APRONTA
  COM RESPONSABILIDADE SOCIAL

  NO MAR DA DEGRADAÇÃO                      (
  RESISTE VALENTE, O MEU TUBARÃO            (
  VEM DA BAIXADA UM OLHAR DE ESPERANÇA      (
  QUE A VIDA SEJA SEMPRE A MAIOR HERANÇA    (BIS 
                `}</pre>

            <div className="video-samba">
              <iframe width="90%" height="200" src="https://www.youtube.com/embed/T6RX4ln_HwY" title="Enredo 2025: Repense, reflita, recicla, vem na onda da sustentabilidade com a Tubarão de Mesquita”." frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
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
export default Carnaval2025;
