import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import {useRef} from "react";

import aulaMuayThai from "../assets/instituto/instituto-aulaomuaythai.jpg";
import aulaJiuJitsu from "../assets/instituto/instituto-aulaojiujitsu.jpg";
import oficinaDePercussao from "../assets/instituto/instituto-oficinadepercussao.jpg";
import oficinaDePercussao2 from "../assets/instituto/instituto-oficinaperscussao2.jpg";
import Button1 from "../components/Button1";

function InstitutoTubarao() {
    const ajudeRef = useRef(null);

    const scrollToAjude = () => {
        if (ajudeRef.current) {
            ajudeRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    return (
        <>
            <style>
                {`
                h2 {
                    padding-left: 2rem;
                    padding-right: 2rem;
                }
                .container {
                    box-shadow: none;
                }

                .oinstituto {
                    margin-bottom: 2.5rem;
                }

                .atividadesRealizadas {
                    background: #222;
                    border-radius: 0.5rem;
                    width: 100vw;
                    max-width: 100vw;
                    margin-left: calc(-50vw + 50%);
                    margin-right: 0;
                    margin-bottom: 2.5rem;
                    }

                .ajude {
                    margin-bottom: 2.5rem;
                    scroll-margin-top: 6rem;
                }

                .atividadesRealizadas p {
                    color: #fff;
                }

                .doacao-button {
                    display: flex;
                    justify-content: center;
                }

                @media (min-width: 1024px) {
                    .atividadesRealizadas-content {
                        max-width: 1000px;
                        margin: 0 auto;
                    }

                    .header-img img {
                        margin-top: 2rem;
                        height: 200px;
                        width: 100vw;
                        max-width: 100vw;
                        margin-left: calc(-50vw + 50%);
                        margin-right: 0;
                        display: flex;
                    }
                }
                `}
            </style>

            <div className="container">
                <div className="oinstituto">
                    {/* <div className="header-img">
                        <img src={chocalho23} alt="" />
                    </div> */}
                    <h1>O INSTITUTO</h1>

                    <p>
                        O Instituto Tubarão de Mesquita chega com a missão de atender a comunidade oferecendo uma variedade de serviços essenciais e programas educativos. Nosso objetivo é proporcionar apoio integral às famílias, promovendo a inclusão social e o desenvolvimento da cidade de Mesquita.
                    </p>    
                    <p>
                        O Instituto oferecerá cursos profissionalizantes, atividades culturais, esportivas e de lazer, além de suporte psicológico e assistencial.
                    </p>
                    <p>
                        Estamos comprometidos em construir uma sociedade mais justa e igualitária, onde todos tenham acesso a oportunidades. Juntos faremos do instituto Tubarão de Mesquita um ponto de referência e transformação em nossa comunidade!    
                    </p>
                    <p>
                        E você pode fazer parte dessa transformação! Ajude a Tubarão apertando o botão abaixo e contribuindo com uma doação.
                    </p>
                    <div className="doacao-button">
                        <Button1 onClick={scrollToAjude}>Faça parte</Button1>
                    </div>
                </div>

                <div className="atividadesRealizadas">
                    <div className="atividadesRealizadas-content">
                        <h2>ATIVIDADES QUE JÁ REALIZAMOS</h2>

                        <p>
                            Desde a sua fundação, a G.R.E.S. Tubarão de Mesquita já promoveu diversas oficinas, eventos e ações voltadas para a inclusão social, como oficina de percussão, oficina de passista, aulão social de Muay Thai e aulão social de Jiu-Jitsu, impactando positivamente a vida de muitas pessoas da nossa comunidade. Apesar de pouco tempo de Escola, já são alguns anos de dedicação à cultura, à educação e ao fortalecimento dos laços sociais.
                        </p>
                        <p>
                            Mas essa história não para por aqui. Com a criação do Instituto Tubarão de Mesquita, estamos ampliando ainda mais nossas ações! Agora, teremos uma área exclusivamente dedicada ao desenvolvimento dessas atividades, com estrutura e planejamento pensados para atender melhor a todos.
                        </p>
                        
                        <p>                       
                            Prepare-se para um novo ciclo de oficinas, cursos, encontros culturais e muito mais. O nosso compromisso com a transformação social só está começando!
                        </p>

                        <p>                        
                            A seguir, você confere algumas imagens de como será o espaço do Instituto — o Galpão Tubarões — um ambiente pensado para promover inclusão, aprendizado, convivência e oportunidades para todos.
                        </p>

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
                                    <img src={aulaMuayThai} alt="Aulão social de Muay Thai no Instituto Tubarão de Mesquita" />
                                </div>
                                <div>
                                    <img src={aulaJiuJitsu} alt="Aulão social de Jiu-Jitsu no Instituto Tubarão de Mesquita" />
                                </div>
                                <div>
                                    <img src={oficinaDePercussao} alt="Oficina de percussão realizada pelo Instituto Tubarão de Mesquita" />
                                </div>
                                <div>
                                    <img src={oficinaDePercussao2} alt="Participantes na oficina de percussão do Instituto Tubarão de Mesquita" />
                                </div>
                            </Carousel>
                        </div>
                    </div>
                </div>
                
                <div className="ajude" ref={ajudeRef}>
                    <h2>AJUDE A TUBARÃO E FAÇA PARTE DA TRANSFORMAÇÃO!</h2>

                    <p>
                        Acreditamos que a mudança começa com pequenos gestos. Se você compartilha dos nossos valores e deseja contribuir com ações concretas de responsabilidade social, saiba que pode ajudar o Instituto Tubarão de Mesquita a continuar impactando vidas.
                    </p>
                    <p>
                        Sua doação é fundamental para que possamos manter e ampliar nossas atividades, oferecendo cada vez mais oficinas, cursos, eventos e apoio à comunidade.
                    </p>
                    <p>
                        Ao lado, disponibilizamos um QR Code para doações via Pix, facilitando sua contribuição de forma rápida, prática e segura. Juntos, podemos transformar ainda mais realidades!
                    </p>
                </div>
            </div>
        </>
    );
}

export default InstitutoTubarao;