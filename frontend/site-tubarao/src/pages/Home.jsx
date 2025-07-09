import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Importe o CSS do carrossel

import locationSvg from "../assets/location-svgrepo-com.svg";
import mailSvg from "../assets/mail-svgrepo-com.svg";
import Button1 from "../components/Button1";
import institutoFachada from "../assets/instituto/instituto-fachadagalpao.jpg";
import primeiroCasal24 from "../assets/desfile24/desfile24-primeirocasal.jpg";
import backgroudPicture from "../assets/desfile24/desfile24-comissaodefrentedancando.jpg";

// Hook para verificar se é mobile
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
  const isMobile = useIsMobile(); // Não usado diretamente no JSX, mas pode ser útil

  // Função para verificar se é um dispositivo de toque
  const isTouchDevice = () => {
    if (typeof window === "undefined") return false;
    return (
      "ontouchstart" in window ||
      navigator.maxTouchPoints > 0 ||
      navigator.msMaxTouchPoints > 0
    );
  };
  const [isTouch, setIsTouch] = useState(isTouchDevice()); // Não usado diretamente no JSX
  useEffect(() => {
    const handleResize = () => setIsTouch(isTouchDevice());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Função para enviar e-mail
  function handleEnviar(e) {
    e.preventDefault();
    const destinatario = "contatotubaraodemesquita@gmail.com";
    const assunto = encodeURIComponent("Contato pelo site");
    const corpo = encodeURIComponent(
      `Nome: ${nome}\nEmail: ${email}\nMensagem: ${mensagem}`
    );
    window.location.href = `mailto:${destinatario}?subject=${assunto}&body=${corpo}`;
  }

  // Dados das notícias para o carrossel
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

  // O estado 'noticiaIndex' não é mais necessário, pois o 'map' exibirá todas as notícias.
  // const [noticiaIndex] = useState(0);

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
            width: 100%;
            max-width: 600px;
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

          /* Estilização do carrossel de notícias */
          .noticias-carousel {
            display: flex;
            flex-direction: column;
            align-items: center;    
            background: #222;
            border-radius: 0.5rem;
            margin-bottom: 2.5rem;
            transition: transform 0.5s ease-in-out;
          }

          .noticias-carousel-content {
            width: 100%; /* Garante que o conteúdo do carrossel ocupe a largura disponível */
            max-width: 800px; /* Adiciona um max-width para controle em telas grandes */
          }

          .carousel-container {
            width: 100%;
          }

          .noticia-card {
            display: flex;
            flex-direction: column; /* Coloca imagem, título e texto em coluna por padrão */
            align-items: center; /* Centraliza o conteúdo dentro do card */
            text-align: left; /* Centraliza o texto e título por padrão */
          }

          .carousel-image-wrapper {
            position: relative;
            width: 100%;
            max-width: 700px; /* Limita a largura da imagem */
            margin: 0 auto 1rem auto; /* Centraliza a imagem e adiciona margem abaixo */
          }

          .carousel-image-wrapper img {
            width: 100%;
            max-height: 350px; /* Limita a altura máxima da imagem */
            border-radius: 1rem;
            object-fit: cover;
            display: block;
          }

          .noticias-carousel h3 {
            font-family: "Lexend", sans-serif;
            font-weight: 500;
            font-style: normal;
            text-align: left;
            color: #fff;
            width: 100%;
            margin-bottom: 1.2rem; /* Espaço abaixo do título */
          }
            
          .noticias-carousel p {
            color: #fff;
            font-size: 0.8rem; /* Aumentei o tamanho do parágrafo */
            text-align: left; /* Centralizado por padrão */
            margin-top: 0.5rem; /* Espaço acima do texto */
            margin-bottom: 3.5rem; /* Espaço abaixo do texto */
            width: 100%;
          }
            
            .noticias-carousel button {
              height: 150px;
              margin: 3rem auto;
            }

          /* Estilização da seção "Sobre Nós" */
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

          /* Estilização do formulário de contato */
          .form-contato {
            display: flex;
            flex-direction: column;
            align-items: flex-start; /* Alinha à esquerda */
            padding-left: 1rem;
            }

          .form-contato input,
          .form-contato textarea {
            width: 70%;
            max-width: 450px;
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
            margin: 3rem auto 0 auto; /* Centraliza o botão */
            align-items: center;
            justify-content: center;
            width: 70%;
            max-width: 250px;
            padding: 0.5rem 1rem;
          }
          
          /* Estilização do iframe do mapa */
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

          /* Media Queries para telas maiores (Desktop) */
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

            /* Carrossel de notícias em desktop - ocupando toda a largura */
            .noticias-carousel {
              width: 100vw; /* Ocupa toda a largura da viewport */
              margin-left: calc(-50vw + 50%); /* Centraliza o elemento para ocupar a largura total */
              border-radius: 0; /* Remove borda arredondada nas laterais para que ocupe a largura completa */
              padding: 2rem 0; /* Adiciona padding vertical */
              height: auto; /* Permite que a altura se ajuste ao conteúdo */
            }

            .noticias-carousel-content {
              width: 80%; /* Ajusta a largura do conteúdo interno */
              max-width: 40%; /* Limite máximo para o conteúdo */
            }

            .noticias-carousel p {
              font-size: 1.1rem;
            }

            .noticias-carousel h2 {
              font-size: 2rem;
            }

            .noticias-carousel h3 {
              font-size: 1.5rem;
            }


            /* Seção "Sobre Nós" em desktop */
            .sobre-nós {
                display: flex;
                justify-content: center;
                align-items: center;
                min-height: 750px;
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
              width: 50%;
              font-size: 1.2rem;
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
              align-items: center; /* Centraliza o formulário */
              padding-left: 0;
            }

            /* Iframe do mapa em desktop */
            iframe{
              width: 100vw;
              max-width: 100%;
              height: 450px;
              border-radius: 0;
              padding: 0;
              box-shadow: 0 4px 18px #0009;
              }
          }
        `}
      </style>

      {/* Conteúdo principal da página */}
      <div className="container">
        {/* Seção "História Tubarão" */}
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
            <img src={primeiroCasal24} alt="Primeiro Casal do GRES Tubarão de Mesquita no desfile de 2024" />
          </div>
          <Link to="/tubarao/historia">
            <Button1 >Saiba mais</Button1>
          </Link>
        </div>
          
        {/* Carrossel de Notícias */}
        <div className="noticias-carousel">
          <div className="noticias-carousel-content">
            <h2>ÚLTIMAS NOTÍCIAS</h2>
            <hr />
            <div className="carousel-container">
              <Carousel
                showThumbs={false}
                showStatus={false}
                infiniteLoop
                autoPlay
                interval={7000}
                stopOnHover
                swipeable
                dynamicHeight={false}
              >
                {/* O MAP é o que itera sobre cada notícia e cria um slide para ela */}
                {noticias.map((noticia, index) => (
                  <div className="noticia-card" key={index}>
                    <div className="carousel-image-wrapper">
                      <h3>{noticia.titulo}</h3> {/* Acessa o título da notícia atual */}
                      <img src={noticia.imagem} alt={noticia.titulo} /> {/* Acessa a imagem da notícia atual */}
                    </div>
                    <p>{noticia.texto}</p> {/* Acessa o texto da notícia atual */}
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </div>

      {/* Seção "Sobre Nós" e Formulário de Contato */}
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
      {/* Iframe do Google Maps */}
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3678.60722228667!2d-43.43277644125584!3d-22.77995331458939!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9967f72db76229%3A0x31aa4099e9cf9c91!2sG.R.E.S.%20Tubar%C3%A3o%20de%20Mesquita!5e0!3m2!1spt-BR!2sbr!4v1751064162651!5m2!1spt-BR!2sbr" // Verifique se esta URL do mapa está correta para Mesquita
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