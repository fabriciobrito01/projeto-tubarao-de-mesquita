import { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";

import backgroudImage from "../assets/batismo-casaisebandeiras.jpg";
import locationSvg from "../assets/location-svgrepo-com.svg";
import logoTubarao from "../assets/logo-tubarao.svg";
import mailSvg from "../assets/mail-svgrepo-com.svg";
import Button1 from "../components/Button1";
import institutoFrente from "../assets/instituto-frente.jpg";
import institutoDentro from "../assets/instituto-dentro.jpg";

function Home() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");

  function handleEnviar(e) {
    e.preventDefault();
    const destinatario = "contatotubaraodemesquita@gmail.com";
    const assunto = encodeURIComponent("Contato pelo site");
    const corpo = encodeURIComponent(
      `Nome: ${nome}\nEmail: ${email}\nMensagem: ${mensagem}`
    );
    window.location.href = `mailto:${destinatario}?subject=${assunto}&body=${corpo}`;
  }

  return (
    <>
      <style>
        {`    
          .container {
            box-shadow: none;
          }
        
          .historia-tubarao {
            margin-bottom: 2.5rem;
          }

          .carousel-container {
            margin-bottom: 2.5rem;
          }

          .historia-tubarao img {
            width: 270px;
            height: 270px;
            object-fit: cover;
            border-radius: 50%;
            box-shadow: 0 4px 18px #0002;
            margin: 1.5rem 0;
            display: block;
            margin-left: auto;
            margin-right: auto;
          }

          .historia-tubarao a {
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .historia-tubarao button {
            display: block;
            margin: 1.5rem 0 1rem 0;
            width: 200px;
          }

          .sobre-nós {
            background-image: url(${backgroudImage});
            background-size: cover;
            background-position: center;
            width: 100%;
            height: 630px;
            margin-bottom: 2.5rem;
          }

          .sobre-nós h2 {
            text-align: left;
            margin: 1rem 0 1rem 0;
            margin-left: 2rem;
            }

          .sobre-nós h3 {
            display: flex;
            align-items: center;
            text-align: left;
            color: #fff;
            font-size: 0.9rem;
            font-weight: 500;
            margin-top: 1rem;
            }

          .sobre-nós p {
            text-align: left;
            color: #fff;
            font-size: 0.9rem;
            font-weight: 300;
            padding-top: 0rem;
            }

          .sobre-nós hr {
            width: 100%;
            height: 0.05rem;
            margin: 0.5rem 0;
            }

          .sobre-nós img {
            width: 20px;
            height: 20px;
            filter: brightness(0) invert(1);
            margin-right: 0.5rem;
            }

          .sobre-nós .overlay {
            position: relative;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.85);
            padding-top: 0.4rem;
            }

          .form-contato {
            display: flex;
            flex-direction: column;
            align-items: left;
            padding-left: 1rem;
            }

          .form-contato input,
          .form-contato textarea {
            width: 70%;
            margin-bottom: 0.5rem;
            padding: 0.5rem;
            border: 1px solid #ccc;
            border-radius: 4px;
            font-family: 'Inter', sans-serif;
            }

          .form-contato textarea {
            height: 100px;
            }

          .form-contato button {
            display: block;
            margin: 3rem auto 0 auto;
            align-items: center;
            justify-content: center;
            width: 70%;
            padding: 0.5rem 1rem;
          }
          
          iframe {
            width: 90%;
            height: 260px;
            max-width: 700px;
            margin: 0 auto;
            margin-bottom: 2.5rem;
            display: flex;
            justify-content: center;
            align-items: center;
            overflow: visible;
            border-radius: 1.5rem;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
          }
          .carousel-container {
            position: relative;
            display: flex;
            flex-direction: column;
            align-items: center;
            background: #222;
            width: 100vw;
            max-width: 100vw;
            margin-left: calc(-50vw + 50%);
            margin-right: 0;
            border-radius: 0;
            margin-bottom: 2.5rem;
          }
          .carousel-container h3 {
            font-size: 1.2rem;
            font-family: "Lexend", sans-serif;
            font-weight: 500;
            font-style: normal;
            text-align: left;
            color: #fff;
          }
          .carousel-container p {
            color: #fff;
            font-size: 0.8rem;
            text-align: left;
            padding-bottom: 3rem;
            }

          .carousel-container img {
            padding: 2rem;
          }

          @media (min-width: 1024px) {
            .tubarao-p-img{
              display: flex;
              flex-direction: row-reverse;
            }

            .historia-tubarao p {
              display: flex;
              text-align: left;
            }

            .sobre-nós {
                display: flex;
                justify-content: center;
                align-items: center;
                min-height: 670px;
                background-image: url(${backgroudImage});
                background-size: cover;
                background-position: center;
                width: 100%;
              }
              
            .sobre-nós .overlay {
              padding-top: 1.8rem;
              box-shadow: 0 4px 24px #0006;
              display: flex;
              flex-direction: column;
              align-items: center;
              }

            .sobre-nós .overlay-content {
              display: flex;
              width: 40%;
              background-color: rgba(0, 0, 0, 0.6);
              flex-direction: column;
              align-items: center;
              border: 1px solid #CB910F;
              padding-bottom: 1.2rem;
            }

            .sobre-nós button {
              width: 30%;
            }

            .form-contato {
              width: 100%;
              display: flex;
              flex-direction: column;
              align-items: center;
              padding-left: 0;
            }

            iframe{
              width: 100vw;
              max-width: 100%;
              height: 450px;
              border-radius: 0;
              padding: 0;
              box-shadow: 0 4px 18px #0009;
              // margin: 0;
              }

            .carousel-container {
              width: 100vw;
              max-width: 100vw;
              margin-left: calc(-50vw + 50%);
              margin-right: 0;
              border-radius: 0;
              box-shadow: 0 4px 8px rgba(0, 0, 0, 0.7);    
            }

            .noticias-content {
              max-width: 800px;
              margin: 0 auto;
              padding: 2rem 1.5rem;
              display: flex;
              flex-direction: column;
              align-items: center;          
            }

            .carousel-container button {
              margin-top: 1.5rem;
              width: 25%;
            }

            .carousel-container .carousel .slide img {
              width: 80%;
              height: 300px;
            }

            .carousel-container p {
              font-size: 0.9rem;
              padding-top: 1.8rem;  
              padding-bottom: 2rem;
            }
          }
        `}
      </style>
      <div className="container">
        <div className="historia-tubarao">
          <h1>CONHEÇA O TUBARÃO DA BAIXADA!</h1>
          <div className="tubarao-p-img">
            <div className="historia-text">
            <p>
              No coração da Baixada Fluminense, em Mesquita, nasceu mais do que uma escola de samba: surgiu um movimento transformador, que une cultura, paixão, resistência e oportunidade. O G.R.E.S. Tubarão de Mesquita é o reflexo de um sonho coletivo que decidiu fazer acontecer - e está mudando vidas desde o primeiro compasso.
            </p>
            <p>
              Com raízes fincadas na tradição local e os olhos voltados para o futuro, a Tubarão de Mesquita já conquistou seu espaço na avenida e no coração do povo. Mais do que desfilar, a escola pulsa com projetos sociais que impactam de verdade a comunidade. É oficina, é dança, é educação, é arte, é luta, com responsabilidade social.
            </p>
            </div>
            <img src={logoTubarao} alt="" height={300} width={300} />
          </div>
          <Link to="/tubarao/historia">
            <Button1 >Saiba mais</Button1>
          </Link>
        </div>


        <div className="carousel-container">
          <Carousel
            showThumbs={false}
            showStatus={false}
            infiniteLoop
            autoPlay
            interval={10000}
            stopOnHover
            swipeable
            dynamicHeight={false}
          >
            <div>
              <div className="noticias-content">
                <h3>Instituto Tubarão de Mesquita perto de ser inaugurado!</h3>
                <img src={institutoFrente} alt="Aulão social de Muay Thai no Instituto Tubarão de Mesquita" />
                <p>No dia 27 de Julho de 2025, o Instituto Tubarão de Mesquita será inaugurado com a missão de atender a comunidade oferecendo uma variedade de serviços essenciais e programas educativos...</p>
              </div>
            </div>
            {/* <div>
              <img src={institutoDentro} alt="Aulão social de Jiu-Jitsu no Instituto Tubarão de Mesquita" />
            </div> */}
          </Carousel>
          <Button1>Leia Mais</Button1>
        </div>

      </div>
      <div className="sobre-nós">
        <div className="overlay">
          <div className="overlay-content">
            <h2>SOBRE NÓS</h2>
            <hr />
            <div className="quadra"></div>
            <h3><img src={locationSvg} alt="icone de localização" />Quadra Tubarão de Mesquita</h3>
            <p>Estr. Feliciano Sodré, 2325 - Centro, Mesquita - RJ, 26553-000</p>
            <div className="barracao"></div>
            <h3><img src={locationSvg} alt="icone de localização" />Barracão Tubarão de Mesquita</h3>
            <p>Rua Prefeito José Montes Paixão, 1265 - Centro, Mesquita - RJ, 26553-160</p>
            <div className="email"></div>
            <h3><img src={mailSvg} alt="icone de email" />Entre em contato conosco</h3>
            <form className="form-contato" onSubmit={handleEnviar}>
              <input
                type="text"
                placeholder="Seu nome"
                value={nome}
                onChange={e => setNome(e.target.value)}
                required
              />
              <input
                type="email"
                placeholder="Seu email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
              />
              <textarea
                placeholder="Sua mensagem"
                value={mensagem}
                onChange={e => setMensagem(e.target.value)}
                rows={4}
                required
              />
              <Button1 type="submit">Enviar email</Button1>
            </form>
          </div>
        </div>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3678.60722228667!2d-43.43277644125584!3d-22.77995331458939!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9967f72db76229%3A0x31aa4099e9cf9c91!2sG.R.E.S.%20Tubar%C3%A3o%20de%20Mesquita!5e0!3m2!1spt-BR!2sbr!4v1751064162651!5m2!1spt-BR!2sbr"
        width="340"
        height="300"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </>
  );
}

export default Home;