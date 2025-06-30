import institutoFrente from "../assets/instituto-frente.jpg";
import Button1 from "../components/Button1.jsx";

function Noticias() {
  return (
    <>
      <style>
        {`
          .noticias-container {
            max-width: 900px;
            background: #fff;
            border-radius: 16px;
            box-shadow: 0 4px 24px #0001;
            min-height: 60vh;
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .noticias-title {
            font-size: 1.8rem;
            font-family: 'Lexend', sans-serif;
            color: #CB910F;
          }
          .noticias-list {
            width: 100%;
            display: flex;
            flex-direction: column;
          }
          .noticia-card {
            background: #222;
            border-radius: 10px;
            padding: 1.2rem 1.5rem;
            margin: 1rem 2rem;
            box-shadow: 0 2px 8px #0001;
          }
          .noticia-card h2 {
            font-size: 1.3rem;
            color: #CB910F;
            margin-bottom: 1.2rem;
            font-family: 'Lexend', sans-serif;
            font-weight: 700;
          }
          .noticia-card p {
            color: #fff;
            font-size: 0.9rem;
            font-family: 'Lexend', sans-serif;
          }
          .noticia-card img {
            width: 100%;
            height: 200px;
            object-fit: cover;
            border-radius: 10px;
            margin-bottom: 0.5rem;
          }
          .noticia-card button {
            display: block;
            margin: 1rem auto 0 auto;
            align-items: center;
            justify-content: center;
            width: 70%;
            padding: 0.5rem 1rem;
          }
        `}
      </style>
      <div className="noticias-container">
        <h1 className="noticias-title">NOTÍCIAS</h1>
        <div className="noticias-list">
          <div className="noticia-card">
            <h2>Instituto Tubarão de Mesquita perto de ser inaugurado!</h2>
            <img src={institutoFrente} alt="Instituto Tubarão de Mesquita" />
            <p>No dia 27 de Julho de 2025, o Instituto Tubarão de Mesquita será inaugurado com a missão de atender a comunidade oferecendo uma variedade de serviços essenciais e programas educativos...</p>
            <Button1>Leia Mais</Button1>
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