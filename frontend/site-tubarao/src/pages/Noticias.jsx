import institutoFrente from "../assets/instituto-frente.jpg";
import Button1 from "../components/Button1.jsx";

function Noticias() {
  return (
    <>
<style>
  {`
    .container {
      max-width: 1200px;
      background: #fff;
      border-radius: 16px;
      min-height: 60vh;
      align-items: center;
    }

    .noticia-card {
      border-radius: 10px;
      padding: 1.2rem 1.5rem;
      box-shadow: 0 2px 8px #0002;
      background: #fafafa;
      margin: 0 auto;
      margin-bottom: 2.5rem;
      max-width: 600px;
      transition: box-shadow 0.2s;
    }

    .noticia-card:hover {
      box-shadow: 0 4px 16px #0003;
    }

    .noticia-card h2 {
      margin-bottom: 1rem;
      font-weight: 700;
      text-align: left;
    }

    .noticia-card p {
      color: #222;
      font-size: 1rem;
      margin-bottom: 1rem;
      text-align: justify;
    }

    .noticia-card img {
      width: 100%;
      height: 200px;
      object-fit: cover;
      border-radius: 10px;
      margin-bottom: 0.5rem;
    }

    .noticia-card a {
      display: flex;
      font-size: 0.8rem;
    }

    @media (min-width: 1024px) {
    
      h2 {
        margin-left: 2rem;
        }

      p {
        text-indent: 0;
        }
        
      .noticia-card {
        display: flex;
        flex-direction: column;
        allign-items: stretch;
        min-width: 95%;
        }
        
      .noticia-content {
        display: flex;
        flex-direction: row;
        }

      .noticia-card img {
        width: 220px;
        height: 150px;
        }

      .noticia-text a {
        font-size: 1rem
      }
    }
  `}
      </style>
      <div className="container">
        <h1>NOTÍCIAS</h1>
          <div className="noticia-card">
            <div className="noticia-content">
              <img src={institutoFrente} alt="Instituto Tubarão de Mesquita" />
              <div className="noticia-text">
                <h2>Instituto Tubarão de Mesquita perto de ser inaugurado!</h2>
                <p>No dia 27 de Julho de 2025, o Instituto Tubarão de Mesquita será inaugurado com a missão de atender a comunidade oferecendo uma variedade de serviços essenciais e programas educativos...<a href="">Leia mais →</a></p>
              </div>
            </div>
          </div>
          <div className="noticia-card">
            <div className="noticia-content">
              <img src={institutoFrente} alt="Instituto Tubarão de Mesquita" />
              <div className="noticia-text">
                <h2>Enredo escolhido para o Carnaval 2026!</h2>
                <p>Resumo ou descrição da notícia 2. Edite ou substitua este texto conforme desejar... <a href="">Leia mais →</a></p>
              </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Noticias;