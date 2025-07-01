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
      padding: 2rem 1rem;
    }
    .noticias-title {
      font-size: 2.2rem;
      font-family: 'Lexend', sans-serif;
      color: #CB910F;
      margin-bottom: 2rem;
      text-align: center;
      letter-spacing: 1px;
    }
    .noticias-list {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 2rem;
    }
    .noticia-card {
      border-radius: 10px;
      padding: 1.2rem 1.5rem;
      box-shadow: 0 2px 8px #0002;
      background: #fafafa;
      margin: 0 auto;
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
      display: block;
      text-align: right;
      font-size: 0.8rem;
    }

    @media (min-width: 1024px) {
      .noticias-list {
        display: flex;
        flex-direction: column;
        gap: 2rem;
        width: 100%;
        padding: 0rem;
        }
        
      .noticia-card {
        display: flex;
        flex-direction: column;
        allign-items: stretch;
        max-width: 95%;
        }
        
      .noticia-content {
        display: flex;
        flex-direction: row;
        }

      .noticia-card img {
        width: 220px;
        height: 150px;
        }

      .noticias-title {
        font-size: 2.5rem;
      }

      .noticia-text a {
        font-size: 1rem
      }
    }
  `}
      </style>
      <div className="container">
        <h1 className="noticias-title">NOTÍCIAS</h1>
        <div className="noticias-list">
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
            <h2>Título da Notícia 2</h2>
            <p>Resumo ou descrição da notícia 2. Edite ou substitua este texto conforme desejar.</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Noticias;