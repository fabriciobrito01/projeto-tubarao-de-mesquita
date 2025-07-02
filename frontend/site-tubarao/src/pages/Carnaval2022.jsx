import { useState, useRef, useEffect } from "react";

function Carnaval2022() {
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
                margin-top: 2rem;
                margin-bottom: 2rem;
                font-weight: bold;
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
                min-width: 300px;
                z-index: 10;
            }

            .submenu-list button {
                width: 90%;
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

            .submenu-list button.active {
                background: #C8910F;
                color: #fff;
                max-width: 90%;
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
            <h1>Carnaval 2022</h1>
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

                <h3>Mesquita Futebol Clube - De Barão à Tubarão</h3>

                <p>
                    Antes de mergulhar nas águas do tubarão é importante conhecer as terras de
                    Mutambó, caminhando entre os canaviais, descansando à sombra dos laranjais, ouvindo
                    histórias de uma cidade que já nasceu nobre pelas mãos de um Barão, o Jerônimo de
                    Mesquita. E se quiser saber mais sobre as terras do Barão, faça como Pedro II, pegue o
                    trem na parada Mutambó e aprecie o progresso da região.
                </p>

                <h3>Mesquita</h3>

                <p>
                    Mesquita, município da Baixada Fluminense, região metropolitana do Estado do Rio de Janeiro, emancipado em 1999, tem o início de sua história ligado ao período colonial, ao contato
                    com os índios, em especial os “jacutingas”, assim chamados por usarem como adorno as penas de
                    uma ave chamada “jacu”, comum na região.
                </p>
                <p>
                    Suas terras fizeram parte de uma sesmaria que se estendia entre o rio Sarapuí e o sopé do
                    Outeiro do Gericinó, cedidas a Gonçalo Aguiar.
                </p>
                <p>
                    Muitos anos depois, num Brasil independente, em 1855, já em mãos de outros donos, a
                    sesmaria, com benfeitorias de um engenho d’água na Cachoeira Pequena e um pequeno canavial,
                    passa a ser administrada por Jerônimo de Mesquita (mais tarde Barão de Mesquita). Torna- se
                    uma das maiores plantações de cana-de-açúcar de Iguaçú, onde foi construída a Fazenda da
                    Cachoeira, região conhecida como Mutambó, devido à enorme quantidade dessa árvore na região.
                    Tanto na Fazenda da Cachoeira, quanto na Fazenda São Mateus, também de propriedade do
                    Barão de Mesquita, a produção de aguardente e açúcar foi intensa, bem sucedida.
                </p>
                <p>
                    Vem o declínio da produção açucareira. A terra é levada à exaustão. Era preciso buscar
                    outras alternativas. 
                </p>
                <p>
                    A estrada de ferro D.Pedro II, hoje Central do Brasil, chega à região.
                </p>
                <p>
                    Em 1884, foi inaugurada uma parada de trem nas terras cedidas pelo Barão de Mesquita
                    para a passagem dos trilhos, que recebeu o nome de Jerônimo de Mesquita, posteriormente
                    Mesquita. Antes da inauguração oficial também chamada de Mutambó.
                </p>
                <p>
                    Fazendas em fase de declínio, entre outros fatores, a abolição da escravatura, começam a
                    investir em outros ramos.
                </p>
                <p>
                    A citricultura surge como possibilidade.
                </p>
                <p>
                    A região de Mesquita acompanha as mudanças. O espólio da antiga Fazenda Cachoeira foi
                    dividido, transformando se em chácaras, sítios de cultivo e beneficiamento de laranjas, que daria
                    um novo impulso à localidade.
                </p>
                <p>
                    Parte das terras a leste da estrada de ferro é vendida a Alfredo Ludolf que, mais tarde,
                    instalou na área uma imensa olaria.
                </p>
                <p>
                    Por muitos anos, a paisagem de Mesquita foi composta por laranjais, olarias, poucas casas
                    e pequenos comércios.
                </p>
                <p>
                    Com o passar do tempo a população local cresceu, a produção de laranjas diminuiu e as
                    terras de Mesquita foram loteadas, iniciando – se a construção de casas e demarcação de sítios,
                    anos depois tornando – se o 5º Distrito do Município de Nova Iguaçu.
                </p>
                <p>
                    Entre o final da década de 40 e início de 50, começam a se estabelecer em Mesquita
                    fábricas que irão impulsionar a economia local. Destacaram–se a BRASFERRO e IBT, ambas
                    metalúrgicas e a PUMAR, indústria de sombrinhas que se tornou a maior da América Latina.
                </p>
                <p>
                    Como distrito de Nova Iguaçu, Mesquita ficou relegada ao abandono administrativo
                    municipal durante anos, até que começa a despertar para suas próprias necessidades e, em maio
                    de 1957, é realizada a primeira reunião pela emancipação. Uma tentativa que não deu certo,
                    mesmo assim os ideais emancipalistas não se abateram.
                </p>
                <p>
                    Na década de 90, com iniciativas concretas, movimento organizado, participação popular
                    com realização de um plebiscito, partidos políticos, líderes pro emancipação e uma ferrenha
                    batalha judicial, Mesquita finalmente foi elevada à categoria de cidade em 25 de setembro de
                    1999.
                </p>
                <p>
                    Mesquita é o mais novo município do Estado do Rio de Janeiro, com população estimada
                    em 177.016 habitantes. Está situado na faixa de médio e grande porte entre os municípios do
                    Brasil. É composto por 17 bairros com extensão territorial de 41.169 km², segundo o IBGE.
                </p>
                <p>
                    Apesar de algumas dificuldades, graças ao trabalho de sua gente, Mesquita é outro. Mais
                    vivo, forte, capaz de traçar seus caminhos e caminhar com o progresso, com tudo que esse mundo
                    novo nos oferece, sempre crescendo.
                </p>

                <p className="negrito">
                    Mesquita está no mundo. O mundo está em Mesquita.
                    Mesquita está ligado, conectado.
                    Bora lá, rastrear o “Tubarão” e conhecer sua história.
                </p>

                <h3>Mesquita Futebol Clube</h3>

                <p>
                    Somente um “Tubarão” para espantar o marasmo!
                </p>
                <p>
                    E tudo começa com as “peladas” dos operários da fábrica de telhas Ludolph & Ludolph,
                    no século passado.
                </p>
                <p>
                    Nos intervalos do trabalho com o barro e a tabatinga, os operários com o intuito de se
                    divertir e espantar o marasmo, “batendo uma bola”, resolveram formar um time de futebol, que
                    eles não poderiam imaginar, daria origem ao nosso prodigioso Mesquita Futebol Clube.
                </p>
                <p>
                    Sua fundação data de 9 de maio de 1920, tempo em que Mesquita ainda estava
                    subordinado a Nova Iguaçu.
                </p>
                <p>
                    Na década de 40, pelas mãos de alguns dos seus dirigentes, o clube tem sua primeira sede
                    na Rua da Cachoeira, atual Mr. Watkins.
                </p>
                <p>
                    Durante a gestão de Luiz Guimarães, o clube se transfere para área na estrada Feliciano
                    Sodré, em frente à linha férrea da Central do Brasil, onde está até hoje.
                </p>
                <p>
                    Em 1958, Lenine Mazza, como presidente do Mesquita projeta sua nova sede.
                </p>
                <p>
                    Em 1971, pelas mãos de Nielsen Louzada, o clube ganha dinamismo, aumento do quadro
                    de associados, programação musical ampliada e o desafiante projeto de se construir um estádio
                    próprio.
                </p>
                <p>
                    Projeto concretizado, sonho realizado e o “Louzadão” como fica sendo conhecido pelos
                    mesquitenses, se põe de pé.
                </p>
                <p>
                    O clube começa a atuar defendendo suas cores, o preto e o branco, emocionando a torcida
                    e se fazendo conhecer por sua energia, audácia, autoconfiança, foco, dinamismo e coragem para
                    sempre avançar.
                </p>
                <p>
                    Atributos que certamente observados por seus torcedores, que rendeu ao time o apelido de
                    “Tubarão”, animal, que entre outros simbolismos, apresenta também tais características.
                </p>
                <p>
                    Mesquita começa a competir em certames profissionais e amadores, conquistando a Copa
                    Vale do Paraíba em 1976, Campeonato Estadual da Terceira Divisão em 1981, entre outras
                    vitórias, em diferentes encontros.
                </p>
                <p>
                    Em 1985, realizou campanha irretocável na Segunda Divisão do Campeonato Estadual,
                    atuando entre os melhores.
                </p>
                <p>
                    Em sua estreia na Primeira Divisão, alcança a oitava colocação, ficando à um empate com
                    o Fluminense e uma vitória sobre o Botafogo.
                </p>
                <p>
                    Mesquita, entre vitórias, empates e derrotas, teve uma trajetória positiva que serviu de
                    inspiração para outros clubes da Baixada. Mostrou que tem valores como o time de jovens entre
                    17 e 22 anos que, em 2007, fez o clube retornar à Primeira Divisão Carioca.
                </p>
                <p>
                    Hoje, está mais vivo do que nunca, preparando seus jovens jogadores para grandes
                    atuações.
                </p>
                <p>
                    O “Tubarão da Baixada” continua destacando o futebol, mas lança olhares atentos e ações
                    sobre outros esportes, sobre o lazer, a cultura, o conforto e a segurança dos seus associados.
                </p>
                <p>
                    Não quer esperar, quer agir para que as coisas aconteçam com criatividade e eficiência.
                </p>
                <p>
                    Ele segue ativo na vida para evoluir e por estar em constante estado de evolução, se junta
                    ao samba e faz acontecer na avenida a estreia do “Grêmio Recreativo Escola de Samba Tubarão
                    de Mesquita”, sua nova criação. 
                </p>
                <p>
                    Mesquita Futebol Clube sempre pra frente e para o alto com bola na rede e samba no pé.
                </p>

                <br /><br /><br />

                </>
            )}  

        {aba === "samba" && (
          <>
            <pre className="samba-enredo">{`
    É TUBA...TUBA...É TUBARÃO                  (
    O POVO SE AGITA E GRITA                    (
    QUEM NÃO TEM BOLA NO PÉ E NEM SAMBA NA MÃO (
    PEIXE NÃO É NEM NADA EM MESQUITA           (BIS

    E TUDO COMEÇOU NO BARRO,
    NA RODA E NO CALOR DO FOGO:
    TIJOLO, TELHA, POTE, JARRO
    E O HOMEM PONDO A BOLA EM JOGO.
    NA ESCOLA DE OURO, QUE É BRANCA E É NEGRA
    QUEM NÃO DÁ COURO BEM CEDO SE ARRANCA;
    SE QUEM CHEGA E QUEM TRAZ TIA NEGA É DA PAZ,
    A RODA SE FAZ E TAMBÉM BOTA BANCA.

    NA MÃO E NO PÉ DIZENDO A QUE VEM           (
    MESQUITA NÃO É MELHOR DO QUE NINGUÉM       (
    É VILA QUE ROLA DO AMOR DE UM BARÃO        (
    COM SAMBA DE ESCOLA E COM BOLA NO CHÃO     (BIS

    OS SILVA E OS MAZZA NO MEU FUTEBOL
    SÃO RAIOS DE SOL ABRINDO O CAMINHO.
    NA RUA OU EM CASA, NUM SAMBA QUE ASSOMBRA. (ARRASA?)
    QUEM FAZ LUZ E SOMBRA É NELSOM CAVAQUINHO.
    PRA QUEM TEVE DICO, WALDIR E TAINHA,
    ROMILDO, DICRÓ E TONINHO AINDA TEM,
    MESQUITA É UMA FESTA DE PRAÇA E DE FEIRA
    QUE BRINCA NA BEIRA DA LINHA DO TREM.
                `}</pre>

                <div className="video-samba">
                    <iframe width="90%" height="200" src="https://www.youtube.com/embed/0JQkqXZNEJM?list=RD0JQkqXZNEJM" title="Samba vencedor de 2022. Tubarão de Mesquita" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
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
export default Carnaval2022;
