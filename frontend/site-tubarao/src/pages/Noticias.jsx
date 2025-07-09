import institutoFachada from "../assets/instituto/instituto-fachadagalpao.jpg";
import noticiaOrdemDeDesfile2026 from "../assets/noticias/noticia-ordemdedesfile2026.jpg";
// Importe outras imagens se houver mais notícias
import noticiaReforcoEscolar from "../assets/desfile23/desfile23-alaeducacao.jpg"; // Exemplo de importação adicional

function Noticias() {
  // Array de objetos para controlar as notícias
  const noticias = [
    {
      titulo: "Instituto Tubarão de Mesquita perto de ser inaugurado!",
      imagem: institutoFachada,
      texto: "No dia 27 de Julho de 2025, o Instituto Tubarão de Mesquita será inaugurado com a missão de atender a comunidade oferecendo uma variedade de serviços essenciais e programas educativos...",
      link: "/noticias/instituto-inauguracao" // Defina um link específico para a notícia completa
    },
    {
      titulo: "Tubarão de Mesquita será a 3ª escola a desfilar no Domingo do Carnaval 2026!",
      imagem: noticiaOrdemDeDesfile2026,
      texto: "Com muita alegria anunciamos que seremos a terceira escola a desfilar no domingo de Carnaval! Nosso coração já bate no ritmo da avenida, e estamos prontos para mostrar a força da nossa escola e a garra da nossa comunidade...",
      link: "/noticias/ordem-desfile-2026"
    },
    {
        titulo: "Projeto de reforço escolar começa em agosto no Instituto!",
        imagem: noticiaReforcoEscolar, // Use a imagem que você importou
        texto: "A partir de agosto, o Instituto Tubarão de Mesquita oferecerá aulas de reforço escolar gratuitas para alunos do ensino fundamental da região, visando apoiar o desenvolvimento educacional da comunidade. Este projeto é mais uma iniciativa do Instituto para fortalecer os laços com a comunidade e proporcionar oportunidades de aprendizado...",
        link: "/noticias/reforco-escolar"
    }
    // Adicione mais notícias aqui conforme necessário
  ];

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
            color: #CB910F; /* Cor do link */
            text-decoration: none; /* Remove sublinhado padrão */
            font-weight: bold; /* Deixa o texto em negrito */
            margin-top: 0.5rem; /* Espaçamento acima do link */
          }
          
          .noticia-card a:hover {
            text-decoration: underline; /* Adiciona sublinhado ao passar o mouse */
          }

          @media (min-width: 1024px) {
          
            .container h1 {
              margin-left: 2rem;
            }

            .noticia-card h2 {
              margin-left: 0; /* Ajuste para não ter margem extra no título dentro do card */
            }

            .noticia-card p {
              text-indent: 0;
            }
              
            .noticia-card {
              display: flex;
              flex-direction: column;
              align-items: stretch; /* Alinha os itens para preencher a largura */
              min-width: 95%;
              max-width: 900px; /* Aumenta a largura máxima para desktop */
            }
              
            .noticia-content {
              display: flex;
              flex-direction: row;
              gap: 1.5rem; /* Espaçamento entre a imagem e o texto */
            }

            .noticia-card img {
              width: 250px; /* Aumenta a largura da imagem no desktop */
              height: 180px; /* Ajusta a altura da imagem */
              flex-shrink: 0; /* Impede que a imagem encolha */
            }

            .noticia-text {
                display: flex;
                flex-direction: column;
                justify-content: space-between; /* Empurra o link para baixo */
            }

            .noticia-text a {
              font-size: 1rem;
              align-self: flex-end; /* Alinha o link à direita dentro da caixa de texto */
              margin-top: auto; /* Empurra o link para a parte inferior */
            }
          }
        `}
      </style>
      <div className="container">
        <h1>NOTÍCIAS</h1>
        {noticias.map((noticia, index) => (
          <div className="noticia-card" key={index}>
            <div className="noticia-content">
              <img src={noticia.imagem} alt={noticia.titulo} />
              <div className="noticia-text">
                <h2>{noticia.titulo}</h2>
                <p>{noticia.texto} <a href={noticia.link}>Leia mais →</a></p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Noticias;