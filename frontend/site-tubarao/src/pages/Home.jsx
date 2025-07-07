import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import locationSvg from "../assets/location-svgrepo-com.svg";
import mailSvg from "../assets/mail-svgrepo-com.svg";
import Button1 from "../components/Button1";
import institutoFachada from "../assets/instituto/instituto-fachadagalpao.jpg";
import primeiroCasal24 from "../assets/desfile24/desfile24-primeirocasal.jpg";
import backgroudPicture from "../assets/desfile24/desfile24-comissaodefrentedancando.jpg";

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 769);
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 769);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return isMobile; 
}

function Home() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");
  const isMobile = useIsMobile();

  const isTouchDevice = () => {
    if (typeof window === "undefined") return false;
    return (
      "ontouchstart" in window ||
      navigator.maxTouchPoints > 0 ||
      navigator.msMaxTouchPoints > 0
    );
  };
  const [isTouch, setIsTouch] = useState(isTouchDevice());
  useEffect(() => {
    const handleResize = () => setIsTouch(isTouchDevice());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  function handleEnviar(e) {
    e.preventDefault();
    const destinatario = "contatotubaraodemesquita@gmail.com";
    const assunto = encodeURIComponent("Contato pelo site");
    const corpo = encodeURIComponent(
      `Nome: ${nome}\nEmail: ${email}\nMensagem: ${mensagem}`
    );
    window.location.href = `mailto:${destinatario}?subject=${assunto}&body=${corpo}`;
  }

  const noticias = [
    {
      titulo: "Instituto Tubarão de Mesquita perto de ser inaugurado!",
      imagem: institutoFachada,
      texto: "No dia 27 de Julho de 2025, o Instituto Tubarão de Mesquita será inaugurado com a missão de atender a comunidade oferecendo uma variedade de serviços essenciais e programas educativos..."
    },
    {
      titulo: "Aulão social de Muay Thai no Instituto Tubarão de Mesquita",
      imagem: institutoFachada,
      texto: "O Instituto Tubarão de Mesquita promoveu um aulão social de Muay Thai para crianças e jovens da comunidade, incentivando o esporte e a cidadania..."
    },
    {
      titulo: "Projeto de reforço escolar começa em agosto",
      imagem: institutoFachada,
      texto: "A partir de agosto, o Instituto Tubarão de Mesquita oferecerá aulas de reforço escolar gratuitas para alunos do ensino fundamental da região..."
    }
  ];

  // Estado do carrossel
  const [noticiaIndex, setNoticiaIndex] = useState(0);

  // Navegação do carrossel
  const handlePrev = () => setNoticiaIndex((prev) => (prev === 0 ? noticias.length - 1 : prev - 1));
  const handleNext = () => setNoticiaIndex((prev) => (prev === noticias.length - 1 ? 0 : prev + 1));


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

          .historia-tubarao img {
            width: 350px;
            height: 270px;
            padding: 2rem;
            object-fit: cover;
            margin: 0rem 0;
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

          .noticias-carousel {
            height: 650px;
            max-width: 800px;
            margin: 2.5rem auto;
            padding: 2rem 1.5rem;
            display: flex;
            flex-direction: column;
            align-items: center;    
            background: #222;
            border-radius: 0.5rem;
          }

          .carousel-image-wrapper {
            position: relative;
            width: 100%;
            max-width: 600px;
            margin: 0 auto;
            padding: 0;
          }

          .carousel-image-wrapper img {
            width: 100%;
            height: auto;
            border-radius: 1rem;
            object-fit: cover;
            display: block;
          }

          /* Botões laterais */
          .carousel-btn-absolute {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            background: #CB910F;
            color: #fff;
            border: none;
            border-radius: 50%;
            width: 40px;
            height: 40px;
            font-size: 1.2rem;
            cursor: pointer;
            transition: background 0.2s;
            z-index: 2;
          }

          .carousel-btn-absolute:hover {
            background: #a97e0c;
          }

          .carousel-btn-left {
            left: 10px; /* Ajuste conforme necessário */
          }

          .carousel-btn-right {
            right: 10px; /* Ajuste conforme necessário */
          }

          .noticias-carousel h3 {
            font-size: 1.2rem;
            font-family: "Lexend", sans-serif;
            font-weight: 500;
            font-style: normal;
            text-align: center;
            color: #fff;
            width: 100%;
          }
          .noticias-carousel p {
            color: #fff;
            font-size: 0.9rem;
            text-align: left;
          }
          .noticias-carousel img {
            padding: 0.5rem;
            width: 100%;
            max-width: 500px;
            border-radius: 1rem;
            object-fit: cover;
            margin: 0rem 0;
            display: block;
            margin-left: auto;
            margin-right: auto;
          }

          .sobre-nós {
            background-image: url(${backgroudPicture});
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
            background-color: rgba(0, 0, 0, 0.80);
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

          @media (min-width: 1024px) {
            .tubarao-p-img{
              display: flex;
              flex-direction: row-reverse;
            }

            .historia-tubarao p {
              display: flex;
              text-align: left;
            }

            .historia-tubarao img {
              border-radius: 15%;
              width: 900px;
              height: 350px;
              padding: 2rem;
              object-fit: cover;
              margin: 0rem 0;
              display: block;
              margin-left: auto;
              margin-right: auto;
            }

            .historia-tubarao button {
              width: 25%;
              height: 50px;
              font-size: 1.3rem;
            }

            .noticias-carousel {
              max-width: 1400px;
              margin: 2.5rem auto;
              padding: 2rem 1.5rem;
              display: flex;
              flex-direction: row;
              gap: 2rem;
              align-items: center;
              justify-content: center;    
            }

            .noticias-carousel h3 {
              font-size: 1.4rem;
            }

            .noticias-carousel p {
              font-size: 1.4rem;
              padding-top: 1.8rem;  
              padding-bottom: 2rem;
            }

            .noticias-carousel img {
              width: 80%;
              height: 300px;
            }

            .sobre-nós {
                display: flex;
                justify-content: center;
                align-items: center;
                min-height: 700px;
                background-image: url(${backgroudPicture});
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
              font-size: 1.3rem;
              height: 50px;
            }
            .sobre-nós p {
              font-size: 1.1rem;
            }
            .sobre-nós h3 {
              font-size: 1.2rem;
            }
            .sobre-nós input, textarea {
              font-size: 1.1rem;
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
              <img src={primeiroCasal24} alt="" />
          </div>
          <Link to="/tubarao/historia">
            <Button1 >Saiba mais</Button1>
          </Link>
        </div>

      <div className="noticias-carousel">
              <h2>ÚLTIMAS NOTÍCIAS</h2>
              <hr />
              {isTouch ? (
                <>
                  <div className="noticias-carousel-content">
                      <h3>{noticias[noticiaIndex].titulo}</h3>
                    <div className="noticia-card">
                  <div className="carousel-image-wrapper">
                    <button className="carousel-btn-absolute carousel-btn-left" onClick={handlePrev} aria-label="Anterior">&#8592;</button>
                      <img src={noticias[noticiaIndex].imagem} alt={noticias[noticiaIndex].titulo} />
                    <button className="carousel-btn-absolute carousel-btn-right" onClick={handleNext} aria-label="Próxima">&#8594;</button>
                  </div>
                      <p>{noticias[noticiaIndex].texto}</p>
                    </div>
                  </div>
                </>
              ) : (
                <div className="noticias-carousel-content">
                  {noticias.map((noticia, idx) => (
                    <div className="noticia-card" key={idx}>
                      <h3>{noticia.titulo}</h3>
                      <img src={noticia.imagem} alt={noticia.titulo} />
                      <p>{noticia.texto}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>-
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

export default Home