import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import aulaoSocialMuayThai from "../assets/instituto-aulaomuaythai.jpg";
import aulaoSocialJiuJitsu from "../assets/instituto-aulaojiujitsu.jpg";
import oficinaPercussao from "../assets/instituto-oficinadepercussao.jpg";
import oficinaPercussao2 from "../assets/instituto-oficinaperscussao2.jpg";

function InstitutoTubarao() {
    return (
        <>
            <style>
                {`
                .atividadesRealizadas {
                    background: #222;
                    border-radius: 0.5rem;
                    margin: 0rem auto;
                    }
                .atividadesRealizadas p {
                    color: #fff;
                    font-weight: 350;
                    padding: 1rem;
                }

                .atividadesRealizadas h2 {
                    padding-top: 3rem;
                `}
            </style>

            <div className="container">
                <h1>O INSTITUTO TUBARÃO DE MESQUITA</h1>

                <p>
                    O Instituto Tubarão de Mesquita chega com a missão de atender a comunidade oferecendo uma variedade de serviços essenciais e programas educativos. Nosso objetivo é proporcionar apoio integral às famílias, promovendo a inclusão social e o desenvolvimento da cidade de Mesquita. <br /><br />
                    O Instituto oferecerá cursos profissionalizantes, atividades culturais, esportivas e de lazer, além de suporte psicológico e assistencial. <br /><br />
                    Estamos comprometidos em construir uma sociedade mais justa e igualitária, onde todos tenham acesso a oportunidades. Juntos faremos do instituto Tubarão de Mesquita um ponto de referência e transformação em nossa comunidade!
                </p>
                <br /><br />


                <div className="atividadesRealizadas">
                    <h2>ATIVIDADES QUE JÁ REALIZAMOS</h2>

                    <p>
                        Desde a sua fundação, a G.R.E.S. Tubarão de Mesquita já promoveu diversas oficinas, eventos e ações voltadas para a inclusão social, como oficina de percussão, oficina de passista, aulão social de Muay Thai e aulão social de Jiu-Jitsu, impactando positivamente a vida de muitas pessoas da nossa comunidade. Apesar de pouco tempo de Escola, já são alguns anos de dedicação à cultura, à educação e ao fortalecimento dos laços sociais.
                        <br /><br />
                        Mas essa história não para por aqui. Com a criação do Instituto Tubarão de Mesquita, estamos ampliando ainda mais nossas ações! Agora, teremos uma área exclusivamente dedicada ao desenvolvimento dessas atividades, com estrutura e planejamento pensados para atender melhor a todos.
                        <br /><br />
                        Prepare-se para um novo ciclo de oficinas, cursos, encontros culturais e muito mais. O nosso compromisso com a transformação social só está começando!
                        <br /><br />
                        A seguir, você confere algumas imagens de como será o espaço do Instituto — o Galpão Tubarões — um ambiente pensado para promover inclusão, aprendizado, convivência e oportunidades para todos.
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
                                <img src={aulaoSocialMuayThai} alt="Aulão social de Muay Thai no Instituto Tubarão de Mesquita" />
                            </div>
                            <div>
                                <img src={aulaoSocialJiuJitsu} alt="Aulão social de Jiu-Jitsu no Instituto Tubarão de Mesquita" />
                            </div>
                            <div>
                                <img src={oficinaPercussao} alt="Oficina de percussão realizada pelo Instituto Tubarão de Mesquita" />
                            </div>
                            <div>
                                <img src={oficinaPercussao2} alt="Participantes na oficina de percussão do Instituto Tubarão de Mesquita" />
                            </div>
                        </Carousel>
                    </div>
                </div>
                <br /><br />

                <h2>AJUDE A TUBARÃO E FAÇA PARTE DA TRANSFORMAÇÃO!</h2>

                <p>
                    Acreditamos que a mudança começa com pequenos gestos. Se você compartilha dos nossos valores e deseja contribuir com ações concretas de responsabilidade social, saiba que pode ajudar o Instituto Tubarão de Mesquita a continuar impactando vidas.
                    <br /><br />
                    Sua doação é fundamental para que possamos manter e ampliar nossas atividades, oferecendo cada vez mais oficinas, cursos, eventos e apoio à comunidade.
                    <br /><br />
                    Ao lado, disponibilizamos um QR Code para doações via Pix, facilitando sua contribuição de forma rápida, prática e segura. Juntos, podemos transformar ainda mais realidades!
                </p>
                <br /><br /><br />
            </div>
        </>
    );
}

export default InstitutoTubarao;