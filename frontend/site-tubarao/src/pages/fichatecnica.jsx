import presidente from '../assets/presidente.jpg';
import PresidenteDeHonra from '../assets/presidentedehonra.jpg';
import interprete from '../assets/interprete.jpg';
import mestredebateria from '../assets/mestredebateria.jpg';

function FichaTecnica() {
  return (
    <>
      <style>
        {`
          .container {
            display: block;
            flex-direction: column;
            align-items: center;
            padding: 2rem 1rem;
            background: #222;
            margin: 25px;
            border-radius: 12px;
            padding: 1rem 1rem 2rem 1rem;
          }
          .ficha-tecnica-img {
            max-width: 350px;
            width: 100%;
            height: 300px;
            object-fit: cover;
            border-radius: 12px;
            box-shadow: 0 4px 18px #0002;
            margin: 1.5rem 0;
            display: block;
          }
          .container h2 {
            font-size: 1.7rem;
            font-family: "Lexend", sans-serif;
            font-weight: 900;
            font-style: normal;
            text-align: center;
            color: #CB910F;
            margin: 0.5rem;
            margin-top: 0.5rem;
          }
          .container p {
            font-size: 1.2rem;
            font-family: "Lexend", sans-serif;
            font-weight: 400;
            color: #fff;
            text-align: center;
            margin: 0.5rem 0;
          }

        `}
      </style>
      <h1>FICHA TÉCNICA</h1>
      <div className="container">
        <h2>Presidente</h2>
        <img src={presidente} alt="Presidente" className="ficha-tecnica-img" />
        <p>Paulo Sérgio</p>
      </div>
      <div className="container">
        <h2>Presidente de Honra</h2>
        <img src={PresidenteDeHonra} alt="Presidente de Honra" className="ficha-tecnica-img" />
        <p>Dib Elias</p>
      </div>
      <div className="container">
        <h2>Diretor de Carnaval</h2>
        <img/>
        <p>Nome</p>
      </div>
      <div className="container">
        <h2>Carnavalesco</h2>
        <img/>
        <p>Nome</p>
      </div>
      <div className="container">
        <h2>Interprete</h2>
        <img src={interprete} alt="Interprete" className="ficha-tecnica-img" />
        <p>Ito Melodia</p>
      </div>
      <div className="container">
        <h2>Mestre de bateria</h2>
        <img src={mestredebateria} alt="Mestre de bateria" className="ficha-tecnica-img" />
        <p>Michelzinho RP</p>
      </div>
      <div className="container">
        <h2>Rainha</h2>
        <img/>
        <p>Nome</p>
      </div>
      <div className="container">
        <h2>Mestre-Sala e Porta-Bandeira</h2>
        <img/>
        <p>Nomes</p>
      </div>
    </>
  );
}

export default FichaTecnica;