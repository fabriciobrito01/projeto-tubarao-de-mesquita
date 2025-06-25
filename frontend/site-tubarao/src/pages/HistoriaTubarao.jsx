import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import casaisTubaraoBeijaFlor from "../assets/batismo-casaisebandeiras.jpg"
import bandeirasCruzadas from "../assets/batismo-bandeirascruzadas.jpg"
import passistasBeijaFlor from "../assets/batismo-passistasbeijaflor.jpg"
import bateriaBeijaFlor from "../assets/batismo-bateriabeijaflor.jpg"
import presidentesComMestres from "../assets/batismo-presidentesemestres.jpg"
import casalBeijaFlor from "../assets/batismo-casalbeijaflor.jpg"
import presidenteTubaraoComCasalBeijaFlor from "../assets/batismo-presidenteecasal.jpg"

function HistoriaTubarao() {
    return (
        <>
            <style>
                {`
            .samba-enredo {
                text-align: left;
                white-space: pre-line;
                margin-top: 0rem;
            }
            `}
            </style>

            <div className="container">
                <h1>NASCE A TUBARÃO DE MESQUITA</h1>

                <p>
                    Da ideia de se trazer algo novo para o Município de Mesquita, algo que transformasse e impulsionasse o desenvolvimento cultural e, consequentemente, social dessa pequena cidade, surgiu um sonho, o sonho de fazer acontecer.
                    Apaixonados por samba, dois grandes amigos viram nele a possibilidade de transformar esse sonho em realidade, é nesse momento que nasce o G.R.E.S. Tubarão de Mesquita. <br /><br />
                    A escola foi fundada em 05 de março de 2021, no município de Mesquita, pelo então Presidente Paulo Sergio Delfino Machado e o Presidente de Honra Dib de Brito Elias. A Tubarão de Mesquita vem acontecendo e fazendo acontecer para seu Município. Apesar de ter sido fundada em março 2021, a escola só iniciou suas atividades em outubro do mesmo ano, quando começaram a ser formadas as divisões da escola. Nasceu em um clube centenário da cidade de Mesquita, o Mesquita Futebol Clube, que tem como mascote o tubarão. O clube é conhecido como “Tubarão da Baixada”, e para homenagear o espaço onde exercem suas atividades, a escola foi batizada como “Tubarão de Mesquita”, exaltando o clube, resgatando suas atividades socias e valorizando o município.
                    <br /><br />
                    O seu primeiro enredo homenageou o Mesquita Futebol Clube e a cidade, com o nome “Mesquita Futebol Clube: De Barão a Tubarão”. O primeiro ano foi muito complexo para a escola, visto que não tinham experiência, mas em 5 meses foram para a avenida levando 450 desfilantes. Saíram do grupo de avaliação como vice-campeões, perdendo por apenas 1 décimo da primeira colocada. Desde o início, procuram abordar temas que exaltem a Baixada Fluminense e que criem a ideia de pertencimento do público a nossa escola, o que fez com que crescessem tão rápido. O que era um desafio no primeiro ano, torna-se uma realidade no segundo carnaval. Em seu segundo carnaval, com o objetivo de exaltar a Baixada e sua arte, o enredo foi “Levanta Baixada: Samba sua arte!”, o que os levou a ser a escola campeã de seu dia de desfile. A escola foi ganhando corpo. A Beija-Flor de Nilópolis abraçou seu trabalho e se tornou a madrinha da escola.
                    <br /><br />
                    Nossa Senhora das Graças, padroeira de nossa cidade foi escolhida como protetora da escola. Através disso, a escola ganhou mais visibilidade e foi atingindo o objetivo de criar nos Mesquitenses um sentimento de pertencimento.
                    <br /><br />
                    Em seu terceiro ano de desfile, tiveram um crescimento significativo, e seguiram com a mesma ideia de exaltação à Baixada Fluminense, criando o enredo: “A água de nossos rios deságua num rio maior”. Foi desafiador realizar um carnaval tão grande. Tiveram sucesso em seu desfile, embora tenham ficado em terceiro lugar e permanecido na série prata. A escola sai de seu terceiro carnaval “consagrada”, cheia de elogios, pois estavam competindo com escolas antigas, tradicionalíssimas, e conseguiram fazer um belíssimo carnaval. E assim, a escola segue em direção ao seu próximo carnaval. A Tubarão de Mesquita é uma Escola de Samba compromissada em transformar, através de seus projetos sociais, a vida das pessoas.
                    <br /><br />
                    A Escola desenvolve os seguintes projetos sociais: Oficina de percussão, corte e costura, adereços, pintura em tela, aulas de Jiu-jítsu, Muay Thai, Breaking, funcional. Hoje, O Grêmio Recreativo Escola de Samba Tubarão de Mesquita é exemplo de responsabilidade, respeito e confiabilidade, valores que levaram a seu reconhecimento dentro e fora dos limites do Município de Mesquita. Sabendo que o que tem em termos de projetos sociais ainda é muito pouco, a escola trabalha para ampliar suas condições e, com isso, fazer muito mais. Possuindo a coragem, a força e a determinação necessárias para transformar vidas e realizar sonhos através do samba, se faz uma voz poderosa na luta contra a desigualdade e qualquer tipo de preconceito. É esse seu maior objetivo, fazer da Escola de Samba o caminho para a melhoria da qualidade de vida de muitos de seus integrantes e até mesmo da comunidade ao redor, com a consciência de que, através de seus projetos sociais, a Tubarão de Mesquita constrói trajetórias, apresenta alternativas, abre caminhos, resgata sonhos e vidas.
                </p>

                <br />
                <hr />
                <br />

                <h2>BEIJA-FLOR DE NILÓPOLIS BATIZA O G.R.E.S. TUBARÃO DE MESQUITA</h2>

                <p>
                    Em um momento histórico para o samba da Baixada Fluminense, a Tubarão de Mesquita recebeu o batismo da Beija-Flor de Nilópolis, um gesto que marcou nossa trajetória. A maior escola de samba da Baixada Fluminense estendeu sua mão para nós, reconhecendo o nosso esforço e a nossa dedicação à cultura do carnaval, e esse batismo foi um símbolo de força e união entre as escolas da Baixada.
                    Nossa comunidade se uniu em uma grande festa, onde o samba, a alegria e o respeito pela tradição se destacaram. Após a Beija-Flor, com toda a sua grandiosidade, estender a mão para nós, fomos tomados por uma sensação de honra e responsabilidade.
                    Esse batismo representou mais do que um simples nome; foi um marco de reconhecimento e de incentivo para seguir em frente. A partir daquele dia, nos tornamos ainda mais fortes, com o compromisso de honrar o legado das grandes escolas de samba da Baixada, sempre com muito orgulho e dedicação.
                </p>
                <br />

                <div className="carousel-container">
                    <Carousel
                        showThumbs={false}
                        showStatus={false}
                        infiniteLoop
                        autoPlay
                        interval={4000}
                        stopOnHover
                        swipeable
                        dynamicHeight={false}
                    >
                        <div>
                        <img src={casaisTubaraoBeijaFlor} alt="Casal de mestre-sala e porta-bandeira da Tubarão de Mesquita e da Beija-Flor de Nilópolis se apresentando." />
                    </div>
                    <div>
                        <img src={bandeirasCruzadas} alt="Portas-bandeiras da Tubarão de Mesquita e da Beija-Flor de Nilópolis cruzadando suas respectivas bandeiras." />
                    </div>
                    <div>
                        <img src={passistasBeijaFlor} alt="Passistas da Beija-Flor de Nilópolis se apresentando." />
                    </div>
                    <div>
                        <img src={bateriaBeijaFlor} alt="Bateria da Beija-Flor de Nilópolis se apresentando." />
                    </div>
                    <div>
                        <img src={presidentesComMestres} alt="Presidente Paulo Sérgio e Presidente de Honra Dib Elias da Tubarão de Mesquita ao lado dos Mestres Plínio e Rodney da Beija-Flor de Nilópolis." />
                    </div>
                    <div>
                        <img src={casalBeijaFlor} alt="Casal de mestre-sala e porta-bandeira da Beija-Flor de Nilópolis se apresentando." />
                    </div>
                    <div>
                        <img src={presidenteTubaraoComCasalBeijaFlor} alt="Presidente Paulo Sérgio beijando bandeira da Beija-Flor de Nilópolis." />
                    </div>
                    </Carousel>
                </div>

                <br />
                <hr />
                <br />

                <h2>ONDE TUDO COMEÇOU - CARNAVAL 2022</h2>

                <br />

                <h3>ENREDO: "MESQUITA FUTEBOL CLUBE - DE BARÃO À TUBARÃO."</h3>

                <p>
                    Antes de mergulhar nas águas do tubarão é importante conhecer as terras de Mutambó, caminhando entre os canaviais, descansando à sombra dos laranjais, ouvindo histórias de uma cidade que já nasceu nobre pelas mãos de um Barão, o Jerônimo de Mesquita.
                </p>

                <h3>SAMBA-ENREDO: </h3>

                <p className="samba-enredo">{`
                Os rios vão de vencida
                    As pedras ficam no fundo
                    A água é que move essa vida
                    A vida é que move esse mundo
                    Desde a gota que batiza
                    Até a lágrima do fim
                    A gente se realiza
                    Entre o que é bom e é ruim
                    Choro de teima é pirraça
                    Cama de orvalho é chapéu
                    Água que queima é cachaça
                    Chuva que cai vem do céu

                    bênção que jorra da bica
                    Das mãos de Iara e Oxum, Oxum
                    Que Oxalá purifica
                    É nosso bem mais comum

                    As nossa vidas e vilas
                    Nem sempre tranquilas cresceram ao redor
                    Dos cursos de uma nascente
                    Que puxa a corrente de um rio de amor
                    Se a memória não escapa
                    Nas ondas que vão e que vem
                    Até os arcos da Lapa
                    Rolaram água também
                    No tempo do Imperador
                    Houve alguém que lançou
                    O maior desafio
                    A engenharia propôs
                    E depois construiu
                    O sonhado desvio
                    E a cada novo poder
                    Foi se alargando o favor
                    Que fez o povo sofrer
                    Quase morrer de calor

                    Sábio é quem acredita
                    No que é melhor para si
                    Sou Tubarão de Mesquita
                    O meu lugar é aqui
                    `}</p>

                <a href="https://www.youtube.com/watch?v=0JQkqXZNEJM&list=RD0JQkqXZNEJM&start_radio=1">Ouça o samba-enredo da Tubarão de 2022</a>
                <div className="carousel-container">
                    <Carousel
                        showThumbs={false}
                        showStatus={false}
                        infiniteLoop
                        autoPlay
                        interval={4000}
                        stopOnHover
                        swipeable
                        dynamicHeight={false}
                    >
                        {/* <div>
                        <img src={} alt="" />
                    </div>
                    <div>
                        <img src={} alt="" />
                    </div>
                    <div>
                        <img src={} alt="" />
                    </div>
                    <div>
                        <img src={} alt="" />
                    </div> */}
                    </Carousel>
                </div>
            </div>
        </>
    );
}

export default HistoriaTubarao;