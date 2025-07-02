import presidente from '../assets/presidente.jpg';
import PresidenteDeHonra from '../assets/presidentedehonra.jpg';
import interprete from '../assets/interprete.jpg';
import mestredebateria from '../assets/mestredebateria.jpg';

function FichaTecnica() {
  return (
    <>
      <style>
        {`
          .ficha-tecnica-grid {
            display: grid;
            grid-template-columns: 1fr;
            gap: 2.5rem;
            justify-items: center;
            justify-content: center;
            max-width: 1200px;
            margin: 25px auto;
            padding: 2rem 2rem;
            border-radius: 12px;
          }
          .container-componente {
            width: 100%;
            max-width: 330px;
            background: #222;
            border-radius: 12px;
            padding: 0.5rem;
            display: flex;
            flex-direction: column;
            align-items: center;
            box-sizing: border-box;
          }
          .ficha-tecnica-img {
            max-width: 230px;
            width: 100%;
            height: 300px;
            object-fit: cover;
            border-radius: 12px;
            box-shadow: 0 4px 18px #0002;
            margin: 1.5rem 0;
            display: block;
          }
          .container-componente h2 {
            font-size: 1.7rem;
            font-family: "Lexend", sans-serif;
            font-weight: 900;
            font-style: normal;
            text-align: center;
            color: #CB910F;
            margin: 0.5rem;
            margin-top: 0.5rem;
          }
          .container-componente p {
            font-size: 1.2rem;
            font-family: "Lexend", sans-serif;
            font-weight: 400;
            color: #fff;
            text-align: center;
            text-indent: 0rem;
          }

          @media (max-width: 768px) {
            .ficha-tecnica-grid {
              grid-template-columns: 1fr;
            }
          }
          @media (min-width: 769px) and (max-width: 1024px) {
            .ficha-tecnica-grid {
              grid-template-columns: repeat(2, 1fr);
            }
          }
          @media (min-width: 1025px) {
            .ficha-tecnica-grid {
              grid-template-columns: repeat(3, 1fr);
            }
          }
        `}
      </style>
      <h1>FICHA TÉCNICA</h1>
      <div className="ficha-tecnica-grid">
        <div className="container-componente">
          <h2>Presidente</h2>
          <img src={presidente} alt="Presidente" className="ficha-tecnica-img" />
          <p>Paulo Sérgio</p>
        </div>
        <div className="container-componente">
          <h2>Presidente de Honra</h2>
          <img src={PresidenteDeHonra} alt="Presidente de Honra" className="ficha-tecnica-img" />
          <p>Dib Elias</p>
        </div>
        <div className="container-componente">
          <h2>Interprete</h2>
          <img src={interprete} alt="Intérprete" className="ficha-tecnica-img" />
          <p>Ito Melodia</p>
        </div>
        <div className="container-componente">
          <h2>Mestre de bateria</h2>
          <img src={mestredebateria} alt="Mestre de bateria" className="ficha-tecnica-img" />
          <p>Michelzinho RP</p>
        </div>
        <div className="container-componente">
          <h2>Diretor de barracão</h2>
          <img/>
          <p>Eduardo dos Anjos</p>
        </div>
        <div className="container-componente">
          <h2>Comissão de frente</h2>
          <img/>
          <p>Flávia Leal</p>
        </div>
      </div>
    </>
  );
}

export default FichaTecnica;